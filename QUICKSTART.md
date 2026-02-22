# Quick Start Guide

Get your portfolio up and running in 3 simple steps!

## Step 1: Clone & Install (1-2 minutes)

```bash
# Clone this repository
git clone https://github.com/YOUR_USERNAME/sreeshanth-portfolio.git
cd sreeshanth-portfolio

# Install dependencies
npm install
```

## Step 2: Run Locally (30 seconds)

```bash
npm run dev
```

Visit `http://localhost:3000` - Your portfolio is live! 🎉

## Step 3: Deploy (2-3 minutes)

### Via Vercel (One-Click Deploy) - RECOMMENDED

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Deploy (that's it!)

Your portfolio will be live at `https://yourname-portfolio.vercel.app`

---

## Customization Tips

### Update Your Content
Edit the component files in `components/cards/`:
- Update text in each file
- Change links and contact info
- Add your own images to `public/` folder

### Change Colors
Edit `tailwind.config.js` to adjust the Sanguine theme

### Add Images
1. Place images in `public/` folder
2. Update the component files with image paths
3. Rebuild and deploy!

---

## File Structure

```
.
├── app/
│   ├── layout.js          # Main layout wrapper
│   ├── page.js            # Home page (imports all cards)
│   └── globals.css        # Global styles
├── components/
│   └── cards/             # 9 portfolio card components
├── public/                # Static files & images
├── package.json           # Dependencies
├── tailwind.config.js     # Theme configuration
└── README.md              # Full documentation
```

---

## Common Issues & Solutions

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
# Now visit http://localhost:3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails before deployment?
```bash
npm run build  # Test build locally
```

---

## Need Help?

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

**Your portfolio is ready to impress! 🚀**
