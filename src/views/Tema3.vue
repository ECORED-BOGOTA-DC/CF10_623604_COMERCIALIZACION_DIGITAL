<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <i>Neuromarketing</i> en el turismo

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Imágen decorativa')

      .col-lg-6
        p(data-aos="fade-right") La industria de los viajes y el turismo es la industria de las emociones debido a la cantidad de experiencias que produce, no solo durante el viaje, sino antes y después del mismo. El turismo tiene la capacidad de generar recuerdos de toda una vida, ya que estos van ligados a las emociones y estas desempeñan un rol fundamental en la calificación final del turista con respecto a un destino, sus servicios y su gente.

        .cajon.color-primario.p-4(data-aos="flip-down")
          p.mb-0 Cuando este tema se mezcla con mercadeo, se comienza a hablar de <i>neuromarketing</i>, que es la unión entre la ciencia y las técnicas de <i>marketing</i>; es la herramienta que contribuye a comprender las emociones y las razones por las cuales viaja un turista. Desde el punto de vista científico, se puede decir que el <i>neuromarketing</i> tiene por objetivo entender el comportamiento de compra de un cliente con respecto a una marca, teniendo en cuenta la actividad neuronal.


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-amarilla3.px-5.py-3(data-aos="flip-down")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p.mb-lg-0.mt-lg-5 No es una herramienta exclusiva del turismo ya que se aplica en muchos otros campos, sin embargo, en la industria de los viajes se puede aplicar por ejemplo para conocer la opinión de un cliente antes de lanzar un nuevo producto turístico o una experiencia turística; también funciona para definir una estrategia de precios o para conocer el gusto del público con respecto a un diseño publicitario. 

          .col-8.col-lg-4
            figure.mb-0
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='Imágen decorativa').img-tarjeta

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-right") Normalmente existen otros métodos de investigación para conocer la percepción del turista, entre ellos están los grupos focales y las encuestas, sin embargo, estos métodos no son del todo confiables ya que las respuestas pueden estar alteradas por el propio turista a fin de “agradar” o “dar la respuesta correcta”. 

        p(data-aos="fade-right") En el cerebro, por el contrario, no hay mentiras, porque el inconsciente es quien finalmente domina los comportamientos; así pues, el <i>neuromarketing</i> busca identificar las áreas del cerebro que se activan con la toma de decisiones de los turistas, evidenciando impulsos en los músculos del rostro, frecuencia en los latidos cardíacos, sudor, lenguaje corporal, etc. 

        .cajon.color-azul1.p-4(data-aos="flip-down")
          p.mb-0 Con esta ciencia, se podrían resolver interrogantes como: ¿por qué el turista escogió el destino?, ¿por qué le pareció atractivo tal hotel y no otro?, ¿qué se podría hacer para que los turistas vuelvan a comprar el paquete turístico o la experiencia turística?

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imágen decorativa')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 <i>Neuromarketing</i> en el turismo
                  p Con el fin de tener mayor conocimiento sobre el tema, se invita a ver el siguiente documento.

                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexos/prueba.docx')" target="_blank")
                    span Ingresar 
                    i.fas.fa-link

    .bg1-tema1.mb-5
      .row.justify-content-center.align-items-center.mb-5
        p(data-aos="fade-right") Para determinar las respuestas emocionales y neuronales y conocer realmente lo que siente el turista con respecto a un servicio, destino o producto, el <i>neuromarketing</i> se basa en diferentes técnicas como, por ejemplo, biosensores, resonancias magnéticas, medición del ritmo cardíaco, electromiografía, <i>eyetracking</i>, y medición de respuestas galvánicas. Se invita a revisar el anexo para diferenciar cada una de ellas.

      .row.justify-content-center.align-items-center.mb-5
        TabsC.color-primario
          .py-3.py-md-4(titulo="Biosensores")
            .row
              .col-md-5.mb-4.mb-md-0
                p Son pequeños dispositivos de naturaleza <i>wearable</i> o <i>wireless</i> capaces de cuantificar y medir determinadas sensaciones.

                p Las emociones de una persona son fácilmente identificables si se tienen en cuenta ciertas métricas: la frecuencia cardiaca, el pulso, la sudoración, la respiración, entre otros.

                p Permiten identificar el impacto de un estímulo sobre una persona, mostrando los niveles de activación de su cuerpo, por tanto son parte importante dentro de las técnicas de investigación del <i>neuromarketing.</i>

              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema3/img4.svg', alt='Imágen decorativa')

          .py-3.py-md-4(titulo="Electroencefalografía (EEG)")
            .row
              .col-md-5.mb-4.mb-md-0
                p El EGG determina los cambios químicos o eléctricos que se producen en el cerebro.

                p A través  de un casco (existen modelos <i>wearables</i> muy cómodos) con sensores se recogen leves corrientes eléctricas inducidas por la actividad cerebral.

                p Así pues un usuario conectado a un sistema EEG, al percibir un estímulo, el sistema muestra en qué zona del cerebro se ha llevado la mayor parte de la actividad.

                p Las técnicas de electroencefalografía (EEG) trabajan bajo modelos predefinidos de aprendizaje de las emociones, ofreciendo respuestas verdaderamente interesantes.
                
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imágen decorativa')

          .py-3.py-md-4(titulo="Electromiografía")
            .row
              .col-md-5.mb-4.mb-md-0
                p Mide las reacciones de los músculos del cuerpo, especialmente los de la cara; esto es útil para saber la aceptación o rechazo de la persona sobre un producto, servicio, comercial, cuña, etc.

                p Las expresiones faciales están fuertemente vinculadas a las emociones, y de eso se trata, capturar las emociones y darles respuesta en una estrategia de <i>marketing.</i>

                p Esta tecnología permite el reconocimiento automático de emociones como sonrisa, tristeza, asco, sorpresa… y  suelen basarse en el análisis de los 120 puntos faciales más característicos.
                
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imágen decorativa')

          .py-3.py-md-4(titulo="<i>Eye-tracking</i>")
            .row
              .col-md-5.mb-4.mb-md-0
                p Intenta comprender los mecanismos que guían a los consumidores para seleccionar ciertos puntos de interés ante una imagen con el seguimiento ocular para proporcionar información sobre qué es más relevante para la atención del usuario, basado en un sistema de patrones de fijación visuales.

                p Existen <i>software</i> que permiten:

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-dot-circle(style="color: #EB6F2D")
                    | Medir el tamaño de la pupila y la distancia entre la persona y el estímulo.
                  li 
                    i.fas.fa-dot-circle(style="color: #EB6F2D")
                    | Identificar el punto de fijación (dónde mira la persona).
                  li 
                    i.fas.fa-dot-circle(style="color: #EB6F2D")
                    | Secuencia en la que los ojos cambian de foco.
                  li 
                    i.fas.fa-dot-circle(style="color: #EB6F2D")
                    | Número de parpadeos.

              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imágen decorativa')

          .py-3.py-md-4(titulo="Medición de respuestas galvánicas")
            .row
              .col-md-5.mb-4.mb-md-0
                p Lo que hace es medir las respuestas de la piel ante el estímulo, por ejemplo, la sudoración. En el <i>marketing</i> se señala que si la persona, ante el estímulo, aumenta su sudoración, indica que los niveles de estrés también aumentaron.

                p La secreción de sudor y la conductancia de la piel son dos factores claves vinculados a las emociones. 

                p A través de sensores y la monitorización de los mismos, es posible medir estos factores que dan un mensaje directo sobre las emociones del usuario.
                
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Luego de aprender las técnicas, se verá, entonces, cómo se pueden incorporar las estrategias del <i>neuromarketing</i> a cualquier producto o servicio en turismo.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--gris.p-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 La mirada
              p La eficacia del contacto visual y del uso de personas en los anuncios son conclusiones ya antiguas en el medio del <i>marketing</i>. Pero lo que no se sabía hasta hace poco es que cuando se usan imágenes de personas mirando fijamente al consumidor, la atención se retira del anuncio y el foco queda solo en las imágenes.

              p Por eso, el <i>neuromarketing</i> recomienda el uso de imágenes de personas dirigiendo su mirada hacia un punto de interés. Así, el anuncio se mantiene atractivo y la atención del consumidor se vuelve hacia el objetivo de la campaña: el producto.


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 Los colores
              p Los colores influyen directamente en la forma que el cliente se siente. Cada color está vinculado a una emoción e insertar una tonalidad que entra en conflicto con el "humor" elegido para el anuncio puede arruinar el objetivo final.

              p Por lo tanto, utilizar un color de forma eficaz puede ser una poderosa herramienta de <i>marketing.</i> Especialistas en <i>neuromarketing</i> especializados en el color han dividido los colores en subgrupos como una guía de cómo se pueden utilizar de forma eficaz. Azul, por ejemplo, es el color recomendado si deseas atraer profesionales.


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 La velocidad/rapidez
              p La sensación de velocidad, de agilidad, atrae al público. El sentimiento de seguridad y estabilidad, utilizado por empresas tradicionales, es efectivo para muchos segmentos. Pero lo que atrae al público efectivamente es el sentimiento de velocidad.

              p Las promesas de conveniencia, rapidez y eficiencia activan el cerebro de los consumidores a una escala mucho mayor que la seguridad.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imágen decorativa')

          .row.justify-content-center
            p.mb-5 Es decir, ante ciertos estímulos, el cerebro entiende que necesitas actuar rápidamente. Algunos de los principales son:
            .col-md-5.mb-4.mb-md-0
              h4 Prueba social

              p Presentar la cantidad de personas que visitan tu blog o ya han comprado tu producto va a motivar a quien llegó ahora para hacer lo mismo. Al final, tenemos la tendencia de seguir la mayoría.


            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img12.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 Escasez
              p Las ediciones limitadas son el ejemplo perfecto de cómo crear un efecto de escasez puede ser positivo. El cerebro entiende que necesita actuar rápido para no perder la oportunidad.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img13.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 Urgencia
              p Siguiendo el mismo principio de la escasez, la urgencia lleva a la persona a actuar por impulso. ¿Funciona? El Black Friday prueba que sí.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imágen decorativa')

          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              h4 Exclusividad

              p Las personas aman formar parte de grupos selectos o ganar acceso anticipado a productos y servicios, pues la sensación de exclusividad las hace sentir importantes.

            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imágen decorativa')

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.1 Características

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") Se consideran características clave como son la atención, emoción y memoria, elementos esenciales para entender la lógica de consumo, comprender los deseos, impulsos y motivaciones de los individuos a través del estudio de las reacciones neurológicas a ciertos estímulos. 

        p(data-aos="fade-right") Algunos expertos en el tema destacan que los tres factores anteriormente mencionados son los que más influyen en las decisiones de compra. Algunas investigaciones hechas por neurólogos explican que la mayor parte de todas las decisiones de compra se toman en el nivel subconsciente y que, por lo tanto, es importante tomar en cuenta el tipo de recuerdo para poder resolver problemas de <i>marketing</i> y establecer acciones que permitan mejorar y alcanzar los distintos objetivos.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") Adicional a esos elementos, el <i>neuromarketing</i> cuenta con 10 características fundamentales:



    .row.justify-content-center.align-items-center.mb-5
      SlyderF.mb-5(columnas="col-md-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Cientificidad
            p.text-center Se identifican patrones de comportamiento mediante técnicas científicas.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img18.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Dinamismo
            p.text-center La mente de una persona es movible, no siempre actúa, piensa o reacciona de la misma manera; asimismo, ninguna persona es igual, así que el <i>neuromarketing</i> se adapta a ese dinamismo.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img19.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Complejidad
            p.text-center Los procesos del cerebro siempre serán complejos. No hay manera de navegar en este sin enfrentarse a múltiples factores, lo cual vuelve sofisticado al <i>neuromarketing</i>.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img20.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Variabilidad 
            p.text-center Los resultados, las mediciones e investigaciones varían de acuerdo con un contexto en particular.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img21.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Enfoque
            p.text-center Las estrategias que deriven del <i>neuromarketing</i> tienen que enfocarse hacia algo; no son totalizadoras, sino específicas.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img22.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Influencia
            p.text-center Los múltiples factores a los que está expuesto un individuo en su desarrollo representan influencias para sus comportamientos y hábitos, así que el <i>neuromarketing</i> debe considerar esto para tener un indicador más certero.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img23.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Temporalidad
            p.text-center Debe estar enmarcado en un tiempo.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img24.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Causalidad
            p.text-center Entiende que cualquier reacción de una persona es causal y no casual, así que llega al fondo para conocer el impulso primigenio.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img25.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Precisión
            p.text-center Al usar técnicas de la neurociencia es preciso en sus resultados.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img26.svg', alt='Imágen decorativa')
          .tarjeta.tarjeta--gris.p-4
            h4.text-center.mt-5 Predicción
            p.text-center Con el <i>neuromarketing</i> se busca anticiparse, prever escenarios y hacer pronósticos de comportamiento.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.2 Tipos

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Para seguir ampliando el conocimiento sobre el tema, se exponen los diferentes tipos de <i>neuromarketing</i> que existen y algunos casos de éxito en cada una de las categorías. 

    .row.bg-titulo1.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3.text-right <i>Neuromarketing</i> visual

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img27.svg', alt='Imágen decorativa')

      .col-lg-6.mb-3
        .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
          p.mb-0 Es el que se basa en cómo percibimos nuestro alrededor con los ojos. Está demostrado que una imagen llega siempre de forma muchísimo más rápida al cerebro, con lo cual, la eficacia del mensaje que se quiere transmitir, también está más garantizada. Según estudios el cerebro retiene el 80 % de lo que ve, 20 % de lo que lee y 10 % de lo que escucha.

        p(data-aos="fade-left") También hay varias técnicas que se utilizan para hacer que el consumidor perciba algo mucho más interesante, cómo terminar los precios en 0,99, haciendo que nuestro cerebro perciba que ese precio es más bajo que otro. De igual manera, las palabras “gratis”, “rebajas”, “ocasión”, “oferta”, son otras técnicas de venta para llamar la atención de nuestros consumidores.

      .col-lg-6.mb-3
        h4(data-aos="fade-right") Ejemplo Frito-Lay 

        p(data-aos="fade-left") El caso de éxito de Frito-Lay es uno de los más conocidos en el área del <i>neuromarketing</i>. Se trata de una compañía que ofrece snacks de todo tipo y muy reconocidos: Lay's, Fritos, Ruffles, Doritos, Cheetos… Según sus números, los hombres consumen muchos más snacks salados que las mujeres.

        p(data-aos="fade-right") La compañía deseaba saber cuál era la razón por la que las mujeres no se decantaba por sus productos salados. Así pues, se apoyaron en las técnicas de <i>neuromarketing</i> para dar respuesta a esta cuestión.

        p(data-aos="fade-left") Los resultados fueron muy sorprendentes y llamativos:

      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img28.svg', alt='Imágen decorativa')

      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img29.svg', alt='Imágen decorativa')

      .col-lg-6.mb-3
        .tarjeta-2.p-4.mb-3
          ul.lista-ul--color.fa-ul2
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | En primer lugar, se descubrió que el centro de comunicación en el cerebro de las mujeres estaba más desarrollado que en el de los hombres, lo que concluyó que las mujeres pueden procesar anuncios o mensajes con más complejidad.
            li(data-aos="fade-up") 
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | El centro emocional y la memoria (hipocampo) también destacaban de manera importante, deduciendo que las mujeres buscarían personajes con los que pudieran identificarse.
            li(data-aos="fade-up")
              i.fas.fa-dot-circle(style="color: #EB6F2D")
              | El sentimiento de culpa fue uno de los elementos más esclarecedores de este estudio.

    .row.bg-titulo1.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3.text-right <i>Neuromarketing</i> auditivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-left") Es el que se basa en todo aquello que percibe nuestro sentido de la audición, todo aquello que escuchamos. No olvidemos pues, que nuestro sentido del oído tiene memoria auditiva y esta es la que almacena información sobre nuestras experiencias a lo largo de nuestra vida, tanto en el pasado como en el presente.

        p(data-aos="fade-right") Cada uno de nosotros somos más sensibles a la música u otros sonidos, incluso al silencio, motivo por el cual, por ejemplo, los spots tienden a hacer uso de esos datos para potenciar una determinada música o hacer un silencio en un momento concreto de la publicidad. 

        h4(data-aos="fade-left") Ejemplo Fan Mallorca Shopping

        .cajon.color-azul1.p-4.mb-3(data-aos="flip-down")
          p En 2006 se llevó a cabo un estudio en la sección de vinos de una tienda, donde se exhibían botellas de vino francés y alemán, de sabor y precio similar.

          p.mb-0 En los días de la semana en que se tocaba música de acordeón francés, el 77 % del vino vendido era francés, mientras que en los días de música alemana, el 73 % del vino vendido era alemán. Lo más curioso de este experimento es que el 95 % de la gente que había comprado vino no se había percatado del tipo de música ambiental.

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img30.svg', alt='Imágen decorativa')

    .row.bg-titulo1.align-items-center.mb-5(data-aos="fade-right")
      h4.mt-3.text-right <i>Neuromarketing</i> kinestésico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3
        p(data-aos="fade-left") Se basa en lo que percibimos con el sentido del tacto, el olfato y el gusto. A través de dichas sensaciones, un consumidor, o su cerebro más bien, determinará en su subconsciente si ese producto llegará a su casa o no. Si bien es menos utilizado, no es menos importante que los otros dos. 

        .cajon.color-primario.p-4.mb-3(data-aos="flip-down")
          p.mb-0 Ejemplos en acciones podrían ser las degustaciones de productos y presentaciones donde los consumidores y público pueden oler, tocar y probar.

      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img31.svg', alt='Imágen decorativa')

      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img32.svg', alt='Imágen decorativa')

      .col-lg-6.mb-3
        h4(data-aos="fade-left") Ejemplo Tiendas Apple

        p(data-aos="fade-right") ¿Cuántas veces has entrado en una tienda Apple y te has puesto a tocar pantallas? Esta facilidad para tocar los productos Apple no surge de la casualidad o de manera aleatoria, responde a un tema muy estudiado.

        p(data-aos="fade-left") Apple siempre ha destacado por ser un referente en <i>Marketing</i>, sus ideas innovadoras han sido claves para el éxito de sus productos.

        p(data-aos="fade-right") Apple se percató desde sus inicios que el consumidor necesita tocar para sentirse respaldado en la toma de decisiones. 

      .col-lg-6.mb-3
        h4(data-aos="fade-right") Ejemplo Cinnabon

        p(data-aos="fade-left") La cadena de pastelerías estadounidense Cinnabon ha logrado un aumento importante de sus ventas al integrar una estrategia de <i>neuromarketing</i> olfativo.

        p(data-aos="fade-right") El producto estrella de Cinnabon son los rollos de canela, estos son horneados en espacios cortos de tiempo para generar el olor a canela. Este hecho, más una disposición estratégica de sus tiendas ha sido un binomio de éxito.

      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img33.svg', alt='Imágen decorativa')

    .bg2-tema1.mb-5
      .row.justify-content-center.align-items-center
        .col-6.col-lg-1.mb-4
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img34.svg', alt='Imágen decorativa')

        .col-lg-11
          p(data-aos="fade-left") Adobe Photoshop es una herramienta digital para la creación de contenidos y obviamente en su campaña publicitaria tenía que incluir toda la creatividad que su producto lleva implícito, por ello usa el <i>neuromarketing</i> visual donde mezcla formas, colores y trazos de manera espectacular.

          p(data-aos="fade-left") Un elemento esencial del <i>neuromarketing</i> es crear curiosidad y sorpresa; Pepsi lo logró con una activación sensorial en una parada de autobús, usando tecnología de realidad aumentada.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.3 Ventajas

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Como se ha visto, el <i>neuromarketing</i> es una de las mejores herramientas a aplicar cuando se desea tener una estrategia que impacte y ayude a aumentar las ventas y el posicionamiento de una empresa de servicios turísticos. Aquí algunas de sus ventajas:

    .row.align-items-center.mb-5
      .col-12
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img35.svg', alt='Imágen decorativa')

      .col-lg-7
        .tarjeta.tarjeta-amarilla.p-4.mb-5(data-aos="flip-down")
          p.mb-0 Mide todos los estímulos en un cliente (tacto, olfato, mirada, frecuencia cardiaca, sudor), diferenciándose del mercado tradicional que usa encuestas o grupos focales para conocer la opinión. Por dicho motivo, los estudios bajo esta ciencia siempre serán mucho más confiables y precisos.

        .tarjeta.tarjeta-azul4.p-4.mb-5(data-aos="flip-down")
          p.mb-0 Con el <i>neuromarketing</i> se puede evaluar de forma más puntual lo que siente y piensa de manera consciente e inconsciente el consumidor. Para lo anterior se fusionan los recursos de la publicidad, con técnicas de neurociencia y neuropsicología, para comprender la relación emocional entre el comportamiento del consumidor y su mente.

        .tarjeta.tarjeta-verde2.p-4.mb-5(data-aos="flip-down")
          p Ahorra dinero ya que ayuda a crear productos y campañas de publicidad que cubran más concretamente las necesidades reales de los clientes.

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") Se invita a observar esas ventajas reflejadas en el siguiente video de Heineken:

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-verde.p-3.p-sm-4.p-md-5(data-aos="flip-down")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img36.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p La marca de cervezas impulsó una campaña de uno de sus productos que tal vez sería difícil de vender en un inicio: una cerveza “cero” alcohol. Para ello, se basa en imágenes donde se muestra una figura de autoridad que conecta con la audiencia. 
          br
          br
          p Se muestran en el video dos corredores de autos, padre e hijo, quienes compiten en diferentes escenas de manera sana, para establecer quien será el próximo conductor. Lo que busca este anuncio es generar un impacto para que los consumidores terminen con un mensaje claro “si el personaje bebe cerveza sin alcohol, por qué yo no”. De esta forma, utiliza el <i>neuromarketing</i> visual para su comunicación.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
       h2 3.4 Tecnología y consumidor

    .bg1-tema1.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema3/img37.svg', alt='Imágen decorativa')

        .col-lg-6
          p(data-aos="fade-left") Todas las tecnologías que se usan hoy día para realizar análisis de <i>neuromarketing</i> fueron aplicadas desde años atrás con la intención de conocer el comportamiento del público con respecto a una problemática x. Es así como en los años 60, el investigador y psicólogo Herbert Krugman, comenzó con la utilización del pupilómetro en fines comerciales para indagar acerca del interés del ser humano con respecto a lo que veían en televisión. Durante esos años, también se iniciaron experimentos para conocer las reacciones emocionales del público, a través del Galvanic Skin Response (GSR).

          p(data-aos="fade-left") Para la década de 1970 aparece el <i>eye tracking</i>, que brindó información de los usuarios al observar diferentes cosas como un empaque, un envase, una página web, entre otras. En esta época otros investigadores también comenzaron a analizar los dos hemisferios del cerebro encontrando información importante en los datos que se arrojaban.


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-amarilla3.px-5.py-3(data-aos="flip-down")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p.mb-lg-0.mt-lg-5 Actualmente hay muchos investigadores y empresas que se dedican al <i>neuromarketing</i> que afirman que el tipo de publicidad que se hace con esta herramienta es mucho más científico que creativa, donde se observa y se interpretan resultados haciendo uso de la tecnología para luego tener un mejor y acertado resultado en la creación de campañas publicitarias.

          .col-8.col-lg-4
            figure.mb-0
              img(src='@/assets/curso/temas/tema3/img38.svg', alt='Imágen decorativa').img-tarjeta

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img39.svg', alt='Imágen decorativa')

      .col-lg-6
        p(data-aos="fade-left") En este punto también es importante hablar de las generaciones y de su incursión en la tecnología. Los <i>millennials</i> y su posterior generación, la Z, tienen siempre al alcance sus compras a través de un clic. Están familiarizados con la tecnología y también con el desapego, ya que bienes materiales como una casa, un carro, un tv, los hacen menos libres para saltar de una marca a otra según corresponda la tendencia y donde la tecnología los lleve. Viven también en una economía que les impulsa y les permite viajar y junto a ese gusto, también se hacen presentes artefactos que han cambiado su manera de comprar y acceder a los destinos, como, por ejemplo; tablets, portátiles, cámaras de última generación, etc. 

        .cajon.color-azul1.p-4.mb-3(data-aos="flip-down")
          p.mb-0 Lo anterior es importante, ya que les deja un gran reto a las compañías de turismo y de todos los campos, para conocer los gustos, pensamientos, emociones, de generaciones tan cambiantes y tecnológicas como las de hoy día.      




</template>

<script>
import SlyderF from '@/components/SlyderF.vue'
export default {
  name: 'Tema3',
  components: { SlyderF },
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
