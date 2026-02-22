# Sreeshanth Butti - AI/ML Developer Portfolio

A professional portfolio website built with **Next.js**, **React**, and **Tailwind CSS**, showcasing Sreeshanth Butti's expertise in AI/ML, Deep Learning, NLP, and Speech Processing.

## 🎨 Design Features

- **Sanguine Theme**: Dark, sophisticated burgundy (#740B0A) and black color scheme
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Modern UI**: Clean, professional cards with smooth transitions and hover effects
- **Fast Performance**: Optimized with Next.js for production-ready deployment

## 📋 Portfolio Sections

1. **Hero/Intro Card** - Name, title, brief intro, and quick action buttons
2. **Contact** - Email, phone, and LinkedIn contact options with icons
3. **Summary & Skills** - Professional summary and 8 categories of technical skills
4. **Projects** - Highlighted projects with tech stacks and descriptions
5. **Technical Interests** - Deep Learning, NLP & LLMs, and Speech Processing
6. **Leadership & Roles** - Dance club presidency achievements and responsibilities
7. **Education** - IIIT Dharwad BTech and earlier educational background
8. **Professional Profile Snapshot** - Key stats at a glance
9. **Next Steps & Connect** - Call-to-action and closing section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sreeshanthbutti3/sreeshanth-portfolio.git
   cd sreeshanth-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🔨 Building for Production

```bash
npm run build
npm start
```

## 📦 Deployment on Vercel

### Option 1: Via GitHub Integration
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### Option 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

The deployment will be live at your Vercel URL (typically `projectname.vercel.app`)

## 📝 Customization

### Color Scheme
Edit `tailwind.config.js` to modify the Sanguine theme colors:
```javascript
colors: {
  sanguine: {
    700: '#740b0a', // Main burgundy
    // ... other shades
  }
}
```

### Content Updates
Edit individual card components in `/components/cards/`:
- `HeroCard.js` - Main intro section
- `ContactCard.js` - Contact information
- `SummarySkillsCard.js` - About and skills
- `ProjectsCard.js` - Project portfolio
- And more...

### Images
Replace placeholder images by:
1. Adding images to `/public` folder
2. Updating image paths in components

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: JavaScript/JSX

## 📁 Project Structure

```
.
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Main page
│   └── globals.css        # Global styles
├── components/
│   └── cards/             # Card components
│       ├── HeroCard.js
│       ├── ContactCard.js
│       ├── SummarySkillsCard.js
│       ├── ProjectsCard.js
│       ├── InterestsCard.js
│       ├── LeadershipCard.js
│       ├── EducationCard.js
│       ├── ProfileSnapshotCard.js
│       └── NextStepsCard.js
├── public/                # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind config
└── vercel.json            # Vercel config
```

## 🔗 Links

- **Email**: sreeshanthbutti3@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/sreeshanth-b-26a8a9295
- **GitHub**: https://github.com/sreeshanthbutti3

## 📄 License

This portfolio is personal work. Feel free to use it as a template for your own portfolio.

## 🎯 Next Steps

1. Clone or fork this repository
2. Customize content with your information
3. Push to GitHub
4. Deploy on Vercel with one click
5. Share your portfolio!

---

**Built with ❤️ for AI/ML enthusiasts**
