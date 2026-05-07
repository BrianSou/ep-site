# Brian Sounevongsa Electronic Portfolio

This is a static portfolio website. It is designed to be deployed through a Git-based host or uploaded directly to a web server.

## What is included

- `index.html` - homepage and professional narrative
- `projects.html` - searchable/filterable project gallery
- `projects/*.html` - individual artifact pages
- `about.html` - personal/professional narrative
- `resume.html` - resume page with printable layout
- `reflection.html` - final screencast/reflection page structure
- `contact.html` - contact page
- `assets/css/styles.css` - site styling
- `assets/js/main.js` - navigation, filtering, search, reveal animations
- `assets/img/*.svg` - local project visuals and favicon
- `assets/Brian_Sounevongsa_Resume.pdf` - one-page resume PDF

## Before publishing

Update these items with your exact information:

1. `contact.html` email, LinkedIn, and GitHub links.
2. `assets/Brian_Sounevongsa_Resume.pdf` if you already have a polished resume.
3. Any project details that differ from your actual artifacts.
4. `reflection.html` video placeholder after you record the final screencast.

No external CSS, fonts, or JavaScript libraries are required.

## cPanel deployment note

This package includes a root-level `.cpanel.yml` file for cPanel Git deployment. Keep it beside `index.html` in the repository root and commit all files before deploying. The default deploy path is `$HOME/public_html/`; change it inside `.cpanel.yml` only if your cPanel site root is different.
