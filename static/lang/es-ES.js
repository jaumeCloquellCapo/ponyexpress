export default () => {
  return new Promise(function(resolve) {
    resolve({
      seo: {
        home:{
          title:  "Pony Express Mallorca",
          description: "Empresa especializada en el alquiler de Ponis en Mallorca",
          keywords: 'ponis, alquiler, caballos'
        },
        contact:{
          title:  "Contacto | Pony Express Mallorca",
          description: "Contacta con nuestra empresa Pony Express en Palma de Mallorca",
          keywords: 'ponis, caballos, fiestas, cumpleaños'
        },
        galeria: {
          title:  "Galería de fotos | Pony Express Mallorca",
          description: "Fotografías de ponis",
          keywords: 'ponis, caballos, fiestas, cumpleaños'
        },
        birthday:{
          title:  "Fiestas de cumpleaños con Pony Express Mallorca",
          description: "Fiestas de cumpleaños de Ponis en Mallorca",
          keywords: 'ponis, alquiler, caballos, cumpleaños'
        },
      },
      common: {
        en: "Ingles",
        es: "Español",
      },
      gallery: {
        title: 'Galería'
      },
      home: {
        our_services: 'Nuestros servicios',
        party: 'FIESTAS DE CUMPLEAÑOS',
        party_desc: 'Celebra el cumpleaños de los peques , de una forma diferente, al aire libre y en contacto con los animales',
        comunion:  'PRIMERA COMUNIÓN',
        comunion_desc: 'La mejor opción para la celebración de una comunión es con Pony Express. Donde los niños son los verdaderos protagonistas. Nuestros cariñosos ponys harán que el día se convierta en inolvidable para todos.',
        others: 'OTRAS CELEBRACIONES',
        others_desc: ' Te ofrecemos la posibilidad de organizar los mejores eventos, fiestas y celebraciones. Ofrecemos servicios personalizados.'
      },
      contact: {
        title: 'Contacto',
        subtitle:'¿ Odias los formularios ? Llámanos directamente en su lugar'
      },
      hero: {
        title: ' El caballo es el animal favorito de muchos niños y en este paseo en pony en Mallorca podrán ver su sueño cumplido.'
      },
      call: {
        visit: '¡ Ven a visitarnos sin compromiso !',
        visit_desc: 'Podrás ver y elegir entre los ponis que forman parte de nuestro equipo, un lujo al alcance de la mano.'
      },
      testimonials: {
        title: 'Nuestros clientes aman a los animales',
        heading: 'Que dicen sobre nosotros'
      },
      birthday: {
        title: 'Fiesta de cumpleaños',
        heading: " Lo importante es celebrar y pasar un buen momento!!!",
        service_home_house: "Servicio a domicilio",
        service_home_house_desc: "Nada más cómodo que montar tu fiesta de cumpleaños en casa, en el local comunitario, en un restaurante de tu barrio donde tengas confianza, en un local infantil del barrio, en una casa rural en el campo, en una piscina o en el jardín de tu chalet.",
        service_house: "En nuestras instalaciones",
        service_house_desc: "Nuestro objetivo es hacer que organizar tu fiesta sea libre de estrés. ¡ Nosotros nos encargaremos de todo!"
      },
    })
  })
}
