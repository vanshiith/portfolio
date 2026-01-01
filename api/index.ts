import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { api } from '../shared/routes';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { url } = req;

  // Handle different API routes
  if (url === api.projects.list.path || url === '/api/projects') {
    const projects = await storage.getProjects();
    return res.json(projects);
  }

  if (url === api.experience.list.path || url === '/api/experience') {
    const experience = await storage.getExperience();
    return res.json(experience);
  }

  if (url === api.education.list.path || url === '/api/education') {
    const education = await storage.getEducation();
    return res.json(education);
  }

  if (url === api.skills.list.path || url === '/api/skills') {
    const skills = await storage.getSkills();
    return res.json(skills);
  }

  res.status(404).json({ error: 'Not found' });
}
