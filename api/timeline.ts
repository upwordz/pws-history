import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const entries = await storage.getTimelineEntries();
    res.status(200).json(entries);
  } catch (error) {
    console.error('Timeline fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch timeline entries' });
  }
}