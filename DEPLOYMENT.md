# Deploying to Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Vercel CLI installed: `npm i -g vercel`

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? (default or custom name)
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: **Other**
     - Build Command: `npm run vercel-build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Deploy**
   Click "Deploy" and wait for the build to complete.

## Important Notes

- The `vercel.json` configuration routes API requests to `/api/*` through the Express server
- Static files are served from `dist/public`
- This portfolio uses in-memory storage with hardcoded data, so no database setup is required
- No environment variables are needed for basic deployment

## Post-Deployment

After successful deployment, you'll get a URL like:
- Preview: `https://your-project-name-hash.vercel.app`
- Production: `https://your-project-name.vercel.app`

You can add a custom domain in the Vercel dashboard under Project Settings > Domains.

## Troubleshooting

- **Build fails**: Check the build logs in Vercel dashboard
- **API routes not working**: Verify `vercel.json` routes configuration
- **404 errors**: Clear deployment cache and redeploy
- **Serverless function errors**: Check that the build created `dist/index.cjs` correctly
