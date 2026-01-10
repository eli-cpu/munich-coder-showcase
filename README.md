# Elias Anwari - Portfolio

A modern, responsive portfolio website showcasing my journey as a Computer Science student at the Technical University of Munich.

## About

This is my personal portfolio built with React, TypeScript, and Tailwind CSS. It features a clean design with dark mode support and showcases my projects, skills, and experience.

## Development

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Setup

1. Clone the repository:

```sh
git clone <YOUR_GIT_URL>
cd elias-anwari-portfolio
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies

This portfolio is built with modern web technologies:

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## Deployment

### GitHub Pages

For deploying to GitHub Pages:

1. **Build the project:**
```sh
npm run build
```

2. **Deploy to GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose the `main` branch and `/dist` folder
   - Or use GitHub Actions for automatic deployment

3. **Access your website:**
Your portfolio will be available at: `https://eli-cpu.github.io/munich-coder-showcase/`

### University Homepage Hosting (TUM)

For deploying to the university's homepage server (`home.in.tum.de`):

1. **Build for university hosting:**

```sh
npm run build:university
```

This command builds the project to the `html-data` folder and sets the correct permissions required by the university server.

2. **Upload to university server:**

```sh
# Connect to the university server
ssh <your_login>@lxhalle.in.tum.de

# Navigate to the correct directory structure
# The html-data folder should be at: /u/halle/$USER/home_page/html-data/

# Copy your built files (from your local html-data folder)
scp -r html-data/* <your_login>@lxhalle.in.tum.de:/u/halle/$USER/home_page/html-data/
```

3. **Access your website:**
   Your portfolio will be available at: `http://home.in.tum.de/~<your_login>/`

### Other Static Hosting Services

The portfolio can also be deployed to any static hosting service:

- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build && netlify deploy --prod --dir=dist`
- **GitHub Pages**: Configure GitHub Actions for automatic deployment

## Contact

Feel free to reach out if you'd like to connect!

- **Email**: e.anwari885@gmail.com
- **LinkedIn**: [linkedin.com/in/elias-anwari](https://www.linkedin.com/in/elias-anwari/)
- **GitHub**: [github.com/eli-cpu](https://github.com/eli-cpu)
