# Motion POC - Animation Library Showcase

This project demonstrates the capabilities and best practices of the Motion animation library for React. It serves as a proof of concept and educational resource for implementing animations in modern web applications.

## 🚀 Features

This POC showcases various animation concepts organized into distinct categories:

### Basic Animations
- Simple transitions with opacity, scale, and position
- Continuous looping animations
- Toggle animations based on state changes
- Spring-based physics animations
- Staggered animations across multiple elements

### Variants
- Named animation states for better organization
- Staggered children animations using parent-child propagation
- Interactive toggle menus with height animations
- Hover and tap interaction variants

### Gestures
- Hover gesture animations
- Tap gesture feedback
- Drag functionality with constraints
- Pan gesture handling
- Elastic drag constraints with "rubber-band" effects
- Combined gesture interactions

### Layout Animations
- Shared layout animations between different UI states
- Dynamic list manipulation with smooth transitions
- Card-to-modal shared element transitions
- Expandable/collapsible content with height animations

### Scroll Animations
- Scroll progress indicators
- Parallax effects
- Reveal animations triggered by viewport
- Scale animations on scroll
- Staggered grid animations on scroll
- Slide-in effects

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/VatsalDave2102/motion-poc
cd motion-poc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔍 Project Structure

```
src/
├── components/        # Reusable animation components
│   ├── BasicAnimations/
│   ├── Gestures/
│   ├── Home/
│   ├── LayoutAnimations/
│   ├── ScrollAnimations/
│   └── Variants/
├── pages/             # Main page components for each category
├── routes/            # Application routes configuration
└── App.tsx            # Main application component
```

## 📚 Key Concepts Demonstrated

### Motion Components
Convert any HTML or SVG element into an animatable element:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

### Variants
Define reusable animation states:

```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>
```

### Gestures
Add interactive animations:

```tsx
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
/>
```

### Layout Animations
Create smooth layout transitions:

```tsx
<motion.div layout>
  {items.map(item => (
    <motion.div key={item.id} layout>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Scroll-Triggered Animations
Create animations based on scroll position:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>
```

## 📝 Project Pages

- **Home**: Interactive showcase with chaotic animations
- **Basic Animations**: Fundamental animation concepts
- **Variants**: Reusable animation states
- **Gestures**: Interactive gesture animations
- **Layout Animations**: Smooth layout transitions
- **Scroll Animations**: Scroll-triggered effects

## 🌐 Browser Support

This project is built with modern JavaScript features and should work in all browsers that support ES6+.

## 🔗 Resources

- [Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev/)
- [Framer Motion GitHub Repository](https://github.com/framer/motion)
