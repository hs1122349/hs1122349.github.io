# hedi-souki-portfolio-site

Static site for hedidatastrategy.fr, rebuilt to run on GitHub Pages with no
build step. Plain HTML, CSS, and vanilla JavaScript, no PHP or WordPress.

## Pages

About, Experience, Projects, Activities, Academics, Blog, Testimonial,
Testimonials, and Contact each live in their own folder as `index.html`, so
URLs match the original site (`/about/`, `/projects/`, and so on). The
homepage repeats a shorter version of every section with a "See more"
toggle, the same as the live site.

## Structure

```
hedi-souki-portfolio-site/
├── index.html
├── 404.html
├── .nojekyll
├── about/index.html
├── experience/index.html
├── projects/index.html
├── activities/index.html
├── academics/index.html
├── blog/index.html
├── testimonial/index.html
├── testimonials/index.html
├── testimonials/stephanie-abi-saab/index.html
├── contact/index.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/
```

## Why this is plain HTML, not the old WordPress theme

The previous theme (V4) was built as a WordPress PHP theme. WordPress
themes need a PHP server to run. GitHub Pages does not run PHP, so that
theme would not work if pushed there as is. This rebuild keeps the same
look, the same navy and teal design, and the same content, but as plain
files any static host can serve, including GitHub Pages, with zero setup.

## What changed from the WordPress version

- Six of the seven project case studies now link to their public GitHub
  repo. Two of those (Diversity in the African Insurance Industry, and
  Financial Market Analysis at BMCE Capital) link to a related public
  project rather than the confidential internship work itself, since the
  real internship deliverables were never public.
- A seventh project, Meta Ads Benchmarking for Perfume Brands, was added
  to match a public repo that had no project card on the old site.
- The Yonsei University academic entry now includes a line on what the
  exchange semester taught, per Hedi's request.
- Every image was renamed to remove spaces and fix a typo in the
  original filename, since spaces in filenames cause avoidable friction
  in git and in URLs.

## AI use disclosure

AI helped rebuild this site's structure and code from the original
WordPress theme and the live site's content. All text, project
descriptions, and personal details come from Hedi Souki's own site and
were not invented. Review the content before treating this as a final,
public-facing page.

## License

Personal site, all rights reserved.
