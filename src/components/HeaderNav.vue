<template>
  <header class="header">
    <div class="container nav">

      <!-- Desktop nav -->
      <nav class="links desktopLinks">
        <button class="navBtn" @click="goToSection('home')">Accueil</button>
        <button class="navBtn" @click="goToSection('about')">À propos</button>
        <button class="navBtn" @click="goToSection('education')">Parcours</button>
        <button class="navBtn" @click="goToSection('skills')">Compétences</button>
        <button class="navBtn" @click="goToSection('experience')">Expériences</button>
        <button class="navBtn" @click="goToBlog">Blog</button>
        <button class="navBtn" @click="goToSection('contact')">Contact</button>
      </nav>

      <div class="rightActions">
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
      <button class="mobileBtn" @click="goToSection('home')">Accueil</button>
      <button class="mobileBtn" @click="goToSection('about')">À propos</button>
      <button class="mobileBtn" @click="goToSection('education')">Parcours</button>
      <button class="mobileBtn" @click="goToSection('skills')">Compétences</button>
      <button class="mobileBtn" @click="goToSection('experience')">Expérience</button>
      <button class="mobileBtn" @click="goToBlog">Blog</button>
      <button class="mobileBtn" @click="goToSection('contact')">Contact</button>
    </div>
  </header>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

const isOpen = ref(false);
const router = useRouter();
const route = useRoute();

function close() {
  isOpen.value = false;
}

async function goToSection(sectionId) {
  close();

  // Si on n'est pas sur la home, on y va d'abord
  if (route.path !== "/") {
    await router.push("/");
    await nextTick();
  }

  // petit délai pour laisser la page se rendre
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 120);
}

async function goToBlog() {
  close();
  await router.push("/blog");
}
</script>

<style scoped>
.rightActions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.navBtn,
.mobileBtn {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.navBtn {
  padding: 8px 10px;
  border-radius: 12px;
}

.navBtn:hover {
  color: var(--accent);
  background: rgba(34, 211, 238, 0.08);
  box-shadow:
    0 0 10px rgba(34, 211, 238, 0.3),
    0 0 20px rgba(59, 130, 246, 0.15);
  border-radius: 10px;
}

/* burger */
.burger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: #0b0f1a;
  cursor: pointer;
  padding: 10px;
  color: #e5e7eb;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10001;
}

.burger span {
  display: block;
  width: 22px;
  height: 2px;
  margin: 4px auto;
  background: #e5e7eb;
  opacity: 1;
  border-radius: 999px;
}

/* mobile dropdown */
.mobileMenu {
  display: none;
  padding: 12px 18px 18px;
  border-top: 1px solid rgba(34, 211, 238, 0.18);
  background: #0b0f1a;
  backdrop-filter: none;
  position: relative;
  z-index: 10000;
}

.mobileBtn {
  display: block;
  width: 100%;
  padding: 12px 10px;
  border-radius: 14px;
  color: #e5e7eb;
}

.mobileBtn:hover {
  background: rgba(34, 211, 238, 0.10);
  color: var(--accent);
}

/* responsive */
@media (max-width: 820px) {
  .desktopLinks {
    display: none;
  }

  .burger {
    display: flex !important;
  }

  .mobileMenu {
    display: block;
  }
}
</style>