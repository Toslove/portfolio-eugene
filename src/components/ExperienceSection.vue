<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="h2">Projets & Expériences</h2>
      <p class="p" style="margin-bottom: 14px;">
        Glisser horizontalement pour voir toutes les expériences.
      </p>

      <div class="carousel">
        <div class="card expCard">
          <h3 style="margin-top:0;">Projet API Data — BRÉF</h3>
          <p class="p"> Avignon Université (Janvier 2026)</p>
          <ul class="p" style="padding-left:18px;">
            <li>Concevoir et documenter une API REST d’accès à des données structurées</li>
            <li>Définir des schémas de données, contrats d’interface et endpoints API</li>
            <li>Tester et valider des requêtes (Postman / Python / SQL)</li>
            <li>Mettre en œuvre des principes de Privacy by Design, sécurité et qualité data</li>
            <li>Garantir la traçabilité, fiabilité et exploitabilité des données</li>
          </ul>
        </div>

        <div class="card expCard">
          <h3 style="margin-top:0;">Audit RGPD & Sécurité des systèmes d’information</h3>
          <p class="p"> Avignon Université (Février 2026)</p>
          <ul class="p" style="padding-left:18px;">
            <li>Réalisation d’un audit RGPD : cartographie des traitements, analyse des flux de données
            personnelles et identification des risques de non-conformité</li>
            <li>Conduite d’une analyse de sécurité SI : identification des vulnérabilités et évaluation des
            risques.</li>
            <li>Définition de recommandations techniques et organisationnelles (DPIA, contrôles d’accès,
            sécurisation des flux, bonnes pratiques)</li>
            <li>Traduction des enjeux réglementaires, techniques et métiers en actions concrètes de
            mise en conformité et de sécurisation.</li>
          </ul>
        </div>

        <div class="card expCard">
          <h3 style="margin-top:0;">Stage — Gouvernance des données</h3>
          <p class="p">Malte (Juin 2025 - Aout 2025)</p>
          <ul class="p" style="padding-left:18px;">
            <li>Analyser les processus de collecte et de traitement des données personnelles</li>
            <li>Identifier les risques de cybersécurité et proposer des actions correctives</li>
            <li>Participer à des ateliers spécialisés en protection des données et sécurité numérique</li>
            <li>Appliquer des principes d’audit, conformité et gouvernance data</li>
          </ul>
        </div>

        <div class="card expCard">
          <h3 style="margin-top:0;">Projet — Conformité internationale</h3>
          <p class="p">Université Paris 8</p>
          <ul class="p" style="padding-left:18px;">
            <li>Étudier les cadres internationaux de gouvernance des données</li>
            <li>Comparer les approches UE/Chine/USA en matière de conformité et d’usage des données</li>
            <li>Manipuler des données publiques à des fins d’analyse</li>
            <li>Formaliser des recommandations sur les bonnes pratiques de gouvernance</li>
            <li>Présenter les résultats dans une logique d’aide à la décision</li>
          </ul>
        </div>

        <div class="card expCard">
          <h3 style="margin-top:0;">Stage — Journal "La Croix"</h3>
          <p class="p">Bénin (Aout 2021- Septembre 2021)</p>
          <ul class="p" style="padding-left:18px;">
            <li>Contrôler la qualité, la fiabilité et la conformité des contenus publiés</li>
            <li>Mettre en œuvre des processus d’audit éditorial et validation de l’information</li>
            <li>Gérer des données sensibles en respectant confidentialité, éthique et intégrité</li>
            <li>Contribuer à la traçabilité et sécurisation des informations</li>
            <li>Confidentialité des données</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}


.exp {
  min-width: 250px;
}
</style>