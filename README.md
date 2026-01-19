# Rodo Lens - Digital Mobile Content Creator Portfolio

A modern, professional portfolio website for Rodo Lens, a digital mobile content creation business. Built with Next.js 16, featuring smooth animations, parallax scrolling, and a mobile-first responsive design.

![Rodo Lens Hero](https://github.com/user-attachments/assets/81ff3bbf-b9e1-470f-ac94-c264aab96b44)

## ✨ Features

### 🎨 Design & UX
- **Professional Color Scheme**: Custom amber-to-orange gradient palette
- **Smooth Scrolling**: Lenis integration for buttery-smooth scrolling experience
- **Parallax Effects**: Multiple parallax sections including zoom parallax
- **Framer Motion Animations**: Sophisticated animations with viewport triggers
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern UI Components**: Inspired by 21st.dev design patterns

### 🚀 Technologies

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/studio-freight/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Shadcn/ui architecture

### 📄 Sections

1. **Hero Section** - Full-screen hero with parallax effects and animated CTAs
2. **Services Section** - Showcase of 4 core services with hover effects
3. **Zoom Parallax Section** - Scroll-triggered zoom effect
4. **Portfolio Section** - Featured work with scale animations
5. **About Section** - Company information with animated stats
6. **Testimonials Section** - Client reviews with star ratings
7. **CTA Section** - Call-to-action with gradient animations
8. **Contact Section** - Contact form and information
9. **Navigation** - Sticky navbar with mobile menu
10. **Footer** - Comprehensive footer with links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashefor/divine-rodo.git
cd divine-rodo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Screenshots

### Desktop View
![Services Section](https://github.com/user-attachments/assets/441c9abe-7f3f-4564-a216-ce178d36522a)

### Mobile View
![Mobile Hero](https://github.com/user-attachments/assets/832f01cf-deec-4bf2-af6d-cc13d93b12c4)

## 🎯 Key Features Implemented

- ✅ Parallax scrolling and zoom parallax effects
- ✅ Smooth scroll with Lenis
- ✅ Framer Motion animations throughout
- ✅ Mobile-responsive design
- ✅ Professional color scheme (no default AI colors)
- ✅ 21st.dev inspired UI components
- ✅ Magnetic button interactions
- ✅ Gradient animations and effects
- ✅ Accessibility features (aria-labels, proper semantics)
- ✅ TypeScript for type safety
- ✅ SEO optimized

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Lenis provider
│   ├── page.tsx             # Main page combining all sections
│   └── globals.css          # Global styles
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── services.tsx     # Services grid
│   │   ├── zoom-parallax.tsx # Zoom parallax effect
│   │   ├── portfolio.tsx    # Portfolio showcase
│   │   ├── about.tsx        # About section
│   │   ├── testimonials.tsx # Client testimonials
│   │   ├── cta.tsx          # Call-to-action
│   │   └── contact.tsx      # Contact form
│   ├── ui/
│   │   └── magnetic-button.tsx # Magnetic hover effect
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer
│   └── smooth-scroll-provider.tsx # Lenis wrapper
└── lib/
    └── utils.ts             # Utility functions
```

## 🔧 Customization

### Colors
The color scheme uses a custom amber-to-orange gradient. To modify, update the gradient classes in components:
```tsx
from-amber-400 to-orange-500
```

### Animations
Animation configurations can be adjusted in individual components. Framer Motion properties include:
- `initial`, `animate`, `whileInView`
- `transition` durations and easing
- Scroll progress transformations

### Content
Update content in section components:
- Services: `src/components/sections/services.tsx`
- Portfolio items: `src/components/sections/portfolio.tsx`
- Testimonials: `src/components/sections/testimonials.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ashefor**
- GitHub: [@ashefor](https://github.com/ashefor)

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ using Next.js and Framer Motion
