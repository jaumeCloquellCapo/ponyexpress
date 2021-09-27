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
        galeria: {
          title:  "Galery | Pony Express Mallorca",
          description: "Photos ponis",
          keywords: 'ponis, caballos, fiestas, cumpleaños'
        },
        birthday:{
          title:  "Birthday party with Pony Express Mallorca",
          description: "Company specialised in the rental of ponies in Majorca",
          keywords: 'ponis, rent, horse, birthday'
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
        our_services: 'Our services',
        party: 'BIRTHDAY PARTIES',
        party_desc: 'Celebrate the birthday of the kids, in a different way, outdoors and in contact with animals',
        comunion: 'FIRST COMMUNION',
        comunion_desc: 'The best option for the celebration of a communion is with Pony Express. Where the children are the real protagonists. Our affectionate ponies will make the day unforgettable for everyone',
        others: 'OTHER CELEBRATIONS',
        others_desc: ' We offer you the possibility to organise the best events, parties and celebrations. We offer personalised services.',
      },
      contact: {
        title: 'Contact',
        subtitle:'Do you hate forms? Call us directly instead'
      },
      hero: {
        title: 'Horses are the favourite animal of many children and on this pony ride in Mallorca they can see their dream come true.'
      },
      call: {
        visit: 'Come and visit us with no obligation',
        visit_desc: 'You will be able to see and choose between the ponies that are part of our team, a luxury within reach',
      },
      testimonials: {
        title: 'Our customers love animals',
        heading: 'What they say about us'
      },
      birthday: {
        title: 'Birthday Party',
        heading: "The important thing is to celebrate and have a good time!!!!",
        service_home_house: "Home service",
        service_home_house_desc: "There is nothing more comfortable than having your birthday party at home, in the community center, in a restaurant in your neighborhood where you have confidence, in a local children's club, in a rural house in the countryside, in a swimming pool or in the garden of your villa.",
        service_house: "In our instalations",
        service_house_desc: "Our goal is to make organizing your party stress-free, we'll take care of everything!"
      },
    })
  })
}
