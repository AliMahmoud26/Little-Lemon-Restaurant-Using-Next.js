// Nabbar Links Component Data
export const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/menu', name: 'Menu' },
  { path: '/reservation', name: 'Reservation' },
  { path: '/orders', name: 'Orders' },
];

// Menu Items Component Data
export const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    image: "/greek salad.jpg",
    imageHeight: "230px"
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/bruchetta.jpeg",
    imageHeight: "235px"
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$4.78",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/desert.jpg",
    imageHeight: "235px"
  }
];

// Testimonials Component Data
export const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    review: "The food was absolutely delicious! The Greek salad was fresh and the lemon dessert was the perfect ending to our meal.",
    image: "/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 5,
    review: "Wonderful dining experience. The bruschetta was perfectly crispy and the service was exceptional.",
    image: "/testimonial2.avif"
  },
  {
    id: 3,
    name: "Michael Chen",
    rating: 5,
    review: "Authentic Mediterranean flavors with a modern twist. We'll definitely be coming back for more!",
    image: "/testimonial3.jpg"
  },
  {
    id: 4,
    name: "Emily Wilson",
    rating: 5,
    review: "The atmosphere was lovely and every dish we tried was prepared to perfection. Highly recommend!",
    image: "/testimonial4.jpg"
  },
  {
    id: 5,
    name: "David Brown",
    rating: 5,
    review: "Best restaurant in town! The ingredients are fresh and you can taste the quality in every bite.",
    image: "/testimonial1.jpg"
  },
  {
    id: 6,
    name: "Jessica Lee",
    rating: 5,
    review: "The staff went above and beyond to make our anniversary special. The food was incredible!",
    image: "/testimonial2.avif"
  }
];

// Footer Component Data
export const footerData = {
  description: {
    logo: '/Logo.svg',
    text: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'
  },
  links: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Order Online', path: '/order' },
    { name: 'Login', path: '/login' }
  ],
  contact: {
    address: '123 Town Street, Chicago',
    phone: '+00 123 456 789',
    email: 'little@lemon.com'
  },
  socials: [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
  ],
  copyright: {
    text: 'Copyright ©',
    author: 'Ali Mahmoud',
    authorUrl: 'https://github.com/AliMahmoud26',
    year: '2024',
    rights: 'All Rights Reserved'
  }
};