import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertStorySubmissionSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const submissions = await storage.getStorySubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Stories fetch error:', error);
      res.status(500).json({ message: 'Failed to fetch story submissions' });
    }
  } else if (req.method === 'POST') {
    try {
      const validatedData = insertStorySubmissionSchema.parse(req.body);
      const submission = await storage.createStorySubmission(validatedData);
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Invalid submission data', errors: error.errors });
      }
      console.error('Story creation error:', error);
      res.status(500).json({ message: 'Failed to create story submission' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}