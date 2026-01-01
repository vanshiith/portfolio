import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.experience.list.path, async (_req, res) => {
    const experience = await storage.getExperience();
    res.json(experience);
  });

  app.get(api.education.list.path, async (_req, res) => {
    const education = await storage.getEducation();
    res.json(education);
  });

  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  return httpServer;
}
