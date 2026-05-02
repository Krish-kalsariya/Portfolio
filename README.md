# Krish Kalsariya - Portfolio

A premium, fully animated developer portfolio built with React, Vite, and Tailwind CSS.

## Features

- **Premium Dark UI** with glassmorphism effects
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** design for all devices
- **Interactive Components** with hover effects
- **Contact Form** with EmailJS integration
- **Typewriter Effect** in Hero section
- **Scroll Animations** with reveal effects
- **Modern Tech Stack** showcase

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- EmailJS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Krish-kalsariya/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

### EmailJS Setup

To enable the contact form, you need to configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the configuration in `src/components/Contact.jsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Journey.jsx
│   ├── GithubStats.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollToTop.jsx
│   ├── AnimatedSection.jsx
│   └── GlassCard.jsx
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── data/              # Portfolio data
├── styles/            # Global styles
└── App.jsx            # Main app component
```

## Sections

1. **Hero** - Animated introduction with typewriter effect
2. **About** - Personal summary and stats
3. **Skills** - Technical skills with progress bars
4. **Projects** - Featured projects with live demos
5. **Journey** - Education and experience timeline
6. **GitHub Stats** - Coding activity visualization
7. **Resume** - Downloadable resume section
8. **Contact** - Contact form with validation
9. **Footer** - Links and social media

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Krish Kalsariya**
- LinkedIn: [linkedin.com/in/krish-kalsariya](https://www.linkedin.com/in/krish-kalsariya)
- GitHub: [github.com/Krish-kalsariya](https://github.com/Krish-kalsariya)
- Email: kalsariyakrish22@gmail.com
