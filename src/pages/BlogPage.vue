<template>
  <section class="section">
    <div class="container">

      <h2 class="h2">Blog</h2>

      <div v-for="article in articles" :key="article.id" class="blogWrapper">

        <div class="card blogCard">

          <h3 class="blogTitle">
            {{ article.title }}
          </h3>

          <!-- image -->
          <img v-if="article.image" :src="article.image" class="blogImage" />

          <!-- aperçu -->
          <p class="p">
            {{ article.preview }}
          </p>

          <!-- texte complet -->
          <p v-if="article.expanded" class="p blogFullText">
            {{ article.content }}
          </p>

          <button class="readMoreBtn" @click="article.expanded = !article.expanded">
            {{ article.expanded ? "Lire moins" : "Lire plus..." }}
          </button>

        </div>

        <!-- séparateur -->
        <div class="blogSeparator"></div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const articles = reactive([
  {
    id: 1,
    title: "Ici mon blog",
    image: "/blog1.jpg",
    preview:
      "Il n'y a encore rien... C'est pour bientôt..",
    content:
      "...###...",
    expanded: false
  }
]);
</script>