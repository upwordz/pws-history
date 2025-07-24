// This file serves as a catch-all for API routes that don't match specific endpoints
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(404).json({ message: 'API endpoint not found' });
}