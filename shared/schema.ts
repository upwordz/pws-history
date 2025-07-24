import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const timelineEntries = pgTable("timeline_entries", {
  id: serial("id").primaryKey(),
  year: integer("year").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  details: text("details"),
  tags: text("tags").array(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const storySubmissions = pgTable("story_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  connection: text("connection"),
  timePeriod: text("time_period"),
  phone: text("phone"),
  storyTitle: text("story_title").notNull(),
  storyContent: text("story_content").notNull(),
  photoUrls: text("photo_urls").array(),
  status: text("status").notNull().default("pending"), // pending, approved, rejected
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  youtubeId: text("youtube_id"),
  thumbnailUrl: text("thumbnail_url"),
  duration: text("duration"),
  era: text("era"),
  category: text("category"),
  featured: boolean("featured").default(false),
});

export const insertTimelineEntrySchema = createInsertSchema(timelineEntries).omit({
  id: true,
  createdAt: true,
});

export const insertStorySubmissionSchema = createInsertSchema(storySubmissions).omit({
  id: true,
  submittedAt: true,
  status: true,
});

export const insertVideoSchema = createInsertSchema(videos).omit({
  id: true,
});

export type TimelineEntry = typeof timelineEntries.$inferSelect;
export type InsertTimelineEntry = z.infer<typeof insertTimelineEntrySchema>;

export type StorySubmission = typeof storySubmissions.$inferSelect;
export type InsertStorySubmission = z.infer<typeof insertStorySubmissionSchema>;

export type Video = typeof videos.$inferSelect;
export type InsertVideo = z.infer<typeof insertVideoSchema>;
