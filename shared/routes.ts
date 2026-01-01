import { z } from 'zod';
import { insertProjectSchema, insertExperienceSchema, insertEducationSchema, projects, experience, education, skills } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

// Response schemas
const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  driveLink: z.string().nullable(),
  githubLink: z.string().nullable(),
});

const experienceSchema = z.object({
  id: z.number(),
  role: z.string(),
  company: z.string(),
  duration: z.string(),
  description: z.string(),
});

const educationSchema = z.object({
  id: z.number(),
  degree: z.string(),
  school: z.string(),
  year: z.string(),
});

const skillSchema = z.object({
  id: z.number(),
  category: z.string(),
  items: z.array(z.string()),
});

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(projectSchema),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(experienceSchema),
      },
    },
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education',
      responses: {
        200: z.array(educationSchema),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(skillSchema),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
