const PropertyData = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    description:
      "A beautiful modern apartment located in the heart of the city. Comes with 2 bedrooms, 1 bathroom, and a spacious living room.",
    price_per_month: 1500,
    location: "New York",
    address: "123 Main St, New York, NY 10001",
    bedrooms: 2,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer", "Gym"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585908/pexels-skyler-ewing-266953-6057399_pg0919.jpg",
    liked: false,
  },
  {
    id: 2,
    title: "Cozy Cottage by the Lake",
    description:
      "Enjoy a relaxing stay in this cozy cottage by the lake. Features 3 bedrooms, 2 bathrooms, a fully equipped kitchen, and a large backyard.",
    price_per_month: 1200,
    location: "Austin",
    address: "456 Lakeview Dr, Austin, TX 73301",
    bedrooms: 3,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer", "Parking"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585906/pexels-joshsorenson-427649_bmzp9k.jpg",
    liked: false,
  },
  {
    id: 3,
    title: "Luxurious Condo with Ocean View",
    description:
      "This luxurious condo offers stunning ocean views and high-end amenities. It includes 2 bedrooms, 2 bathrooms, a balcony, and access to a swimming pool.",
    price_per_month: 2500,
    location: "Miami",
    address: "789 Ocean Blvd, Miami, FL 33101",
    bedrooms: 2,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Gym",
      "Swimming Pool",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585904/pexels-jonathanborba-3255246_qptz6f.jpg",
    liked: false,
  },
  {
    id: 4,
    title: "Charming House in the Suburbs",
    description:
      "A charming house in a quiet suburban neighborhood. Comes with 4 bedrooms, 3 bathrooms, a garden, and a garage.",
    price_per_month: 1800,
    location: "San Francisco",
    address: "321 Suburb Ln, San Francisco, CA 94101",
    bedrooms: 4,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Parking",
      "Garden",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585904/pexels-gleb-vasylynka-2703485-4255722_hbjvqh.jpg",
    liked: false,
  },
  {
    id: 5,
    title: "Spacious Loft in Downtown",
    description:
      "A spacious loft located in downtown, perfect for urban living. Features 1 bedroom, 1 bathroom, and a modern kitchen.",
    price_per_month: 1400,
    location: "Chicago",
    address: "654 Downtown Ave, Chicago, IL 60601",
    bedrooms: 1,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer", "Gym"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585903/pexels-piotr-arnoldes-7862031-6771585_mmyaqq.jpg",
    liked: false,
  },
  {
    id: 6,
    title: "Beachfront Villa",
    description:
      "A stunning beachfront villa with panoramic ocean views. Includes 5 bedrooms, 4 bathrooms, a private pool, and a large terrace.",
    price_per_month: 5000,
    location: "Los Angeles",
    address: "987 Beachfront Rd, Los Angeles, CA 90001",
    bedrooms: 5,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Swimming Pool",
      "Parking",
      "Terrace",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585902/pexels-introspectivedsgn-7475602_nygg9b.jpg",
    liked: false,
  },
  {
    id: 7,
    title: "Cozy Cabin in the Mountains",
    description:
      "A cozy cabin located in the mountains, perfect for a peaceful retreat. Features 2 bedrooms, 1 bathroom, and a fireplace.",
    price_per_month: 1100,
    location: "Denver",
    address: "159 Mountain Rd, Denver, CO 80201",
    bedrooms: 2,
    amenities: ["WiFi", "Fireplace", "Washer", "Dryer", "Parking"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585901/pexels-shelby-cox-285181262-13084298_oollui.jpg",
    liked: false,
  },
  {
    id: 8,
    title: "Luxury Penthouse",
    description:
      "A luxury penthouse with breathtaking city views. Includes 3 bedrooms, 3 bathrooms, a rooftop terrace, and access to a private gym.",
    price_per_month: 6000,
    location: "New York",
    address: "852 Skyline Dr, New York, NY 10001",
    bedrooms: 3,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Gym",
      "Rooftop Terrace",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585900/pexels-introspectivedsgn-4061653_vxgcid.jpg",
    liked: false,
  },
  {
    id: 9,
    title: "Historic Home with Modern Upgrades",
    description:
      "A historic home with modern upgrades, featuring 4 bedrooms, 3 bathrooms, a large backyard, and a garage.",
    price_per_month: 2100,
    location: "Boston",
    address: "753 Heritage St, Boston, MA 02101",
    bedrooms: 4,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Parking",
      "Garden",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585899/pexels-introspectivedsgn-7635144_khmqf6.jpg",
    liked: false,
  },
  {
    id: 10,
    title: "Modern Studio in Trendy Area",
    description:
      "A modern studio apartment located in a trendy area. Features an open floor plan, 1 bathroom, and a fully equipped kitchen.",
    price_per_month: 1300,
    location: "Seattle",
    address: "951 Trendy Ln, Seattle, WA 98101",
    bedrooms: 1,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585898/pexels-the-ahnafpiash-10811220_heunfb.jpg",
    liked: false,
  },
  {
    id: 11,
    title: "Chic Apartment with City Views",
    description:
      "A chic apartment with stunning city views. Includes 2 bedrooms, 2 bathrooms, and a balcony.",
    price_per_month: 1600,
    location: "San Francisco",
    address: "654 Skyline Blvd, San Francisco, CA 94102",
    bedrooms: 2,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer", "Balcony"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585908/pexels-skyler-ewing-266953-6057399_pg0919.jpg",
    liked: false,
  },
  {
    id: 12,
    title: "Spacious Family Home",
    description:
      "A spacious family home with 5 bedrooms, 3 bathrooms, a large backyard, and a garage.",
    price_per_month: 2200,
    location: "Dallas",
    address: "357 Family Dr, Dallas, TX 75201",
    bedrooms: 5,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Parking",
      "Garden",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585906/pexels-joshsorenson-427649_bmzp9k.jpg",
    liked: false,
  },
  {
    id: 13,
    title: "Modern Loft in the Heart of the City",
    description:
      "A modern loft in the heart of the city, featuring an open floor plan, 1 bedroom, and 1 bathroom.",
    price_per_month: 1700,
    location: "Los Angeles",
    address: "852 Downtown Blvd, Los Angeles, CA 90002",
    bedrooms: 1,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer", "Gym"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585904/pexels-jonathanborba-3255246_qptz6f.jpg",
    liked: false,
  },
  {
    id: 14,
    title: "Charming Bungalow with Garden",
    description:
      "A charming bungalow with a beautiful garden, 3 bedrooms, 2 bathrooms, and a spacious living area.",
    price_per_month: 1400,
    location: "Portland",
    address: "159 Garden Ln, Portland, OR 97201",
    bedrooms: 3,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Parking",
      "Garden",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585904/pexels-gleb-vasylynka-2703485-4255722_hbjvqh.jpg",
    liked: false,
  },
  {
    id: 15,
    title: "Stylish Apartment with Rooftop Access",
    description:
      "A stylish apartment with access to a rooftop terrace. Features 2 bedrooms, 1 bathroom, and a modern kitchen.",
    price_per_month: 1500,
    location: "New York",
    address: "321 Skyline Dr, New York, NY 10002",
    bedrooms: 2,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Rooftop Terrace",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585903/pexels-piotr-arnoldes-7862031-6771585_mmyaqq.jpg",
    liked: false,
  },
  {
    id: 16,
    title: "Beach House with Private Pool",
    description:
      "A beautiful beach house with a private pool. Includes 4 bedrooms, 3 bathrooms, and a large terrace with ocean views.",
    price_per_month: 3000,
    location: "Miami",
    address: "753 Ocean Blvd, Miami, FL 33102",
    bedrooms: 4,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Swimming Pool",
      "Parking",
      "Terrace",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585902/pexels-introspectivedsgn-7475602_nygg9b.jpg",
    liked: false,
  },
  {
    id: 17,
    title: "Luxury Condo in Downtown",
    description:
      "A luxury condo located in downtown, featuring 3 bedrooms, 2 bathrooms, a balcony, and access to a private gym.",
    price_per_month: 2800,
    location: "Chicago",
    address: "951 Downtown Ave, Chicago, IL 60602",
    bedrooms: 3,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Gym",
      "Balcony",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585901/pexels-shelby-cox-285181262-13084298_oollui.jpg",
    liked: false,
  },
  {
    id: 18,
    title: "Historic Apartment with Modern Amenities",
    description:
      "A historic apartment with modern amenities, featuring 2 bedrooms, 2 bathrooms, and a fully equipped kitchen.",
    price_per_month: 1900,
    location: "Boston",
    address: "852 Heritage St, Boston, MA 02102",
    bedrooms: 2,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585900/pexels-introspectivedsgn-4061653_vxgcid.jpg",
    liked: false,
  },
  {
    id: 19,
    title: "Contemporary Loft with City Views",
    description:
      "A contemporary loft with breathtaking city views. Includes 1 bedroom, 1 bathroom, and a spacious living area.",
    price_per_month: 1600,
    location: "San Francisco",
    address: "654 Downtown Blvd, San Francisco, CA 94103",
    bedrooms: 1,
    amenities: ["WiFi", "Air Conditioning", "Washer", "Dryer", "Gym"],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585899/pexels-introspectivedsgn-7635144_khmqf6.jpg",
    liked: false,
  },
  {
    id: 20,
    title: "Elegant Townhouse with Private Garden",
    description:
      "An elegant townhouse with a private garden. Features 3 bedrooms, 2 bathrooms, and a spacious living room.",
    price_per_month: 2300,
    location: "Portland",
    address: "321 Garden Ln, Portland, OR 97202",
    bedrooms: 3,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Washer",
      "Dryer",
      "Parking",
      "Garden",
    ],
    image:
      "https://res.cloudinary.com/dzjz2ts9c/image/upload/v1722585898/pexels-the-ahnafpiash-10811220_heunfb.jpg",
    liked: false,
  },
];

export default PropertyData;
