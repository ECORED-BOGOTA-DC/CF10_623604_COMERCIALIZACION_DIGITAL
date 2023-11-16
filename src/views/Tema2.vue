<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métricas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-azul3.p-4
          .row.justify-content-center.align-items-center
            .col-6.col-lg-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/img1.svg', alt='Imágen decorativa')
            
            .col-lg-10
              p(data-aos="fade-left") Se consideran sistemas de medición empleados para cuantificar y evaluar aspectos de un negocio, por ejemplo, tendencias, comportamientos y resultados. Con ellas, se puede medir y evaluar el desempeño de cualquier acción y mostrar si las estrategias de <i>marketing</i> están contribuyendo o no a los resultados de ventas de los productos o servicios de una empresa.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.1 Generalidades de las métricas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-left") Todo lo que se puede medir, se puede mejorar y gestionar, con esta frase, en el escenario empresarial y los inversores, comités de dirección o el departamento de finanzas hablan un solo lenguaje y es el de los beneficios, los márgenes y el precio de las acciones, por lo que a ellos realmente les interesa es ¿cómo un incremento en la satisfacción del cliente aumenta anualmente las utilidades de la empresa? De esta forma, la dirección de la organización puede medir la actividad de <i>marketing.</i>

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/111111111" title="Comunicación de marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/titulo4.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5

      p.mb-5(data-aos="fade-left") La correcta selección y desarrollo de métricas permitirá: 

      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Imágen decorativa')

      .col-lg-6
        .tarjeta-2.p-4.mb-3
          ul.lista-ul--color.fa-ul2
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Intentar gestionar activos intangibles, como la marca, la cual permitirá desarrollar relaciones duraderas entre cliente-empresa.     
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Segmentar de forma adecuada, de modo que se pueda ofrecer productos y servicios mejor adaptados a las necesidades del cliente.
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Introducir en el mercado productos y servicios innovadores para los clientes de segmentos objetivo. 
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Producir productos y servicios de alta calidad a coste ajustado. 
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Movilizar habilidades y motivaciones que tengan por objetivo la mejora continua de los procesos en los que trabajan y aplicar la tecnología de forma efectiva y responsable. 

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/titulo5.svg', alt='Imágen decorativa')

    .bg2-tema1.mb-5
      .row.justify-content-center.align-items-center
        .col-6.col-lg-1.mb-4
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imágen decorativa')

        .col-lg-11
          p(data-aos="fade-left") Hoy las empresas están compitiendo en entornos complejos y, por tanto, es vital que tengan una exacta comprensión de sus objetivos y el método más adecuado para alcanzarlos, es aquí donde el cuadro de mando toma relevancia, pues traduce la estrategia y misión de la compañía en medidas de acción desde cuatro perspectivas: los clientes, la formación y el crecimiento, las finanzas y los procesos internos, que proporciona la estructura necesaria para un sistema de gestión y medición estratégica. 

    .bg1-tema1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
            h5 Figura 2
            span <i>¿Qué es un cuadro de mando?</i>

          figure
            img(src='@/assets/curso/temas/tema2/img5.svg', alt='Figura que muestra un diagrama circular con 4 etapas del cuadro de mando con visión y estrategias, relacionados en la parte inferior de la imagen.')
            figcaption.mt-3
              p.mb-0 <b>Nota.</b> Tomado de Kaplan y Norton (2002).

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") Entonces, el cuadro de mando es un sistema de información, para la toma de decisiones de la dirección, que presenta indicadores que pueden servir como señales de alerta, en el que intervienen los objetivos corporativos, perspectiva, indicadores, metas, mapas y proyectos estratégicos, explicados a continuación: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imágen decorativa')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Indicadores de un cuadro de mando
                  p Con el fin de tener mayor conocimiento sobre el tema, se invita a ver el siguiente documento.

                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexos/indicadores_de_un_cuadro_de_mando.docx')" target="_blank")
                    span Ingresar 
                    i.fas.fa-link

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") Se puede ejemplificar en la siguiente imagen cómo se realiza la implementación del cuadro de mando integral en una empresa: 

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
        h5 Figura 3
        span <i>Cuadro de Mando Integral</i>

      figure
        img(src='@/assets/curso/temas/tema2/img6.svg', alt='Figura que muestra Cuadro de Mando Integral, descrito en la parte inferior.')

    .row.bg-titulo7.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3.text-right ¿Cómo es el Cuadro de Mando del <i>Marketing</i> (CMMK)?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-left") La adaptación del Balanced Scorecard o BSC al Marketing Scorecard o CMM se basa en un cambio de enfoque y una definición predefinida de nuevas áreas de actuación más acordes con las sensibilidades del <i>marketing</i>, pues el objetivo de un cuadro de mando de <i>marketing</i> (CMMK) es: ayudar a definir, comunicar y controlar la estrategia de <i>marketing</i> de la empresa. Al diseñar un cuadro de mando de <i>marketing</i> o CMM, primero debe definir diferentes perspectivas relacionadas con su departamento de <i>marketing</i>. En este caso, las principales áreas de CMM giran en torno a las 4P: <i>marketing</i> o <i>marketing mix</i> (producto, precio, promoción y distribución).

        p(data-aos="fade-left") A continuación, se podrán encontrar los elementos del Cuadro de Mando del <i>Marketing</i> (CMMK):

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      TabsA.color-acento-botones
        .tarjeta.tarjeta-taps.p-4(titulo="Productos/servicios")
          .row.justify-content-center
            .col-lg-7
              p Indicadores relacionados con portafolios de productos y servicios como: unidades vendidas, sin vender, en <i>stock</i>, fuera de <i>stock</i>.

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imágen decorativa')

        .tarjeta.tarjeta-taps.p-4(titulo="Cliente")
          .row.justify-content-center
            .col-lg-7
              p Números clave que giran en torno al cliente como por ejemplo: nivel de satisfacción, valor de marca, atención al cliente, proceso de compra.

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img9.svg', alt='Imágen decorativa')

        .tarjeta.tarjeta-taps.p-4(titulo="Económico")
          .row.justify-content-center
            .col-lg-7
              p Esta dimensión captura todos los indicadores económicos y financieros, como ventas, ganancias, márgenes, costos, ROI, ROA y más. 

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imágen decorativa')

        .tarjeta.tarjeta-taps.p-4(titulo="Marca")
          .row.justify-content-center
            .col-lg-7
              p Un índice que gira en torno a las marcas que son activos intangibles. Mide posicionamiento, imagen de marca, percepción del valor de la marca

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imágen decorativa')

        .tarjeta.tarjeta-taps.p-4(titulo="Comunicación")
          .row.justify-content-center
            .col-lg-7
              p Inversión publicitaria, eficiencia, ROI publicitario, anunciantes, eficiencia publicitaria.

            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") El propio plan de <i>marketing</i> aporta una metodología que ayuda a elegir métricas y permite el diseño de un cuadro de mando que tenga tanto corto como mediano y largo plazo, así como el definir el responsable, de esta forma, el corazón del <i>marketing</i> es la diferenciación, pues si todas las empresas utilizan las mismas métricas, fracasarán. En resumen, no existe una fórmula mágica, pero estos criterios pueden orientarlo en la dirección correcta.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-right") Ahora bien, los cuadros de mando pueden tener muchas formas y tamaños, sin embargo, para un cuadro de mando de <i>marketing</i> perfecto siempre contendrá los siguientes elementos:

        .tarjeta-2.p-4.mb-3
          ul.lista-ul--color.fa-ul2
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Indicadores clave de rendimiento (KPI) desglosado por objetivo principal.      
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Una meta u objetivo para cada KPI.     
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Indicadores adelantados.      
            li(data-aos="fade-up")
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Rendimiento, desglosado por semana (o mes/trimestre, u otros).

      .col-10.col-lg-6
          figure
            img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6
          figure
            img(src='@/assets/curso/temas/tema2/img15.svg', alt='Imágen decorativa')

      .col-lg-6
        p(data-aos="fade-left") Hay tres objetivos generales para tener en cuenta al implementar un tablero de <i>marketing</i> con miras a realizar un seguimiento. Se trata de: atraer visitantes al sitio web, convertir a esos visitantes en clientes potenciales y convertirlos en clientes. Ante este escenario, los tres KPI más apropiados para medir el progreso hacia estos objetivos podrían incluir visitas, clientes potenciales y clientes generados durante un período de tiempo específico, es importante, aunque opcional, que, al tablero de mando, se le agregue información como: el contexto e historia a los datos, para ello, incorporando los siguientes elementos:

        .tarjeta-2.p-4.mb-3
          ul.lista-ul--color.fa-ul2
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Porcentaje avanzado hacia la meta.     
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Porcentaje de cambio frente al período anterior.    
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Observaciones sobre qué funciona y cuáles no.

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") El contexto adicional puede ser valioso, pero hay que asegurarse de que el tablero sea fácil de mantener y comprender, de lo contrario, corre el riesgo de que la herramienta sea demasiado pesada para mantenerse al día con el paso del tiempo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imágen decorativa')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Ejemplo de Cuadro de Mando de <i>Marketing</i>
                  p Con el fin de tener mayor conocimiento sobre el Cuadro de Mando de <i>Marketing</i> se invita a ver el siguiente documento. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexos/ejemplo_de _cuadro_de_mando_de_marketing.pdf')" target="_blank")
                    span Ingresar 
                    i.fas.fa-link


    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.2 Análisis de la conversión

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-left") Antes de entrar en materia, debemos saber que es la conversión, pues esté significa más que lograr tener visitantes en un sitio web o a una red social, no obstante, es cambiar la forma en la una persona interactúa con la empresa, por ejemplo: convertirlo en un cliente, suscriptor, seguidor o comprador, también puede significar una acción que realice un usuario como diligenciar un formulario, programar una cita, una llamada, una descarga, etc. 

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-verde.p-5(data-aos="flip-down")
        .row.justify-content-center.align-items-center
          .col-lg-8
            h5 Ejemplo

            p Eres un guía turístico y has creado una campaña en Adwords para captar turistas interesado en contratar tus servicios de guía en un recorrido de tres días por La Guajira, para ello has creado una <i>landing</i> con un formulario de contacto en el que ofreces un descuento en el último día en el hospedaje.

            p Por tanto, cada vez que algún turista interesado diligencie el formulario de contacto, se registra una conversión, ya que se trata de un cliente potencial para ti. En el sitio web también se encuentra la opción que te contacten por WhatsApp. 

            p Así comenzamos a registrar nuestras conversiones, a ver una métrica de nuestros datos reales, pues sabemos cuántos clics nos ha costado un cliente. 

          .col-8.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img17.svg', alt='Imágen decorativa')

    .bg2-tema1.mb-5
      .row.justify-content-center.align-items-center
        .col-6.col-lg-1.mb-4
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img18.svg', alt='Imágen decorativa')

        .col-lg-11
          p(data-aos="fade-left") De modo que es fundamental que las conversiones estén en función de los objetivos de campaña, ya que se tiene la necesidad de medir detalladamente la campaña de manera que se pueda ver el retorno del gasto en clics, así como información sobre anuncios, palabras clave, rendimiento, entre otros datos, que ayudarán a tomar decisiones y que optimizarán de manera más rentable las acciones de <i>marketing</i>.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8
        figure
          img(src='@/assets/curso/temas/tema2/titulo7.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img19.svg', alt='Imágen decorativa')

      .col-lg-6
        p(data-aos="fade-left") Existen diferentes tipos de conversiones dependiendo de los objetivos y monetización que se tenga como una acción SEM, una estrategia de redes sociales, <i>email marketing</i>, generación de <i>leads</i>. La forma de conocer y analizar las conversiones es encontrar una tasa de conversión o tasa de conversión. Esto se puede aplicar a sitios web y plataformas, o, por ejemplo, a páginas y botones.

        p(data-aos="fade-left") El cálculo de la tasa de conversión se realiza mediante la siguiente fórmula: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-acento-botones.p-4.p-md-4.mb-5(data-aos="flip-down")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img20.svg', alt='Imágen decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Con esta fórmula, se obtiene el porcentaje de visitas que realizan la acción específica en una página web. Por ejemplo, si 2.411 visitas han realizado la compra de un producto a través de una página que ha recibido 300.000 visitas, la página tendrá una tasa de conversión de un 0,80.

                p Lo más viable es aumentar la tasa de conversión de un 0,5 a un 1 por 100 que duplica el tráfico del sitio web. 

    .row.justify-content-center.align-items-center.mb-5
      P(data-aos="fade-right") A continuación, se verá la importancia de los <i>landing page</i> para la conversión: 

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--amarilla.p-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 Importancia de las <i>landing page</i>
              p Rentabilizar al máximo las inversiones, las empresas desarrollan páginas de aterrizaje o <i>landing pages</i> creadas específicamente para conseguir <i>leads</i> o ventas. 

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img21.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Estas son el vehículo perfecto que vinculan al visitante, previamente segmentado a través de una acción o campaña, con los objetivos de monetización del sitio web. Además, son un elemento fundamental e imprescindible en el recorrido o proceso que el usuario sigue en un sitio web antes de completar la conversión.


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img22.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Para que la eficacia sea óptima, una <i>landing page</i> debe diseñarse con una estructura y unos elementos distintos a los espacios habituales de contenido, como artículos o posts. Dado que su propósito es concreto, una página de aterrizaje debe prescindir de cualquier pieza que pueda desviar la atención del usuario hacia la conversión. 


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Se debe facilitar que el visitante acceda de forma rápida y clara a la información que necesita, por tanto, debe tener los siguientes elementos obligatorios son: 

              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Logotipos.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Título.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Subtítulo.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Especificaciones del producto o servicio.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Imagen.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Video.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 <i>Call to action.</i>
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Formularios o botón para obtener la conversión.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  | Testimonios.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img24.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Estos elementos deben ser mínimos, e incluso conviene que solo exista uno, ya que es obligado ofrecer posibilidades al usuario para que pueda perder la atención y pueda realizar una acción distinta a la requerida. 


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img25.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Cuanto menos deba interactuar con la página, mejor. Por eso, en muchos casos se opta por diseños tipo <i>parallax,</i> con un <i>scroll</i> que permite navegar fácilmente por la información, pero con pocas posibilidades de salir de la página. 


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img26.svg', alt='Imágen decorativa')


    .row.bg-titulo1.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3.text-right Key Performance Indicators: KPI

    .row.justify-content-center.align-items-center.mb-5
      p Aunque se ha tocado el tema en componentes anteriores, en este componente se hablará sobre los indicadores más relevantes en el <i>marketing</i> digital:

    .row.justify-content-center.align-items-center.mb-5
      TabsC.color-primario
        .py-3.py-md-4(titulo="Indicadores de marca")
          .row
            .col-md-5.mb-4.mb-md-0
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 El conocimiento de la marca se puede medir a través de herramientas de redes sociales o investigación de la industria. Debido a la naturaleza de su retraso, su utilidad es limitada.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Los indicadores de mención en los medios deben adaptarse a los diferentes medios que su empresa rastrea.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Las métricas de autosuficiencia incluyen bases de datos de clientes,  suscriptores de listas de correo, seguidores de redes sociales y visitas regulares al sitio web.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img27.svg', alt='Imágen decorativa')

        .py-3.py-md-4(titulo="Indicadores de clientes potenciales")
          .row
            .col-md-5.mb-4.mb-md-0
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Total clientes potenciales y costo por cliente potencial (CPL) para comprender la cantidad y el costo de los primeros clientes potenciales.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Clientes potenciales aptos para <i>marketing</i> (MQL) o Proporción de clientes potenciales  a MQL.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Relación de lectura calificada de ventas (SQL) o MQL a SQL.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Ingresos por cliente potencial de <i>marketing</i> elegible (MQL).
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img28.svg', alt='Imágen decorativa')

        .py-3.py-md-4(titulo="Indicadores ventas y finanzas")
          .row
            .col-md-5.mb-4.mb-md-0
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Acuerdos cerrados  y  relación de SQL a acuerdos cerrados  si el <i>marketing</i> y las ventas se superponen en la organización.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Costo de Adquisición de Clientes (COCA),  obviamente COCA será mucho más alto que CPL.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Ingresos por acuerdo cerrado.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 El valor de por vida del cliente (CLV)  ayuda a calcular el ROI ajustado; se puede alinear con la lealtad.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 El crecimiento de las ventas , es mucho mejor cuando se atribuye a un determinado tipo de método de <i>marketing</i> y se rastrea mediante indicadores de ROI por canal de <i>marketing</i>.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img29.svg', alt='Imágen decorativa')

        .py-3.py-md-4(titulo="Indicadores de lealtad")
          .row
            .col-md-5.mb-4.mb-md-0
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Índices de encuestas de satisfacción del cliente  y su versión más ligera  Puntaje de promotor neto   (NPS) que se correlaciona con el crecimiento de los ingresos.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Referencias, reseñas  y cualquier cosa cuantificable que pueda considerarse como una recomendación positiva del producto.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Visitantes que regresan  (para un sitio web) y  tasa de apertura, tasa de  clics  para la lista de correo.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 La retención de clientes  es fácil de medir cuando su empresa utiliza el modelo de suscripción; de lo contrario, este indicador se retrasará mucho en el tiempo.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img30.svg', alt='Imágen decorativa')

        .py-3.py-md-4(titulo="Indicadores del sitio web")
          .row
            .col-md-5.mb-4.mb-md-0
              ul.lista-ul--color.fa-ul2
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Visitantes.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 <i>Leads.</i>
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Tasa de rebote ajustada.
                li 
                  i.fas.fa-dot-circle(style="color: #EB6F2D")
                  p.mb-0 Entre otras que ofrece Google Analytics.
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img31.svg', alt='Imágen decorativa')

    .row.bg-titulo1.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3.text-right Los <i>dashboard</i> y sus tipos

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6
          figure
            img(src='@/assets/curso/temas/tema2/img32.png', alt='Imágen decorativa')
      
      .col-lg-6
        p(data-aos="fade-right") Cuando se busca el secreto de una campaña de <i>marketing</i> exitosa, el secreto a menudo no está en una creatividad increíble o en grandes presupuestos, sino en unas buenas estrategias de medición y su ejecución. Sin embargo, una vez que se ingresa al mundo de los datos, corre el riesgo de perderse en la sobrecarga de información y no saber cómo practicar la métrica, por eso la solución es construir un <i>dashboard.</i>

        .cajon.color-azul1.p-4(data-aos="flip-down")
          p.mb-0 El tablero de instrumentos o panel de control es como una pantalla en la cabina de un avión (aunque debería ser un poco más simple), es una herramienta muy poderosa para extraer información de sus datos y centralizar los KPI que necesita para saber qué está sucediendo realmente en el negocio. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imágen decorativa')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 <i>Dashboard</i>
                  p Con el fin de tener mayor conocimiento sobre los <i>dashboard</i> y sus tipos se invita a ver el siguiente documento. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexos/dashboard.docx')" target="_blank")
                    span Ingresar 
                    i.fas.fa-link

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.3 Herramientas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-left") La posibilidad de realizar analítica web está hoy al alcance de todos. Existen múltiples herramientas de medición, muchas de ellas gratuitas, predominando Google Analytics, Woopra, Piwik, Google Webmaster Tools (analítica y herramientas de corrección), etc., para sitios web y las propias de cada red social si mantenemos presencia en estos medios. Aun así, también se dispone de diversas herramientas de pago que poseen mayor sofisticación. 

        .cajon.color-primario.p-4(data-aos="flip-down")
          p.mb-0 En cualquier caso, dos herramientas indispensables para monitorizar la actividad de nuestros usuarios en webs, blogs, gratuitas y que recomendamos es Google Analytics, pues es una plataforma que obtiene datos y los compila en informes, a nivel de redes sociales cada una posee su propia plataforma de análisis de datos, lo importante es aprender a manejarlas y entender cómo transformar esos datos en <i>insights</i> para mejorar nuestros procesos de <i>marketing</i>. 


      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img33.png', alt='Imágen decorativa')

    
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 2.4 Analítica <i>social media</i>

    .bg2-tema1.mb-5
      .row.justify-content-center.align-items-center
        .col-6.col-lg-1.mb-4
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img34.svg', alt='Imágen decorativa')

        .col-lg-11
          p(data-aos="fade-left") El análisis de redes sociales es una herramienta fundamental que permite tomar mejores decisiones en base a la información que te brindan los datos recolectados de los usuarios que visitan el sitio web deja un rastro de uso y experiencia, y a partir de estas, corregir errores y predecir mejoras. Esto asegurará que los esfuerzos de <i>marketing</i> sean exitosos.

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") La analítica aporta información cuantitativa como cualitativa, dependiendo de la capacidad de interpretación, entonces ¿qué información se puede conseguir?

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img35.svg', alt='Imágen decorativa')

      .col-lg-6
        .tarjeta-2.p-4.mb-3
          ul.lista-ul--color.fa-ul2
            li(data-aos="fade-left") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Evaluar el sitio web en cuanto a contenido, diseño, usabilidad, persuasión y posicionamiento en buscadores.
            li(data-aos="fade-left") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Aumentar la satisfacción de los usuarios identificando su comportamiento, navegación, etc., e introduciendo mejoras. 
            li(data-aos="fade-left")
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Mejorar el retorno de la inversión ROI aumentando el impacto y efectividad de nuestras acciones para conocer mejor a los clientes y usuarios.
            li(data-aos="fade-left")
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | Ampliar la capacidad de crecimiento en el sector, al incrementar la información sobre los productos y las empresas competidoras.




</template>

<script>
export default {
  name: 'Tema2',
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
