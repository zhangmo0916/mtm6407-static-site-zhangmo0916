import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mo's Portfolio",

  description: "A personal photography portfolio capturing landscapes, city life, nature, and everyday moments through my lens.",

  // GitHub Pages deployment path
  base: '/mtm6407-static-site-zhangmo0916/',

  // Website appearance
  appearance: true,

  themeConfig: {
    // Main navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Landscape', link: '/landscape' },
      { text: 'Street', link: '/street' },
      { text: 'Nature', link: '/nature' },
      { text: 'Travel', link: '/travel' },
      { text: 'About', link: '/about' }
    ],

    // Hide default sidebar
    sidebar: []
  }
})

