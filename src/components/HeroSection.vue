<template>
  <section id="home" class="heroWrap">
    <div class="container hero">
      <img src="/IMG.Profil.jpg" alt="Photo de profil" class="heroPhoto" />

      <div>
        <h1 class="heroTitle">Eugène TOSSA</h1>
        <div class="glowLine"></div>
        <p class="heroLead">Data Governance | Développement web Full Stack</p>
        <p class="heroLead">Profil hybride Data × Tech × Stratégie</p>

    <div class="heroBtnWrap">
        <a href="#contact" class="btn">Discutons...</a>
    </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  gap: 30px;
}

.heroPhoto{
  width: 260px;
  border-radius: 15px;
}

.btn {
  display: inline-block;
  margin-top: 15px;
  background: #3b82f6;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
}
</style>