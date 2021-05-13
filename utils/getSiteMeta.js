const type = "website";
const url = "https://ponyexpressmallorca.com";
const keywords = 'caballos, ponis, alquiler, cumpleaños, fiestas, comuniones'
const title = "PONY EXPRESS MALLORCA alquiler de ponis";
const description = "Alquiler de ponis en mallorca";
const mainImage = "https://firebasestorage.googleapis.com/v0/b/diverpark-836bc.appspot.com/o/ponis%2F379757_540313779336653_1475484847_n.jpg?alt=media&token=d96c7afd-8731-4b91-9f78-4974bb2e3205";
export default (meta) => {
  return [
    {
      hid: "description",
      name: "description",
      content: (meta && meta.description) || description,
    },
    {
      hid: `keywords`,
      name: 'keywords',
      keywords: (meta && meta.keywords) || keywords,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: (meta && meta.mainImage) || mainImage,
    },
  ];
};