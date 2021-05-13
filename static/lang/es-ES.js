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
      },
      common: {
        en: "English",
        es: "Spanish",
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
      call: {
        visit: '¡ Ven a visitarnos sin compromiso !',
        visit_desc: 'Podrás ver y elegir entre los ponis que forman parte de nuestro equipo, un lujo al alcance de la mano.'
      }
    })
  })
}
