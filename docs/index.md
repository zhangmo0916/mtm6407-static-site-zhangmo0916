---
layout: home
title: Home
titleTemplate: Mo's Photography Portfolio

hero:
  name: "Moments Through My Lens"
  text: "Photography by Mo"
  tagline: "Capturing landscapes, city life, nature, and unforgettable moments."
  image:
    src: '/images/hero-img.jpg'
    alt: 'Landscape photography by Mo'
  actions:
    - theme: brand
      text: Explore My Work
      link: /landscape
    - theme: alt
      text: About Me
      link: /about
---
<script setup> import { withBase } from 'vitepress'</script>

## Welcome to My Photography Portfolio

Photography is my way of exploring the world, discovering beauty in everyday moments, and sharing stories through images.

From peaceful natural landscapes to vibrant city streets, I enjoy capturing different perspectives through my lens.


## Explore My Photography

Discover my photography collections through the images below.


<div class="photo-grid">

  <a :href="withBase('/landscape')" class="photo-card">
    <img
      :src="withBase('/images/landscape-cover.jpg')"
      alt="Landscape photography by Mo"
      loading="lazy"
    >
    <div class="photo-card-content">
      <h3>Landscape</h3>
      <p>Explore the outdoors</p>
    </div>
  </a>

  <a :href="withBase('/street')" class="photo-card">
    <img
      :src="withBase('/images/street-cover.jpg')"
      alt="Street photography by Mo"
      loading="lazy"
    >
    <div class="photo-card-content">
      <h3>Street</h3>
      <p>Stories from the city</p>
    </div>
  </a>

  <a :href="withBase('/nature')" class="photo-card">
    <img
      :src="withBase('/images/nature-cover.jpg')"
      alt="Nature photography by Mo"
      loading="lazy"
    >
    <div class="photo-card-content">
      <h3>Nature</h3>
      <p>Beauty in the details</p>
    </div>
  </a>

  <a :href="withBase('/travel')" class="photo-card">
    <img
      :src="withBase('/images/travel-cover.jpg')"
      alt="Travel photography by Mo"
      loading="lazy"
    >
    <div class="photo-card-content">
      <h3>Travel</h3>
      <p>Places and perspectives</p>
    </div>
  </a>

</div>


## Behind the Lens

Hi, I'm Mo! I'm passionate about photography, visual storytelling, and creative design.

Through this portfolio, I hope to share the places, details, and experiences that inspire me.

[Learn More About Me →](/about)
