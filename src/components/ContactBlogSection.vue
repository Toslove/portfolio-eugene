<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="h2">Contact</h2>

      <div class="bottomGrid">
        <div class="card">
          <h3 style="margin-top:0;">Me contacter</h3>

          <div style="display:grid; gap:10px; margin-top:10px;">
            <a href="mailto:tossaeugene65@gmail.com">✉ tossaeugene65@gmail.com</a>
            <a href="tel:0749215925">☎ 07 49 21 59 25</a>
            <a href="https://www.linkedin.com/in/eug%C3%A8ne-tossa/" target="_blank" rel="noreferrer">In LinkedIn</a>
          </div>
        </div>

        <div class="card">
          <h3 style="margin-top:0;">Blog</h3>
          <p class="p">Partage de réflexions</p>

          <div style="margin-top:14px;">
           <RouterLink to="/blog" class="btn">Consulter le blog</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>