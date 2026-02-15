# 🚀 Personal Portfolio Website

A modern, dark-themed portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, responsive design, and a futuristic tech aesthetic.

## ✨ Features

- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Dark Theme** - Eye-friendly dark color scheme with neon accents
- **Smooth Animations** - Scroll reveal animations, typing effects, and micro-interactions
- **Custom Cursor** - Interactive custom cursor with smooth following effect
- **Interactive Sections** - All sections have hover effects and animations
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Semantic HTML and proper meta tags
- **Performance Optimized** - Fast loading and smooth scrolling

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Sections Included

1. **Hero Section** - Name, roles (typing animation), CTA buttons, social links
2. **About Section** - Brief introduction and statistics
3. **Education** - Timeline-based education history
4. **Work Experience** - Detailed internship/work experience
5. **Projects** - Portfolio projects with tech stack
6. **Skills** - Categorized skills with progress bars
7. **Achievements** - Awards, certifications, coding profiles
8. **Leadership** - Positions of responsibility
9. **Contact** - Contact form and social links

## 🚀 Quick Start

### Option 1: Direct Use
1. Download all three files (`index.html`, `style.css`, `script.js`)
2. Place them in the same folder
3. Open `index.html` in your browser

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## ✏️ Customization Guide

### 📝 Personal Information

**1. Replace Placeholder Text in `index.html`:**

Search and replace the following in `index.html`:

- `[Your Name]` → Your actual name
- `your.email@example.com` → Your email
- `yourusername` → Your GitHub/LinkedIn/etc. username
- Phone number and location

**2. Update Your Information:**

- **Line 18:** Update the `<title>` and meta description
- **Lines 22-28:** Replace logo text with your name
- **Lines 44-56:** Update hero section with your name and roles
- **Lines 65-77:** Update social media links
- **Lines 102-117:** Write your own "About Me" text
- **Lines 137-173:** Replace education details
- **Lines 191-247:** Update work experience
- **Lines 267-398:** Replace project information
- **Lines 429-538:** Update skills (add/remove as needed)
- **Lines 558-615:** Update achievements and certifications
- **Lines 643-735:** Update leadership/responsibility sections
- **Lines 759-787:** Update contact information

### 🎨 Color Customization

Edit CSS variables in `style.css` (Lines 7-20):

```css
:root {
    --bg-primary: #0a0a0f;           /* Main background */
    --accent-primary: #00d9ff;        /* Primary accent (cyan) */
    --accent-secondary: #7b68ee;      /* Secondary accent (purple) */
    /* ... more colors ... */
}
```

**Popular Color Schemes:**

**Blue/Purple (Current):**
```css
--accent-primary: #00d9ff;
--accent-secondary: #7b68ee;
```

**Green/Teal:**
```css
--accent-primary: #00ff88;
--accent-secondary: #00d4aa;
```

**Red/Pink:**
```css
--accent-primary: #ff6b9d;
--accent-secondary: #ff4757;
```

**Orange/Yellow:**
```css
--accent-primary: #ffa502;
--accent-secondary: #ff6348;
```

### 🖼️ Adding Your Photo

Replace the icon in the profile card (Line 86-92 in `index.html`):

**Option 1: Use an image**
```html
<div class="profile-pic-inner">
    <img src="your-photo.jpg" alt="Your Name" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
</div>
```

**Option 2: Keep the icon** (current setup)
```html
<div class="profile-pic-inner">
    <i class="fas fa-user"></i>
</div>
```

### 🔗 Social Links

Update social media URLs in multiple places:

