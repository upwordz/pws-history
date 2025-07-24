# Portland Welding Supply History Archive

## Overview

This is a React-based web application that serves as a digital history archive for Portland Welding Supply, founded in 1945 by the MacDonald brothers. The application provides an interactive timeline, complete historical documentation, video gallery, and story submission functionality to preserve and share the company's 75+ year legacy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between frontend, backend, and shared code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom PWS brand colors
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **API Pattern**: RESTful endpoints under `/api/` prefix

### Shared Code
- **Schema**: Centralized database schema and validation using Drizzle and Zod
- **Types**: Shared TypeScript types between frontend and backend

## Key Components

### Database Schema (shared/schema.ts)
Three main entities:
- **Timeline Entries**: Historical company milestones with rich metadata
- **Story Submissions**: User-submitted stories and memories
- **Videos**: Company commercials and historical footage

### Frontend Pages
- **Home**: Hero section with company overview and founder information
- **Timeline**: Interactive chronological company history
- **History**: Complete historical documentation in prose format
- **Commercials**: Video gallery for company videos and commercials
- **Submit Story**: Form for community story submissions

### API Endpoints
- `GET /api/timeline` - Retrieve all timeline entries
- `GET /api/timeline/:id` - Get specific timeline entry
- `POST /api/stories` - Submit new story
- `GET /api/stories` - Retrieve story submissions
- `GET /api/videos` - Get video gallery content

### Storage Layer
Abstracted storage interface with in-memory implementation for development, designed to easily swap to PostgreSQL database in production.

## Data Flow

1. **Client requests** are routed through Wouter to appropriate page components
2. **Page components** use TanStack Query to fetch data from API endpoints
3. **API endpoints** in the Express server handle requests and interact with storage layer
4. **Storage layer** abstracts database operations, currently using in-memory storage with sample data
5. **Responses** are cached by TanStack Query for optimal performance

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Inter & Georgia fonts**: Typography via Google Fonts

### Development and Build
- **Vite**: Fast development server and build tool
- **TSX**: TypeScript execution for development
- **ESBuild**: Production bundling for server code

### Database and Validation
- **Drizzle ORM**: Type-safe database toolkit
- **Zod**: Schema validation library
- **@neondatabase/serverless**: Neon PostgreSQL driver

### Forms and State
- **React Hook Form**: Form handling with validation
- **TanStack Query**: Server state management
- **Wouter**: Lightweight routing

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: TSX for TypeScript execution
- **Database**: In-memory storage with sample data

### Production Build
- **Frontend**: Static assets built with Vite to `dist/public`
- **Backend**: Bundled with ESBuild to `dist/index.js`
- **Database**: PostgreSQL via Neon with Drizzle migrations

### Environment Configuration
- `NODE_ENV`: Controls development vs production behavior
- `DATABASE_URL`: PostgreSQL connection string (required for production)
- Replit-specific configuration for development environment

The application is designed to run seamlessly in both development (with in-memory data) and production (with PostgreSQL) environments, making it easy to develop and deploy.