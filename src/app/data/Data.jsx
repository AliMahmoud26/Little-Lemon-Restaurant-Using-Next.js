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
    image: "/testimonial2.avif",
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

// About Page - Our History Component Data
export const historyData = {
  story: {
    title: "Our Story",
    content: "Welcome to our family-owned Mediterranean restaurant, a place where tradition and innovation come together to create an unforgettable dining experience. Our story began with a simple yet profound dream: to share the rich heritage of Mediterranean cuisine with our community. Inspired by recipes passed down through generations, we've taken the flavors of our roots and infused them with a modern twist to appeal to today's adventurous food lovers. From the very beginning, our focus has been on crafting dishes that reflect the warmth and authenticity of our culture. Every plate tells a story—of fresh, handpicked ingredients, bold flavors, and the timeless art of Mediterranean cooking. While we remain deeply connected to our culinary traditions, we embrace creativity to give each dish a contemporary flair that excites the senses. Our restaurant is more than just a place to eat; it's a gathering space for friends and family to share moments of joy and connection. Whether it's a casual meal, a special celebration, or simply a desire to explore the tastes of the Mediterranean, we are here to welcome you with open arms. Over the years, our journey has been guided by passion, hard work, and the unwavering support of our guests. As we continue to grow, we remain committed to providing exceptional food, heartfelt service, and an atmosphere that feels like home. Thank you for being part of our story—we look forward to sharing many more meals and memories with you."
  },
  gallery: [
    {
      col: 1,
      images: [
        { src: "/restauranfood.jpg", width: 250, height: 550, alt: "Restaurant food" },
        { src: "/restaurant-8.jpg", width: 250, height: 500, alt: "Restaurant interior" },
        { src: "/restaurant-8.jpg", width: 250, height: 500, alt: "Restaurant interior" },
      ]
    },
    {
      col: 2,
      images: [
        { src: "/restaurant-1.jpg", width: 250, alt: "Dining area" },
        { src: "/restaurant-10.jpg", width: 250, alt: "Chef preparing food" },
        { src: "/restaurant-3.jpg", width: 250, alt: "Mediterranean dishes" },
      ]
    },
    {
      col: 3,
      images: [
        { src: "/restaurant-4.jpg", width: 250, alt: "Fresh ingredients" },
        { src: "/restaurant-17.jpg", width: 250, alt: "Outdoor seating" },
        { src: "/restaurant-9.jpg", width: 250, alt: "Dessert selection" },
      ]
    },
    {
      col: 4,
      images: [
        { src: "/food1.avif", width: 250, height: 550, alt: "Mediterranean cuisine" },
        { src: "/restaurant-16.jpg", width: 250, height: 500, alt: "Family dining" },
        { src: "/restaurant-16.jpg", width: 250, height: 500, alt: "Family dining" },
      ]
    }
  ]
};

// Our Team Component Data
export const teamMembers = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    position: "Head Chef",
    bio: "With 15 years of Mediterranean cuisine experience, Carlos brings authentic flavors to every dish.",
    image: "/testimonial1.jpg",
    specialties: ["Grilled meats", "Traditional recipes"]
  },
  {
    id: 2,
    name: "Sophia Papadakis",
    position: "Pastry Chef",
    bio: "Specializing in Greek desserts, Sophia creates sweet endings to your meals.",
    image: "/testimonial2.avif",
    specialties: ["Baklava", "Galaktoboureko"]
  },
  {
    id: 3,
    name: "Mehmet Yilmaz",
    position: "Sous Chef",
    bio: "Expert in Turkish and Lebanese cuisine, Mehmet adds depth to our menu.",
    image: "/testimonial3.jpg",
    specialties: ["Mezze", "Kebabs"]
  },
  {
    id: 4,
    name: "Elena Costa",
    position: "Sommelier",
    bio: "Elena pairs our dishes with perfect Mediterranean wines.",
    image: "/testimonial3.jpg",
    specialties: ["Wine pairing", "Cocktails"]
  }
];

// Restaurant FAQ Data
export const restaurantFAQs = [
  {
    id: 1,
    question: "What type of cuisine do you serve?",
    answer: "We specialize in authentic Mediterranean cuisine with a modern twist, offering traditional recipes passed down through generations."
  },
  {
    id: 2,
    question: "How can I make a reservation?",
    answer: "Reservations can be made through our website, by calling (555) 123-4567, or via our mobile app. We recommend booking in advance for weekends."
  },
  {
    id: 3,
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes! We offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies when ordering."
  },
  {
    id: 4,
    question: "What are your opening hours?",
    answer: "Open Tuesday-Sunday: 11AM-10PM. Closed Mondays. Kitchen closes at 9:30PM."
  },
  {
    id: 5,
    question: "Do you offer takeout or delivery?",
    answer: "Yes, we offer both takeout and delivery through our website and app. Delivery available within 5 miles."
  },
  {
    id: 6,
    question: "Is the restaurant family-friendly?",
    answer: "Absolutely! We welcome families and offer a children's menu, high chairs, and a relaxed atmosphere."
  }
];