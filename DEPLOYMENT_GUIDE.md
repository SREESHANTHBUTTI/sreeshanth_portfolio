# Deployment Guide

## 🚀 Push to GitHub & Deploy on Vercel

Follow these steps to get your portfolio live on Vercel:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. Create a repository named `sreeshanth-portfolio`
4. Choose **Public** (for GitHub Pages to work)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 2: Push to GitHub

After creating the repository on GitHub, run these commands in your terminal:

```bash
cd c:\Users\srees\Desktop\portfolio

# Add GitHub as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/sreeshanth-portfolio.git

# Rename branch to main (if using older Git)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy on Vercel

#### Option A: One-Click Deploy (Recommended)

1. Visit [vercel.com/new](https://vercel.com/new)
2. Click **Continue with GitHub**
3. Search and select `sreeshanth-portfolio` repository
4. Keep default settings (Next.js is auto-detected)
5. Click **Deploy**
6. Wait 2-3 minutes for deployment to complete

#### Option B: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your project and deploy.

#### Option C: GitHub Sync (Auto-Redeploy)

After deploying with Option A, any push to GitHub will automatically trigger a new deployment on Vercel!

### Step 4: Verify Deployment

- Your portfolio will be live at: `https://sreeshanth-portfolio.vercel.app`
- Or use a custom domain by going to **Settings** → **Domains** in Vercel

## 📝 Making Updates

After deploying, to make changes:

```bash
# 1. Make changes to files locally
# 2. Commit changes
git add .
git commit -m "Update portfolio content"

# 3. Push to GitHub
git push origin main

# 4. Vercel automatically deploys!
```

## 🔐 GitHub Access Token (If Needed)

If you get authentication errors:

1. Create a Personal Access Token:
   - GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Select `repo` scope
   - Copy the token

2. Then use the token when pushing:
   ```bash
   git remote set-url origin https://TOKEN@github.com/USERNAME/sreeshanth-portfolio.git
   git push -u origin main
   ```

## 🎯 Custom Domain (Optional)

To use a custom domain like `sreeshanth.dev`:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Vercel → Project Settings → Domains
3. Add your custom domain
4. Update your domain's DNS records as instructed
5. Wait 24-48 hours for DNS propagation

## ✅ Checklist

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Local repo pushed to GitHub
- [ ] Signed up for Vercel
- [ ] Deployed to Vercel
- [ ] Portfolio accessible at vercel.app URL
- [ ] All 9 sections visible and styled correctly
- [ ] Links working (mailto, tel, external links)
- [ ] Mobile responsive layout tested

## 🆘 Troubleshooting

### Deploy Fails
- Check `package.json` has correct scripts
- Run `npm install` locally and test `npm run build`
- Check Next.js version compatibility

### Next.js Build Error
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### GitHub Push Fails
```bash
# Check remote URL
git remote -v

# Reset if needed
git remote remove origin
git remote add origin https://github.com/USERNAME/sreeshanth-portfolio.git
git push -u origin main
```

## 📞 Support

For issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- GitHub: [github.com/contact](https://github.com/contact)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Your portfolio is ready! Now just follow the steps above to get it live! 🚀**
