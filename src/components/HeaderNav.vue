<template>
  <header class="header">
    <div class="container nav">
      <!-- Desktop -->
      <nav class="links desktopLinks">
        <button class="navBtn" @click="goToSection('home')">Accueil</button>
        <button class="navBtn" @click="goToSection('about')">À propos</button>
        <button class="navBtn" @click="goToSection('education')">Parcours</button>
        <button class="navBtn" @click="goToSection('skills')">Compétences</button>
        <button class="navBtn" @click="goToSection('experience')">Expériences</button>
        <button class="navBtn" @click="goToBlog">Blog</button>
        <button class="navBtn" @click="goToSection('contact')">Contact</button>
      </nav>

      <!-- Mobile visible button -->
      <div class="mobileTrigger">
        <button class="menuVisibleBtn" @click="isOpen = !isOpen">
          MENU
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="isOpen" class="mobileMenu">
      <button class="mobileBtn" @click="goToSection('home')">Accueil</button>
      <button class="mobileBtn" @click="goToSection('about')">À propos</button>
      <button class="mobileBtn" @click="goToSection('education')">Parcours</button>
      <button class="mobileBtn" @click="goToSection('skills')">Compétences</button>
      <button class="mobileBtn" @click="goToSection('experience')">Expériences</button>
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

  if (route.path !== "/") {
    await router.push("/");
    await nextTick();
  }

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
}

.mobileTrigger {
  display: none;
}

.menuVisibleBtn {
  display: none;
  padding: 10px 16px;
  border-radius: 14px;
  border: 2px solid rgba(34, 211, 238, 0.45);
  background: #0b0f1a;
  color: #e5e7eb;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow:
    0 0 12px rgba(34, 211, 238, 0.22),
    0 0 24px rgba(59, 130, 246, 0.15);
}

.mobileMenu {
  display: none;
  padding: 12px 18px 18px;
  border-top: 1px solid rgba(34, 211, 238, 0.18);
  background: #0b0f1a;
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

@media (max-width: 820px) {
  .desktopLinks {
    display: none;
  }

  .mobileTrigger {
    display: block;
  }

  .menuVisibleBtn {
    display: inline-block;
  }

  .mobileMenu {
    display: block;
  }
}
</style>