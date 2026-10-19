// Central content for Osteria Sereno.
// NOTE: Items marked DEMO need owner confirmation before going live.

export const restaurant = {
  name: 'Osteria Sereno',
  tagline: 'Modern Italian Dining',
  cuisine: 'Italian',
  established: '2017',
  area: 'Notting Hill, London',
  address: '14 Kensington Park Road, Notting Hill, London W11 2ES',
  addressShort: '14 Kensington Park Road, Notting Hill',
  phone: '+44 20 7946 0958',
  phoneHref: 'tel:+442079460958',
  whatsapp: '+44 7700 900158',
  whatsappHref: 'https://wa.me/447700900158',
  email: 'reservations@osteriasereno.example',
  mapsQuery: 'Notting Hill, London W11 2ES',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Notting+Hill+London+W11+2ES',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Notting+Hill+London+W11+2ES',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  bookingHref: '#reserve',
  orderHref: '#menu',
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '5:30 – 10:30 PM' },
    { day: 'Wednesday', time: '5:30 – 10:30 PM' },
    { day: 'Thursday', time: '5:30 – 10:30 PM' },
    { day: 'Friday', time: '12:00 – 11:00 PM' },
    { day: 'Saturday', time: '12:00 – 11:00 PM' },
    { day: 'Sunday', time: '12:00 – 9:30 PM' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const images = {
  hero: 'https://images.pexels.com/photos/21821564/pexels-photo-21821564.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'Handmade pasta dish in dim, warm lighting',
  story: 'https://images.pexels.com/photos/15441279/pexels-photo-15441279.jpeg?auto=compress&cs=tinysrgb&w=1200',
  storyAlt: 'Chef stirring sauce in a professional kitchen',
  cta: 'https://images.pexels.com/photos/12861281/pexels-photo-12861281.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ctaAlt: 'Red wine being poured into a glass against a dark background',
};

export type Dish = {
  name: string;
  price: string;
  description: string;
  image?: string;
  category: string;
  tags?: string[];
  signature?: boolean;
};

export const signatureDishes: Dish[] = [
  {
    name: 'Tagliolini al Tartufo',
    price: '£28',
    description: 'Hand-cut tagliolini, aged parmesan cream, fresh black truffle shaved at the table.',
    image: 'https://images.pexels.com/photos/21821564/pexels-photo-21821564.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Pasta',
    tags: ['Signature', 'Vegetarian'],
    signature: true,
  },
  {
    name: 'Risotto alla Milanese',
    price: '£24',
    description: 'Carnaroli rice, saffron, bone marrow, aged Parmigiano, finished with butter mantecatura.',
    image: 'https://images.pexels.com/photos/33673934/pexels-photo-33673934.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Mains',
    tags: ['Signature'],
    signature: true,
  },
  {
    name: 'Nero di Seppioline',
    price: '£26',
    description: 'Squid-ink tagliatelle, seared baby cuttlefish, cherry tomato, chilli, lemon zest.',
    image: 'https://images.pexels.com/photos/24289216/pexels-photo-24289216.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Pasta',
    tags: ['Signature'],
    signature: true,
  },
  {
    name: 'Tiramisù della Casa',
    price: '£12',
    description: 'Savoiardi soaked in espresso, mascarpone cream, single-origin cocoa, a whisper of Marsala.',
    image: 'https://images.pexels.com/photos/26838690/pexels-photo-26838690.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Dolci',
    tags: ['Signature', 'Vegetarian'],
    signature: true,
  },
];

export const menu: Dish[] = [
  // Antipasti
  { name: 'Burrata di Andria', price: '£16', description: 'Puglian burrata, heritage tomato, basil oil, toasted sourdough.', category: 'Antipasti', tags: ['Vegetarian'] },
  { name: 'Vitello Tonnato', price: '£18', description: 'Slow-cooked veal, tuna-caper emulsion, salted capers, lemon.', category: 'Antipasti' },
  { name: 'Carpaccio di Manzo', price: '£17', description: 'Thinly sliced beef, rocket, shaved Parmigiano, truffle vinaigrette.', category: 'Antipasti' },
  { name: 'Polpette al Sugo', price: '£14', description: 'Braised beef & pork polpette, San Marzano sugo, ricotta salata.', category: 'Antipasti' },

  // Pasta
  { name: 'Tagliolini al Tartufo', price: '£28', description: 'Hand-cut tagliolini, aged parmesan cream, fresh black truffle.', category: 'Pasta', tags: ['Signature', 'Vegetarian'] },
  { name: 'Nero di Seppioline', price: '£26', description: 'Squid-ink tagliatelle, seared cuttlefish, cherry tomato, chilli.', category: 'Pasta', tags: ['Signature'] },
  { name: 'Ravioli di Zucca', price: '£22', description: 'Pumpkin & amaretti ravioli, brown butter, crispy sage, hazelnut.', category: 'Pasta', tags: ['Vegetarian'] },
  { name: 'Spaghetti alle Vongole', price: '£24', description: 'Spaghetti, fresh clams, garlic, white wine, parsley, chilli.', category: 'Pasta' },
  { name: 'Pappardelle al Ragù', price: '£23', description: 'Wide ribbons, 8-hour beef & pork ragù, Parmigiano Reggiano.', category: 'Pasta' },

  // Mains
  { name: 'Risotto alla Milanese', price: '£24', description: 'Carnaroli, saffron, bone marrow, aged Parmigiano, butter.', category: 'Mains', tags: ['Signature'] },
  { name: 'Branzino in Crosta', price: '£32', description: 'Whole sea bass in salt crust, salsa verde, lemon, baby spinach.', category: 'Mains' },
  { name: 'Costata di Manzo', price: '£38', description: 'Dry-aged ribeye, rosemary potatoes, bone-marrow butter, rocket.', category: 'Mains' },
  { name: 'Pollo alla Cacciatora', price: '£26', description: 'Braised free-range chicken, olives, capers, tomato, Chianti.', category: 'Mains' },

  // Dolci
  { name: 'Tiramisù della Casa', price: '£12', description: 'Espresso savoiardi, mascarpone cream, cocoa, Marsala.', category: 'Dolci', tags: ['Signature', 'Vegetarian'] },
  { name: 'Panna Cotta', price: '£10', description: 'Vanilla bean panna cotta, macerated berries, balsamic reduction.', category: 'Dolci', tags: ['Vegetarian'] },
  { name: 'Cannoli Siciliani', price: '£11', description: 'Crisp shells, sweet ricotta, candied orange, pistachio crumb.', category: 'Dolci', tags: ['Vegetarian'] },
  { name: 'Affogato', price: '£9', description: 'Vanilla gelato drowned in hot espresso, amaretto biscuit.', category: 'Dolci', tags: ['Vegetarian'] },
];

export const menuCategories = ['All', 'Antipasti', 'Pasta', 'Mains', 'Dolci'] as const;

export const gallery = [
  { src: 'https://images.pexels.com/photos/37968303/pexels-photo-37968303.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Romantic candlelit fine-dining table setting', span: 'tall' },
  { src: 'https://images.pexels.com/photos/17237179/pexels-photo-17237179.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Italian ravioli with tomato sauce on a dark plate', span: 'wide' },
  { src: 'https://images.pexels.com/photos/6449866/pexels-photo-6449866.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Red wine being poured into a glass at dinner', span: 'normal' },
  { src: 'https://images.pexels.com/photos/19089527/pexels-photo-19089527.png?auto=compress&cs=tinysrgb&w=1200', alt: 'Elegant dining room with luxury decor and lighting', span: 'wide' },
  { src: 'https://images.pexels.com/photos/26838690/pexels-photo-26838690.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Tiramisu slice garnished with fresh mint', span: 'normal' },
  { src: 'https://images.pexels.com/photos/6876600/pexels-photo-6876600.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Plush armchairs in a luxurious dining room', span: 'tall' },
  { src: 'https://images.pexels.com/photos/24289216/pexels-photo-24289216.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Black pasta with shrimp and tomatoes', span: 'normal' },
  { src: 'https://images.pexels.com/photos/38539254/pexels-photo-38539254.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Warm-lit empty dining tables', span: 'wide' },
];

// Reviews are illustrative DEMO content pending verified sources.
export const reviews = [
  { quote: 'The tagliolini al tartufo is the single best plate of pasta I have had in London. Service was warm and unhurried.', author: 'Verified guest', source: 'Demo review', rating: 5 },
  { quote: 'A hidden Notting Hill gem. The room glows in candlelight and the wine list is a love letter to Italy.', author: 'Verified guest', source: 'Demo review', rating: 5 },
  { quote: 'We celebrated our anniversary here and the kitchen sent out a little dessert with a candle. Thoughtful, elegant, delicious.', author: 'Verified guest', source: 'Demo review', rating: 5 },
];

export const announcement = 'Now booking for autumn — seasonal white-truffle menu available through November.';
