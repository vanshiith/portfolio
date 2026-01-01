# Vanshiith's Portfolio Website

## Overview

This is a personal portfolio website for Vanshiith, showcasing professional experience, projects, education, and skills. The application follows a modern full-stack architecture with a React frontend and Express backend, using a retro/brutalist design aesthetic with bold borders, monospace typography, and geometric styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with a custom brutalist/retro theme configuration
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll reveal effects
- **Build Tool**: Vite with React plugin and custom Replit plugins

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration
- **API Pattern**: RESTful endpoints defined in shared routes with typed responses
- **Storage Layer**: Memory-based storage class (IStorage interface) with seeded portfolio data

### Shared Code Structure
- **Location**: `/shared` directory contains code used by both frontend and backend
- **Schema**: Database table definitions using Drizzle's pgTable
- **Routes**: Type-safe API route definitions with Zod response schemas
- **Types**: Shared TypeScript types inferred from Drizzle schemas

### Data Flow
1. Frontend components use custom hooks (`use-portfolio.ts`) that wrap React Query
2. Hooks fetch from typed API endpoints defined in `shared/routes.ts`
3. Express routes in `server/routes.ts` call storage methods
4. Storage class returns portfolio data (projects, experience, education, skills)

### Build System
- Development: `tsx` for TypeScript execution with hot reloading via Vite
- Production: Custom build script using esbuild for server bundling and Vite for client
- Database migrations: Drizzle Kit with `db:push` command

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit for schema definition and queries
- **connect-pg-simple**: PostgreSQL session store for Express (available but not currently used)

### UI/Frontend Libraries
- **Radix UI**: Headless component primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-styled component collection using Radix primitives
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider component

### Development Tools
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Type checking across the codebase
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS/Autoprefixer**: CSS processing

### Fonts
- IBM Plex Mono: Primary monospace font
- Inter: Sans-serif font for body text
- DM Sans, Geist Mono, Fira Code, Architects Daughter: Additional typography options