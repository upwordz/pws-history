# Vercel Deployment Setup Guide

## Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended) or email
3. Verify your account if using email signup

## Step 2: Prepare Your Code Repository
Your code needs to be in a Git repository (GitHub, GitLab, or Bitbucket).

### If using GitHub:
1. Create new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portland Welding Supply website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portland-welding-supply.git
   git push -u origin main
   ```

## Step 3: Import Project to Vercel
1. Login to your Vercel dashboard
2. Click "New Project" or "Import Project"
3. Select your Git provider (GitHub recommended)
4. Choose your repository: `portland-welding-supply`
5. Configure project settings:
   - **Framework Preset**: Other
   - **Root Directory**: `.` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

## Step 4: Configure Environment Variables
In your Vercel project settings, add these environment variables:

### Required Variables:
- **DATABASE_URL**: `your-neon-postgres-connection-string`
- **NODE_ENV**: `production`

### How to add them:
1. Go to Project Settings → Environment Variables
2. Add each variable:
   - Name: `DATABASE_URL`
   - Value: Your PostgreSQL connection string from Neon
   - Environment: Production, Preview, Development (check all)

## Step 5: Deploy
1. Click "Deploy" button
2. Wait 2-3 minutes for build and deployment
3. Your site will be live at: `https://your-project-name.vercel.app`

## Step 6: Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `portlandweldinghistory.com`)
3. Follow DNS configuration instructions
4. Vercel automatically provides SSL certificate

## Automatic Features You Get:
✅ **Automatic HTTPS** - SSL certificate included
✅ **Global CDN** - Fast loading worldwide  
✅ **Auto-deployments** - Updates when you push to Git
✅ **Preview deployments** - Test branches before going live
✅ **Performance monitoring** - Built-in analytics
✅ **Zero downtime** - Seamless deployments

## Project Structure Ready for Vercel:
```
your-project/
├── vercel.json          ✅ Created (deployment config)
├── package.json         ✅ Ready (build scripts configured)
├── server/
│   └── index.ts         ✅ Ready (API server)
├── client/              ✅ Ready (React frontend)
├── shared/              ✅ Ready (database schema)
└── dist/                ✅ Will be created during build
```

## Troubleshooting:
- **Build fails**: Check that all dependencies are in package.json
- **Database connection**: Verify DATABASE_URL is correctly set
- **404 errors**: Ensure vercel.json routing is configured correctly

## Cost:
- **Free tier**: 100GB bandwidth, unlimited personal projects
- **Pro tier**: $20/month for commercial use with more bandwidth

Your website is ready to deploy! The configuration files are already set up for you.