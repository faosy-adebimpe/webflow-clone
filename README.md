## Folder Structure

```
webflow-clone/
├── public/           # Static assets
├── src/              # Source code
│   ├── assets/       # Images, icons, etc.
│   ├── components/   # Reusable UI components
│   ├── pages/        # Route-based components
│   ├── App.tsx       # Root component
│   └── main.tsx      # Entry point
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/faosy-adebimpe/webflow-clone.git
cd webflow-clone
```

### 2. Install Dependencies

Make sure you have **Node.js** installed (recommended: `>= 18.x`).

```bash
npm install
```

_or if you use Yarn:_

```bash
yarn install
```

## Development

To start the development server:

```bash
npm run dev
```

_or_

```bash
yarn dev
```

The app will be running at:

```
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

## Linting & Formatting (optional)

If you’ve added ESLint or Prettier:

```bash
npm run lint
npm run format
```

## Deployment

You can deploy the `dist/` folder to any static hosting provider such as:

-   [Vercel](https://vercel.com/)
-   [Netlify](https://www.netlify.com/)
-   [GitHub Pages](https://pages.github.com/)
-   [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Tech Stack

-   React
-   Vite
-   TypeScript
-   TailwindCSS

## Customization

You can configure:

-   `vite.config.ts` for build behavior
-   `tailwind.config.js` for custom Tailwind styles
-   `.env` files for environment variables
