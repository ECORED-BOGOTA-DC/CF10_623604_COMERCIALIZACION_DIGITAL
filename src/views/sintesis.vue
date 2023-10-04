<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra mapa conceptual donde se desarrolla la síntesis<br>Las campañas digitales de mercadeo son estrategias de promoción y publicidad que se llevan a cabo con el objetivo de alcanzar y comprometer a una audiencia específica. Al iniciar una campaña digital, es esencial establecer objetivos claros y medibles, segmentar la audiencia ya que permite identificar y comprender a tu público objetivo, determinar los canales en línea más apropiados para llegar al público como las redes sociales, correo electrónico, publicidad en línea, SEO (optimización de motores de búsqueda), marketing de contenidos, entre otros. Todo esto te permite aumentar las ventas, generar leads, mejorar el reconocimiento de marca, etc.<br>Por lo que las campañas digitales de marketing son esenciales en la era digital actual y requieren una planificación cuidadosa, ejecución estratégica y análisis constante para lograr el éxito. Adaptarse a las tendencias cambiantes y a las preferencias de la audiencia es clave para mantenerse relevante en el mercado en línea.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
