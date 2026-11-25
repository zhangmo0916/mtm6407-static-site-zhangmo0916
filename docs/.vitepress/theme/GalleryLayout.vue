<script setup>
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <div class="gallery-page">
    <header class="gallery-header">
      <h1>{{ frontmatter.title }}</h1>
      <p>{{ frontmatter.intro }}</p>
    </header>

    <main class="gallery-container">
      <div class="gallery-grid">
        <figure
          v-for="(photo, index) in frontmatter.photos || []"
          :key="index"
          class="gallery-item"
        >
          <img
            :src="withBase(photo.src)"
            :alt="photo.alt"
            loading="lazy"
          />
          <figcaption v-if="photo.caption">
            {{ photo.caption }}
          </figcaption>
        </figure>
      </div>
    </main>
  </div>
</template>

