import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertStorySubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Timeline routes
  app.get("/api/timeline", async (_req, res) => {
    try {
      const entries = await storage.getTimelineEntries();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch timeline entries" });
    }
  });

  app.get("/api/timeline/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const entry = await storage.getTimelineEntry(id);
      if (!entry) {
        return res.status(404).json({ message: "Timeline entry not found" });
      }
      res.json(entry);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch timeline entry" });
    }
  });

  // Story submission routes
  app.post("/api/stories", async (req, res) => {
    try {
      const validatedData = insertStorySubmissionSchema.parse(req.body);
      const submission = await storage.createStorySubmission(validatedData);
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid submission data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create story submission" });
    }
  });

  app.get("/api/stories", async (_req, res) => {
    try {
      const submissions = await storage.getStorySubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch story submissions" });
    }
  });

  app.patch("/api/stories/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!["pending", "approved", "rejected"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      const submission = await storage.updateStorySubmissionStatus(id, status);
      if (!submission) {
        return res.status(404).json({ message: "Story submission not found" });
      }
      res.json(submission);
    } catch (error) {
      res.status(500).json({ message: "Failed to update story submission status" });
    }
  });

  // Video routes
  app.get("/api/videos", async (_req, res) => {
    try {
      const videos = await storage.getVideos();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch videos" });
    }
  });

  // Search route
  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }
      
      const results = await storage.searchContent(query);
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Search failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
