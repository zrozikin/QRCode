# 🎯 Setup & Deployment Guide

Panduan lengkap untuk membuat, mengembangkan, dan men-deploy aplikasi QR Code Generator ke GitHub.

## 📋 Prerequisites

Sebelum memulai, pastikan Anda sudah menginstall:

1. **Node.js & npm** (versi 14.0 atau lebih tinggi)
   - Download dari https://nodejs.org/
   - Verifikasi dengan: `node -v` dan `npm -v`

2. **Git** (untuk version control)
   - Download dari https://git-scm.com/
   - Verifikasi dengan: `git --version`

3. **GitHub Account**
   - Daftar di https://github.com jika belum punya

## 🚀 Setup Project Lokal

### Step 1: Create GitHub Repository

1. Login ke GitHub
2. Klik "+" di top-right → "New repository"
3. Repository name: `qrcode-generator`
4. Deskripsi: "Modern & Powerful QR Code Generator"
5. Pilih "Public" (agar bisa di-deploy ke GitHub Pages)
6. Klik "Create repository"

### Step 2: Clone ke Komputer Lokal

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/qrcode-generator.git
cd qrcode-generator

# Verifikasi berhasil
ls -la
```

### Step 3: Setup React Project

```bash
# Create React App dengan Vite (lebih cepat & ringan)
npm create vite@latest . -- --template react

# Atau gunakan Create React App (traditional way)
npx create-react-app .

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Lucide icons
npm install lucide-react
```

### Step 4: Siapkan File Struktur

```bash
# Buat direktori src jika belum ada
mkdir -p src

# Copy file component ke src/
cp ../qrcode-generator.jsx src/App.jsx

# Update App.jsx untuk CSS import
```

### Step 5: Setup Tailwind CSS

Edit `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Step 6: Test Lokal

```bash
# Start development server
npm start

# Buka http://localhost:3000 di browser
```

Jika berhasil, Anda akan melihat aplikasi QR Code Generator!

## 🔧 Development

### Project Structure

```
qrcode-generator/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx              # Main component
│   ├── index.css            # Tailwind setup
│   └── index.js             # Entry point
├── .gitignore               # Files to ignore
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── vite.config.js           # Vite config (jika pakai Vite)
└── README.md
```

### Common Development Tasks

```bash
# Start development server
npm start

# Build untuk production
npm run build

# Preview production build lokal
npm run preview

# Test aplikasi
npm test

# Lint code
npm run lint
```

### Tips Development

1. **Hot Reload**: Changes otomatis reload di browser
2. **DevTools**: Gunakan React Developer Tools browser extension
3. **Console**: Check browser console untuk error messages
4. **Testing**: Buat file `.test.jsx` untuk unit tests

## 📦 Deployment

### Option 1: Deploy ke GitHub Pages (FREE ⭐)

**Kelebihan**: Gratis, auto-deploy, GitHub domain

**Setup**:

```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Update package.json
{
  "homepage": "https://YOUR_USERNAME.github.io/qrcode-generator",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}

# 3. Deploy
npm run deploy

# Tunggu 2-3 menit, kemudian akses:
# https://YOUR_USERNAME.github.io/qrcode-generator
```

### Option 2: Deploy ke Vercel (RECOMMENDED ✨)

**Kelebihan**: Gratis, sangat cepat, auto-deploy, custom domain

**Setup**:

```bash
# 1. Push code ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Visit https://vercel.com/new
# 3. Import GitHub repository
# 4. Vercel auto-detect React project
# 5. Click "Deploy"

# Selesai! URL akan di-generate otomatis
```

### Option 3: Deploy ke Netlify

**Kelebihan**: Gratis, user-friendly, drag-and-drop

**Setup**:

```bash
# 1. Push code ke GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Visit https://netlify.com
# 3. Connect GitHub account
# 4. Select repository
# 5. Build settings otomatis terdeteksi
# 6. Click "Deploy site"
```

### Option 4: Deploy ke Heroku (Node.js Server)

Untuk tambahan backend (optional):

```bash
# 1. Install Heroku CLI
# 2. Login: heroku login
# 3. Create app: heroku create APP_NAME
# 4. Deploy: git push heroku main
```

## 🔐 GitHub Setup

### Setup SSH Key (Recommended)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add ke GitHub: Settings → SSH Keys → New SSH Key
```

### Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify
git config --list
```

## 📝 Workflow Development

### Feature Development

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes
# ... edit files ...

# 3. Stage dan commit
git add .
git commit -m "feat: Add new feature"

# 4. Push ke GitHub
git push origin feature/new-feature

# 5. Open Pull Request di GitHub
# 6. Review dan merge ke main
```

### Git Commit Convention

Gunakan conventional commits:

```bash
# Feature
git commit -m "feat: Add QR code batch generation"

# Bug fix
git commit -m "fix: Handle empty input correctly"

# Documentation
git commit -m "docs: Update README with examples"

# Refactor
git commit -m "refactor: Optimize QR code generation"
```

## 🐛 Troubleshooting

### Issue: "npm: command not found"
```bash
# Solution: Install Node.js dari https://nodejs.org/
node -v  # Verify installation
```

### Issue: "Port 3000 already in use"
```bash
# Solution: Kill process atau gunakan port lain
npm start -- --port 3001
```

### Issue: "Module not found"
```bash
# Solution: Install semua dependencies
npm install
```

### Issue: "Build fails pada Vercel/Netlify"
```bash
# Solution: Check build logs dan install missing packages
npm install --save-dev [package-name]
git add package.json package-lock.json
git commit -m "Add missing dependencies"
git push
```

### Issue: "GitHub Pages showing 404"
```bash
# Solution: Verify homepage di package.json
# "homepage": "https://USERNAME.github.io/qrcode-generator"
npm run deploy
```

## 📚 Helpful Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## ✅ Checklist Sebelum Deploy

- [ ] Code tested di lokal
- [ ] Tidak ada error di console
- [ ] README.md updated
- [ ] Git commits bersih dan meaningful
- [ ] .gitignore configured (exclude node_modules, build, etc)
- [ ] Environment variables tersimpan di .env
- [ ] Mobile responsive tested
- [ ] Cross-browser tested
- [ ] SEO meta tags ditambahkan
- [ ] Performance optimized

## 🎉 Next Steps

Setelah deploy berhasil:

1. **Share URL** ke teman dan keluarga
2. **Add Features** - batch generation, QR scanner, etc
3. **Monitoring** - track traffic dengan Google Analytics
4. **Promote** - share di social media, forums
5. **Monetize** - tambah ads atau premium features (optional)

---

**Happy Deploying! 🚀**
