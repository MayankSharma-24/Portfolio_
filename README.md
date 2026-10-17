# Mayank Sharma: Personal Portfolio

A personal portfolio website for Mayank Sharma, built using verified facts from his resume.

Designed in an editorial, typography forward style inspired by nithinmwarrier.com, featuring clean borders, an accent colour, light and dark mode support, responsive layouts, and case study documentation for technical projects.

## Tech Stack

* Framework: React 19 and TypeScript
* Bundler and Tooling: Vite
* Styling: Tailwind CSS v3
* Icons: Lucide React and custom brand SVGs
* Typography: Syne, Plus Jakarta Sans, JetBrains Mono

## File Structure

* index.html: HTML root, typography, canonical URL, and favicon metadata
* package.json: Project dependencies and build scripts
* tailwind.config.js: Design tokens and dark mode configuration
* src/data/resumeData.ts: Single source of truth for all resume facts
* src/components/Navbar.tsx: Navigation with theme toggle and section jumps
* src/components/HeroSection.tsx: Name, title, positioning statement, and verified metric highlights
* src/components/AboutSection.tsx: Profile statement and credentials
* src/components/ExperienceSection.tsx: MHTECHIN current role and prior internships
* src/components/ProjectsSection.tsx: Projects with case study expanders
* src/components/SkillsSection.tsx: Technical capabilities and tools
* src/components/EducationSection.tsx: Degree details and industry certifications
* src/components/ContactSection.tsx: Contact channels and legal page links
* src/components/PrivacyPage.tsx: Privacy policy page
* src/components/TermsPage.tsx: Terms and conditions page

## How to Edit Content

All personal information, roles, projects, links, and details are kept inside:
`src/data/resumeData.ts`

To update any detail:
1. Open `src/data/resumeData.ts`.
2. Update the string or array.
3. Save the file. Vite hot module reloading will display the changes immediately.

## How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## How to Deploy and Connect Custom Domain

### Option 1: Vercel

1. Push your repository to GitHub.
2. In Vercel, click "Add New Project" and import your repository.
3. Framework Preset: Vite
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click Deploy.
7. Go to Project Settings > Domains, add your custom domain.
8. Add the CNAME or A record provided by Vercel in your DNS manager.

### Option 2: Netlify

1. In Netlify, click "Add new site" > "Import an existing project".
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy Site.
6. Under Domain management, add your custom domain and configure DNS records.
