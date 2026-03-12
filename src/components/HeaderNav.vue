<template>
  <header class="header">
    <div class="container nav">
      

      <!-- Desktop nav -->
      <nav class="links desktopLinks">
        <RouterLink to="/#home">Accueil</RouterLink>
        <RouterLink to="/#about">À propos</RouterLink>
        <RouterLink to="/#education">Parcours</RouterLink>
        <RouterLink to="/#skills">Compétences</RouterLink>
        <RouterLink to="/#experience">Expériences</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/#contact">Contact</RouterLink>
      </nav>

      <div class="rightActions">
        <!-- Toggle thème -->
        <button class="themeBtn" @click="toggleTheme" aria-label="Changer le thème">
          <span v-if="theme === 'dark'">☀️</span>
          <span v-else>🌙</span>
        </button>

        <!-- Burger (mobile) -->
        <button class="burger" @click="isOpen = !isOpen" aria-label="Ouvrir le menu">
          <span class="b1"></span>
          <span class="b2"></span>
          <span class="b3"></span>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="isOpen" class="mobileMenu">
      <RouterLink to="/#home" @click="close">Accueil</RouterLink>
      <RouterLink to="/#about" @click="close">À propos</RouterLink>
      <RouterLink to="/#education" @click="close">Parcours</RouterLink>
      <RouterLink to="/#skills" @click="close">Compétences</RouterLink>
      <RouterLink to="/#experience" @click="close">Expérience</RouterLink>
      <RouterLink to="/blog" @click="close">Blog</RouterLink>
      <RouterLink to="/#contact" @click="close">Contact</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";

const theme = ref("dark");
const isOpen = ref(false);

function close() {
  isOpen.value = false;
}

function applyTheme(nextTheme) {
  theme.value = nextTheme;
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
}

function toggleTheme() {
  applyTheme(theme.value === "dark" ? "light" : "dark");
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  applyTheme(saved === "light" ? "light" : "dark");
});
</script>

<style scoped>
.rightActions {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* thème */
.themeBtn {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.18s ease, background 0.18s ease;
}
.themeBtn:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.06);
}

/* burger */
.burger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  cursor: pointer;
  padding: 10px;
}
.burger span {
  display: block;
  height: 2px;
  margin: 6px 0;
  background: currentColor;
  opacity: 0.9;
}

/* mobile dropdown */
.mobileMenu {
  display: none;
  padding: 12px 18px 18px;
  border-top: 1px solid rgba(34, 211, 238, 0.18);
  background: color-mix(in oklab, var(--bg) 88%, transparent);
  backdrop-filter: blur(12px);
}
.mobileMenu a {
  display: block;
  padding: 12px 10px;
  border-radius: 14px;
  color: var(--text);
}
.mobileMenu a:hover {
  background: rgba(34, 211, 238, 0.10);
  color: var(--accent);
}

/* responsive */
@media (max-width: 820px) {
  .desktopLinks {
    display: none;
  }
  .burger {
    display: inline-block;
  }
  .mobileMenu {
    display: block;
  }
}
</style>