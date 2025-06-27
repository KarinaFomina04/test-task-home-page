# Home Page Layout 
This project implements the layout of a homepage based on a Figma design, following the provided technical requirements.

## 🚀 Run
```bash
npm install
npm run watch
npm start
```


## 🚀 Overview

The layout consists of **three main sections** built as reusable Nunjucks components:
- `hero.njk`
- `features.njk`
- `works.njk`

The project is structured to support:
- Reusability and modularity
- Semantic HTML and accessibility
- Responsive layout with Flexbox and CSS Grid
- Smooth animations
- Easy reordering of components

## 📁 Folder Structure

```
src/
├── components/         # Nunjucks partials (hero, features, works)
├── pages/              # Main page template (index.njk)
├── styles/             # SCSS files (global + per component)
│   └── components/
├── scripts/            # JS for interactivity / animations
```

## 🧱 Technologies

- Nunjucks templating engine
- HTML5 semantic markup
- SCSS (BEM methodology)
- Flexbox & CSS Grid
- JavaScript
- Git

## ✨ Animations

Animations are implemented according to Figma comments using CSS transitions and small JavaScript interactions.

## 🔄 Reordering Components

You can change the order of blocks on the homepage by simply reordering the `include` lines in `src/pages/index.njk`:

```nunjucks
{% include "components/hero.njk" %}
{% include "components/features.njk" %}
{% include "components/works.njk" %}
```

## 🤖 Use of AI Tools

To speed up development, the following AI tools were used:
- **ChatGPT** — to clarify task requirements, generate BEM-named class structures, and assist with animation logic
- **Copilot** — to autocomplete repetitive code blocks


## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Safari

## 📦 Deliverables

- HTML, SCSS, JS code for the homepage
- Modular and reorderable components
- Animations and responsive design