**Hero Section (Lines 65-77):**
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">
<a href="https://leetcode.com/YOUR_USERNAME" target="_blank">
<a href="mailto:YOUR_EMAIL" target="_blank">
```

**Coding Profiles (Lines 617-634):**
```html
<a href="https://leetcode.com/YOUR_USERNAME" target="_blank">
<a href="https://codeforces.com/profile/YOUR_USERNAME" target="_blank">
<a href="https://www.codechef.com/users/YOUR_USERNAME" target="_blank">
<a href="https://www.hackerrank.com/YOUR_USERNAME" target="_blank">
```

**Contact Section (Lines 778-790):**
Update all social links here as well.

### 📊 Updating Statistics

**Counter Numbers (Lines 123-133):**
```html
<h3 class="stat-number" data-target="10">0</h3>  <!-- Projects -->
<h3 class="stat-number" data-target="500">0</h3> <!-- Problems Solved -->
<h3 class="stat-number" data-target="5">0</h3>   <!-- Achievements -->
```

Change `data-target` values to your actual numbers.

**Skill Progress (Lines 454-508):**
```html
<div class="skill-progress" data-progress="90"></div>
```

Change `data-progress` from 0-100 to reflect your skill level.

### 🎯 Adding/Removing Sections

**To Remove a Section:**
1. Delete the entire `<section>` block from `index.html`
2. Remove the corresponding nav link from the navbar

**To Add a New Section:**
1. Copy an existing section structure
2. Update IDs and content
3. Add a new nav link in the navbar

### 📱 Typing Animation Roles

Edit the roles array in `script.js` (Lines 74-80):

```javascript
const roles = [
    'Full Stack Developer',      // Replace these
    'Cybersecurity Enthusiast',  // with your
    'Competitive Programmer',    // own roles
    'Problem Solver',
    'Tech Innovator'
];
```

### 📧 Contact Form Setup

The form currently shows a success message. To make it functional:

**Option 1: Use Formspree**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Use EmailJS**
Add EmailJS script and configure in `script.js`

**Option 3: Connect to your backend**
Modify the form submission handler in `script.js` (Lines 241-273)

## 🎨 Advanced Customization

### Changing Fonts

Current fonts (from Google Fonts):
- Primary: Poppins
- Code: Fira Code

To change:
1. Update the Google Fonts link in `index.html` (Line 11)
2. Update CSS font-family in `style.css`

### Adding More Projects

Copy one of the existing project card blocks (Lines 267-398) and modify:
```html
<div class="project-card">
    <div class="project-glow"></div>
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-YOUR-ICON"></i>
        </div>
        <div class="project-links">
            <a href="YOUR_GITHUB_URL" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
            <a href="YOUR_DEMO_URL" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">
        Your project description here...
    </p>
    <div class="project-tech">
        <span class="tech-badge">Tech1</span>
        <span class="tech-badge">Tech2</span>
    </div>
</div>
```

### Customizing Animations

**Animation Speed:**
Edit CSS variables (Lines 17-19):
```css
--transition-fast: 0.2s ease;    /* Make faster/slower */
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

**Disable Animations:**
Set all transition values to `0s` or add to `style.css`:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

## 🌐 Deployment

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at `https://username.github.io/repo-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on every push

### Vercel
1. Import your GitHub repository
2. Configure build settings (none needed for static site)
3. Deploy

### Custom Domain
After deployment, you can add a custom domain in your hosting provider's settings.

## 🔧 Troubleshooting

**Icons not showing:**
- Check internet connection (Font Awesome loads from CDN)
- Or download Font Awesome locally

**Animations not working:**
- Check browser console for JavaScript errors
- Ensure all three files are in the same directory

**Form not working:**
- Form is UI-only by default
- Follow "Contact Form Setup" section above

**Mobile menu not closing:**
- Clear browser cache
- Check for JavaScript errors in console

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

Minimum versions: Last 2 years

## 🎯 Performance Tips

1. **Optimize images** - Use compressed images, WebP format
2. **Minify files** - Use CSS/JS minifiers for production
3. **Enable caching** - Set proper cache headers
4. **Use CDN** - Host static assets on CDN
5. **Lazy load images** - Already implemented in JavaScript

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to customize and improve this template!

## 📞 Support

If you encounter any issues or have questions:
1. Check this README thoroughly
2. Inspect browser console for errors
3. Verify all files are in the same directory

## 🎉 Credits

- Font Awesome for icons
- Google Fonts for typography
- Inspired by modern developer portfolios

---

**Built with ❤️ for developers, by developers**

Happy coding! 🚀
