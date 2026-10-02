# True Force Security Services Pvt Ltd - Website

Professional, production-ready website with an industry-standard folder structure optimized for web server hosting, domain deployment, high performance, and effortless debugging.

---

## 📁 Industry-Standard Directory Structure

```text
Trueforce security/
├── index.html                   # Main entry point (loaded automatically by all web servers)
├── 404.html                     # Custom branded 404 error page
├── robots.txt                   # Search engine crawler instructions & sitemap location
├── sitemap.xml                  # XML sitemap for Google & search engine indexing
├── .htaccess                    # Apache/LiteSpeed config: HTTPS, compression, caching & security
│
├── css/
│   └── style.css                # All styles, color variables, dark/light theme, responsive layouts
│
├── js/
│   └── main.js                  # Clean interactive logic: theme toggle, navigation, lightbox,
│                                # WhatsApp quote generator & virtual assistant chatbot
│
└── assets/
    ├── images/
    │   ├── favicon.png          # Browser tab icon
    │   ├── logo.png             # Brand logo (used in navigation bar & footer)
    │   ├── night-duty.jpg       # About section hero image
    │   ├── gallery-briefing.jpg # Gallery 1: Guard briefing
    │   ├── gallery-guards-duty.jpg # Gallery 2: Guards on duty
    │   ├── gallery-ceremonial-uniform.jpg # Gallery 3: Ceremonial uniform
    │   ├── gallery-society-ceremony.jpg   # Gallery 4: Society ceremony
    │   ├── gallery-flag-hoisting.jpg      # Gallery 5: Flag hoisting
    │   └── gallery-republic-day.jpg       # Gallery 6: Republic Day celebration
    │
    └── icons/                   # Reserved for custom SVGs / icons
```

---

## 🚀 How to Publish on a Server or Domain

### Option 1: cPanel / Shared Hosting (Hostinger, GoDaddy, Bluehost, Namecheap)
1. Log into your **cPanel** and open **File Manager**.
2. Navigate to `public_html/` (or your domain's document root folder).
3. Upload all the files and folders:
   - `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `.htaccess`
   - `css/` folder
   - `js/` folder
   - `assets/` folder
4. Make sure `index.html` sits directly inside `public_html/` (not inside a subfolder).
5. Open your domain (e.g. `https://yourdomain.com/`) in your browser to verify.

### Option 2: Netlify / Vercel / GitHub Pages (Zero Config)
- **Netlify**: Drag and drop the `Trueforce security` folder into Netlify Drop.
- **Vercel**: Run `vercel` or link your Git repository.
- **GitHub Pages**: Push this folder to a GitHub repository, go to **Settings > Pages**, and set the root branch.

### Option 3: VPS / Nginx Web Server
Point your Nginx `root` directive to the folder:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/trueforcesecurity;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 🛠️ How to Easily Solve Any Future Error

| Issue / Goal | Where to check | How to fix |
| :--- | :--- | :--- |
| **Styling, colors, margins, fonts** | `css/style.css` | Open `css/style.css`. Theme colors are defined at the very top under `:root` (`--gold`, `--bg`, etc.). |
| **Phone number / Contact info** | `index.html` & `js/main.js` | Update phone numbers in `index.html` and the constant `PH` at the top of `js/main.js`. |
| **Chatbot answers / questions** | `js/main.js` | Modify the `KB` array in `js/main.js` to add keywords and responses. |
| **Adding or replacing images** | `assets/images/` | Place your new `.png` or `.jpg` file in `assets/images/` and update the `src` attribute in `index.html`. |
| **Form WhatsApp text** | `js/main.js` | Look for the `$('#qsend').onclick` function in `js/main.js`. |
| **Console JavaScript error** | Browser F12 Console | The console will show the exact line in `js/main.js` (e.g. `main.js:45`). |
| **Server caching / Gzip** | `.htaccess` | Managed automatically via mod_deflate and mod_expires. |

---

## 🌟 Key Benefits of This Structure
1. **98% HTML Size Reduction**: HTML reduced from **1.05 MB to ~20 KB** by replacing heavy inline Base64 strings with clean asset references.
2. **Browser Caching**: Visitors' browsers cache `style.css`, `main.js`, and images so repeat visits load instantly.
3. **SEO & Social Sharing Ready**: Includes OpenGraph, Twitter Cards, LocalBusiness JSON-LD schema, `sitemap.xml`, and `robots.txt`.
4. **Clean Debugging**: Styles, scripts, and media are completely decoupled.
