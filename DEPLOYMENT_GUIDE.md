# DEPLOYMENT GUIDE - Balizana Technologies Website

## 🚀 Deployment Steps

### Prerequisites:
- Node.js v18+ installed
- npm or yarn package manager
- Git (optional, for version control)
- Hosting account (Vercel, Netlify, or traditional hosting)

### Local Build & Testing:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Test Lighthouse scores locally
# Use Chrome DevTools → Lighthouse tab
```

### Build Output:
- `dist/` folder contains all compiled files
- Optimized bundle with code splitting
- Assets cached with fingerprinting
- Ready for deployment

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure (First deployment):**
   - Select "Vite" as framework
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Accept defaults for other options

4. **Production Domain:**
   - Vercel auto-configures caching headers
   - CDN automatically enabled
   - SSL certificates auto-renewed

---

### Option 2: Netlify

1. **Connect Repository:**
   - Login to netlify.com
   - Click "New site from Git"
   - Select GitHub/GitLab/Bitbucket repo

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (set in `netlify.toml`)

3. **Create netlify.toml:**
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"
   
   [[headers]]
   for = "/*"
   [headers.values]
   X-Content-Type-Options = "nosniff"
   X-Frame-Options = "SAMEORIGIN"
   X-XSS-Protection = "1; mode=block"
   
   [[headers]]
   for = "/assets/*"
   [headers.values]
   Cache-Control = "public, max-age=31536000, immutable"
   
   [[headers]]
   for = "/*.html"
   [headers.values]
   Cache-Control = "public, max-age=0, must-revalidate"
   
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

4. **Deploy:**
   - Push to Git repository
   - Netlify auto-deploys on push
   - Preview URLs generated automatically

---

### Option 3: Traditional Hosting (Apache)

1. **Build Locally:**
   ```bash
   npm run build
   ```

2. **Upload Files:**
   - FTP/SFTP `dist/` contents to `public_html/`
   - Keep `.htaccess` in root directory

3. **Verify .htaccess is Present:**
   ```bash
   # Should be in public_html root
   .htaccess  # Caching, compression, security headers
   ```

4. **Enable Apache Modules:**
   - Contact hosting provider to enable:
     - mod_rewrite (URL rewriting)
     - mod_expires (caching)
     - mod_deflate (gzip compression)
     - mod_headers (custom headers)

5. **Test:**
   - Visit your domain
   - Check browser console for errors
   - Run Lighthouse audit

---

### Option 4: Docker Container (For Advanced)

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build & Run:**
```bash
docker build -t balizana-website .
docker run -p 3000:3000 balizana-website
```

---

## ✅ Post-Deployment Checklist

### Immediate (First Day):
- [ ] Website loads without errors
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] No console errors (F12)
- [ ] Service Worker registered (check DevTools → Application)

### Performance (Day 1-2):
- [ ] Run Google Lighthouse audit
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Test on 3G network (DevTools → Network throttling)
- [ ] Test on mobile device
- [ ] Verify caching headers (DevTools → Network tab)

### SEO (Day 2-3):
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt accessibility
- [ ] Check structured data (schema.org validator)
- [ ] Test Open Graph tags (twitter.com/share preview)

### Security (Week 1):
- [ ] Check HTTPS certificate valid
- [ ] Verify security headers present
- [ ] Test on SSL Labs
- [ ] Check for mixed content warnings
- [ ] Monitor server logs for 404s

### Monitoring (Ongoing):
- [ ] Set up Lighthouse CI
- [ ] Configure error tracking (e.g., Sentry)
- [ ] Monitor Core Web Vitals
- [ ] Check analytics implementation
- [ ] Review server logs weekly

---

## 🔧 Environment Configuration

### Development (.env.development):
```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

### Production (.env.production):
```env
VITE_API_URL=https://api.balizana.com
VITE_ENV=production
```

### Usage in Code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📊 Monitoring & Analytics

### Google Analytics Setup:
```html
<!-- In index-vite.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Lighthouse CI Setup (GitHub Actions):
```yaml
name: Lighthouse CI
on: [pull_request, push]
jobs:
  lhci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v9
        with:
          runs: 3
          configPath: ./lighthouserc.json
```

---

## 🆘 Troubleshooting

### Issue: Service Worker not registering
**Solution:**
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# Check DevTools → Application tab
```

### Issue: Images not loading
**Solution:**
- Verify image paths are relative: `./image.png` not `/image.png`
- Check file exists in `dist/` after build
- Verify MIME types configured in server

### Issue: Lighthouse score dropped
**Solution:**
- Run audit 3+ times (varies based on network)
- Check network throttling settings
- Compare with PageSpeed Insights (real-world metrics)
- Review server response times

### Issue: 404 errors in production
**Solution:**
- Verify .htaccess `try_files` rule is present
- Enable mod_rewrite on server
- Use nginx equivalent if on nginx server

### Issue: HTTPS redirect loops
**Solution:**
- Remove duplicate HTTPS redirects from code
- Check .htaccess for conflicts
- Verify hosting provider configuration

---

## 📈 Performance Optimization After Deployment

### Monitor These Metrics:
1. **Largest Contentful Paint (LCP):** < 2.5s
2. **First Input Delay (FID):** < 100ms
3. **Cumulative Layout Shift (CLS):** < 0.1

### If LCP is slow:
- Check image sizes
- Enable image lazy loading
- Reduce critical resource count

### If FID is slow:
- Profile JavaScript execution
- Remove blocking scripts
- Use Web Workers for heavy computations

### If CLS is high:
- Reserve space for images/ads
- Avoid layout shifts during load
- Use transform instead of position changes

---

## 🔄 Update Process

### Deploy New Version:
```bash
# Local development
git add .
git commit -m "Feature: Add new component"
git push origin main

# Vercel/Netlify auto-deploys
# GitHub Actions run tests/Lighthouse CI

# Confirm in production
# Verify Lighthouse scores
# Monitor error logs
```

### Rollback if Issues:
```bash
# Vercel
vercel rollback

# Netlify
# Go to Deploys tab → select previous version
```

---

## 📞 Support & Resources

- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Accessibility:** https://www.w3.org/WAI/
- **SEO:** https://developers.google.com/search
- **Hosting Help:** Contact your provider

---

**Last Updated:** April 1, 2026
**Status:** Production Ready ✅
