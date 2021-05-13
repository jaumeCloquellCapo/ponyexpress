export default () => {
  return new Promise(function(resolve) {
    resolve({
      seo: {
        home:{
          title:  "Pony Express Mallorca",
          description: "Company specialised in the rental of ponies in Majorca",
          keywords: 'ponis, rent, horse'
        },
        contact:{
          title:  "Contact | Pony Express Mallorca",
          description: "Contact with Pony Express from Palma de Mallorca",
          keywords: 'ponis, rent, horse'
        },
      },
      common: {
        en: "English",
        es: "Spanish",
      },
      gallery: {
        title: 'Gallery'
      },
      home: {
        our_services: 'Our servicies',
        party: 'FIESTAS DE CUMPLEAÑOS',
        party_desc: 'Celebra el cumpleaños de los peques , de una forma diferente, al aire libre y en contacto con los animales',
        comunion:  'PRIMERA COMUNIÓN',
        comunion_desc: 'La mejor opción para la celebración de una comunión es con Pony Express. Donde los niños son los verdaderos protagonistas. Nuestros cariñosos ponys harán que el día se convierta en inolvidable para todos.',
        others: 'OTRAS CELEBRACIONES',
        others_desc: ' Te ofrecemos la posibilidad de organizar los mejores eventos, fiestas y celebraciones. Ofrecemos servicios personalizados.'
      },
      contact: {
        title: 'Contact',
        subtitle:'¿ Odias los formularios ? Llámanos directamente en su lugar'
      },
      hero: {
        title: 'Horses are the favourite animal of many children and on this pony ride in Mallorca they can see their dream come true.'
      },
      call: {
        visit: '¡ Ven a visitarnos sin compromiso !',
        visit_desc: 'Podrás ver y elegir entre los ponis que forman parte de nuestro equipo, un lujo al alcance de la mano.'
      }
    })
  })
}
