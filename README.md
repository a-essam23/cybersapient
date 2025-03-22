# Front-End Developer Assessment

## Overview

This repository contains my implementation of the front-end developer assessment task.
**[🔗 Live Preview](https://cybersapient.vercel.app/)** | **[💻 GitHub Repository](https://github.com/a-essam23/cybersapient)**

## Features Implemented

- **Responsive Design**:
  - Fully responsive layout for all screen sizes
    - Responsive videos and video posters
    - Font scaling across different devices
- **Interactive Components**:
  - Navigation with dropdown tabs
  - Accordion components for FAQs and mobile navigation
  - Canvas-based scroll animations
  - Touch card sections with carousel functionality
- **Performance Optimizations**:
  - Optimized asset loading
- **SEO & Sharing**:
  - Added OpenGraph metadata
- **Bug Fixes**:
  - Fixed padding issue in the "Everything You Need" headline section that was causing page width overflow
  - Replaced margins with proper padding and gaps

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**:
  - Tailwind CSS
  - CSS Modules
- **State Management**: Zustand store implementation
- **Package Manager**: pnpm

```
├─ public/          # Static assets and SVGs
├─ src/             # Source code
│  ├─ app/          # Next.js app router components
│  ├─ components/   # Reusable UI components
│  ├─ containers/   # Page section containers
│  ├─ hooks/        # Custom React hooks
│  ├─ providers/    # React context providers
│  ├─ stores/       # State management
│  ├─ styles/       # Custom fonts and styling
│  └─ utils/        # Utility functions
```

---

## Implementation Notes

### Asset Handling

- Used the same assets and images as provided in the design specification
- Used different device-based URLs for the videos and images in the animations
- Locally imported and implemented the required fonts (Denton Condensed and Gilroy)

### Component Architecture

- Modular design with reusable components
- Clean separation between layout components, section containers, and UI elements

### Additional Improvements

- Ensured complete responsiveness across all devices
- Implemented semantic HTML for better accessibility

## Possible Improvements

Given more time, I would implement the following improvements:

1. **Performance Optimization**: Replace canvas scroll animations with optimized videos, as the current implementation loads almost 250MB of image data. This would significantly reduce load times and improve overall performance.
2. **Tailwind CSS Optimization**: Create reusable utility class combinations using Tailwind's @apply directive to reduce repetitive class strings across components. This would decrease boilerplate code, maintain consistency, and increase development efficiency while keeping the flexibility of Tailwind's utility-first approach.
3. **Standardized Video Structure**: Implement a fixed video naming convention to allow for easier dynamic replacement and consistent responsivity across different screen sizes.
4. 4. **Accessibility Enhancements**: Further improve accessibility by adding ARIA attributes, keyboard navigation, and screen reader support throughout the application.

---

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
