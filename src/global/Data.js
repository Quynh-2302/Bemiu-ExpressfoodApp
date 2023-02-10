export const filterData = [{ name: "Breakfast", image: require('../assets/fastfood.png'), id: "0" },
{ name: "Lunch", image: require("../assets/burger.png"), id: "1" },
{ name: "Dinner", image: require("../assets/salads.png"), id: "2" },
{ name: "Dessert", image: require("../assets/hotdog.png"), id: "3" },
{ name: "Chinese", image: require("../assets/chinese.png"), id: "4" },
{ name: "Mexican", image: require("../assets/mexican.png"), id: "5" },
{ name: "Sea food", image: require("../assets/seafood.png"), id: "6" },
];




export const filterData2 = [{ name: "Breakfast", image: 'https://toplist.vn/images/800px/pho-274156.jpg', id: "0" },
{ name: "Lunch", image: 'https://toplist.vn/images/800px/bun-274159.jpg', id: "1" },
{ name: "Dinner", image: "https://toplist.vn/images/800px/banh-cuon-274178.jpg", id: "2" },
{ name: "Phở", image: "https://toplist.vn/images/800px/pho-274156.jpg", id: "3" },
{ name: "Cơm tấm", image: "https://toplist.vn/images/800px/com-tam-507258.jpg", id: "4" },
{ name: "Bánh xèo", image: "https://toplist.vn/images/800px/banh-xeo-274177.jpg", id: "5" },
{ name: "Bánh hỏi", image: "https://toplist.vn/images/800px/banh-khot-507262.jpg", id: "6" },
{ name: "Bánh bèo", image: "https://toplist.vn/images/800px/banh-beo-507292.jpg", id: "7" },
];





export const restaurantsData = [
  {
    restaurantName: "Hương Quê", farAway: "21.2",
    businessAddress: "22 Trần Cao Vân, Đà Nẵng", images: 'http://giadinh.mediacdn.vn/2017/photo-0-1487926021515.jpg',
    averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
    collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
    productData: [{ name: "Phở", price: 29.30, image: "http://giadinh.mediacdn.vn/2017/photo-0-1487926021515.jpg" },
    { name: "Bánh bèo", price: 50.80, image: "https://toplist.vn/images/800px/banh-beo-507292.jpg" }, {
      name: "Lẩu cù lao",
      price: 70, image: "https://toplist.vn/images/800px/lau-tha-507270.jpg"
    },
    ],
    id: 0
  },

  {
    restaurantName: "Mỳ quảng", farAway: "12.7", businessAddress: "22 Bessie street, Cape Town",
    images: 'https://toplist.vn/images/800px/mi-quang-507284.jpg',
    averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
    productData: [{ name: "Phở", price: 29.30, image: "http://giadinh.mediacdn.vn/2017/photo-0-1487926021515.jpg" },
    { name: "Bánh căn", price: 50.80, image: "https://toplist.vn/images/800px/banh-can-512824.jpg" },
    { name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png" },
    ],
    id: 1
  },

  // {
  //   restaurantName: "Steers", farAway: "5", businessAddress: " 17 Olivia Rd, Johannesburg",
  //   images: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
  //   coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
  //   discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
  //   productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
  //   { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
  //     name: "Chicken Burger",
  //     price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
  //   },
  //   ],
  //   id: 2
  // },

  // {
  //   restaurantName: "Roman Pizza", farAway: "7", businessAddress: " 15 Atlas Rd, Kempton Park",
  //   images: 'https://bukasapics.s3.us-east-2.amazonaws.com/pizza6.png',
  //   averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
  //   discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
  //   productData: [{ name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" },
  //   { name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png" }, {
  //     name: "Chicken Burger",
  //     price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
  //   },
  //   ],
  //   id: 3
  // },
]



export const productData = [{
  name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
  details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 0
},
{
  name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
  details: "McFeast features two 100% fresh beef burger patties that are hot", id: 1
},
{ name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png", details: "", id: 2 },

{
  name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
  details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 3
},
{
  name: "Big Mac", price: 70.20, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
  details: "McFeast features two 100% fresh beef burger patties that are hot", id: 4
},
{ name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png", details: "", id: 5 },

];


export const menuData = [

  { title: "BEEF", special: false, key: 0, },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES& CORN", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "HAPPY MEALS", special: false, key: 5 },
  { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "DESSERTS", special: false, key: 9 },
  { title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  { key: 4, title: 'SHARE BOX' },
  { key: 5, title: 'Happy Meals' },
  { key: 6, title: 'Fries' },
  { key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
]


export const menuDetailedData = [
  {
    meal: "Lẩu cá kèo",
    price: 70.20,
    image: "https://toplist.vn/images/800px/lau-tha-507270.jpg",
    details: "Lẩu cá kèo thơm ngon tròn vị đậm tình miền tây",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 },
      { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 },
      { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 },
      { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 },
      { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 },
      { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 },
      { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 },
      { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, 2, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, false, false, false],
    id: 0
  },

  {
    meal: "Bánh xèo",
    price: 5,
    image: "https://toplist.vn/images/800px/banh-xeo-274177.jpg",
    details: "Đảm bảo nóng giòn. Bánh nhà làm ngon như nhà làm",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1
  },

  {
    meal: "Bánh căn",
    price: 10,
    image: "https://toplist.vn/images/800px/banh-can-512824.jpg",
    details: "Nguyên liệu để làm bánh căn là gạo tẻ ngâm khoảng từ 6..",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2
  },

  {
    meal: "Bánh tráng cuốn thịt",
    price: 50.80,
    image: "https://toplist.vn/images/800px/banh-trang-cuon-thit-lon-2-dau-da-507286.jpg",
    details: "Thịt lợn được hấp để giữ vị thơm ngon, ngọt sắc đậm của thịt",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3
  },


  {

    meal: "Gỏi cuốn",
    price: 15,
    image: "https://toplist.vn/images/800px/goi-cuon-274169.jpg",
    details: "Gỏi cuốn ngon nhất là có nguyên một con tôm bên trong nhân.",

    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],

    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4
  },

  {
    meal: "Mì Quảng",
    price: 20,
    image: "https://toplist.vn/images/800px/mi-quang-507284.jpg",
    details: "Mì Quảng không phải là thứ mì nước, hay mì xào mà là thứ mì trộn...",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5
  },

];
