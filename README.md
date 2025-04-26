# Ecomotech Solar Solutions

A modern web application showcasing renewable energy and electric mobility solutions, built with React, TypeScript, and Tailwind CSS.

## Overview

Ecomotech Solar Solutions is a comprehensive platform that presents sustainable energy products and solutions including:
- Solar Energy Solutions (panels, inverters, home systems)
- Electric Mobility Products (motorcycles, tricycles, charging stations)
- Smart Energy Management Systems
- Renewable Energy Infrastructure

## Features

- **Responsive Design**: Fully responsive interface that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations and transitions
- **Product Showcase**: Detailed product pages with comprehensive information
- **News Section**: Latest updates about company developments and industry news
- **Interactive Components**: Dynamic navigation and user-friendly interface

## Technology Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Query
- **UI Components**: Radix UI with custom styling
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eco-tech-solar-site.git
```

2. Navigate to the project directory:
```bash
cd eco-tech-solar-site
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
eco-tech-solar-site/
├── src/
│   ├── components/
│   │   ├── home/           # Home page components
│   │   ├── layout/         # Layout components
│   │   ├── products/       # Product-related components
│   │   └── ui/            # Reusable UI components
│   ├── pages/
│   │   ├── articles/      # News article pages
│   │   └── ...           # Other page components
│   ├── styles/           # Global styles
│   └── App.tsx          # Main application component
├── public/             # Static assets
└── package.json       # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

The site can be deployed to any static hosting platform (Vercel, Netlify, etc.). Build the project using:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
