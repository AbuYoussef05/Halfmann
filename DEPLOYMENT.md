# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Push to GitHub
1. In Replit, click the **Git** button in the left sidebar
2. Stage all your changes
3. Commit with a message like "Initial commit for GitHub Pages"
4. Connect to your GitHub repository: `https://github.com/AbuYoussef05/AquaPlanner`
5. Push your changes

### 2. Enable GitHub Pages
1. Go to your repository: `https://github.com/AbuYoussef05/AquaPlanner`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Automatic Deployment
- Once you push to the `main` branch, GitHub Actions will automatically:
  - Install dependencies
  - Build your site with the correct base path
  - Deploy to GitHub Pages
- Your site will be live at: `https://AbuYoussef05.github.io/AquaPlanner/`

### 4. Verify Deployment
1. Go to the **Actions** tab in your GitHub repository
2. Watch the deployment workflow run
3. Once complete, visit your site at the URL above

## Files Created
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- `build-gh-pages.sh` - Build script with correct base path
- `.nojekyll` - Prevents GitHub from processing site with Jekyll

## Troubleshooting
- If the site doesn't load, check that GitHub Pages is enabled in Settings → Pages
- Ensure the workflow has completed successfully in the Actions tab
- Make sure you're using the correct URL with `/AquaPlanner/` at the end
