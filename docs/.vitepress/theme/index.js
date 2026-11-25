import DefaultTheme from 'vitepress/theme'
import GalleryLayout from './GalleryLayout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('GalleryLayout', GalleryLayout)
  }
}
