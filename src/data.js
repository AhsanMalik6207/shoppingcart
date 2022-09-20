const products = [
  {
    _id: "1",
    name: "Sony Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 89.99,
    rating: 4.5,
    numReviews: 12,
    quanity:1,
  },
  {
    _id: "2",
    name: "Head Phones",
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 599.99,
    rating: 4.0,
    numReviews: 8,
    quanity:1,
  },
  {
    _id: "3",
    name: "iPhone",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 929.99,
    rating: 3,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "4",
    name: "Sony Playstation 5 Controller",
    image:
      "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzdGF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 399.99,
    rating: 5,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "5",
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",

    price: 49.99,
    rating: 3.5,
    numReviews: 10,
    quanity:1,

  },
  {
    _id: "6",
    name: "Apple Watch",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 29.99,
    rating: 4,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "7",
    name: "Luxury Cat",
    image: "http://placekitten.com/g/600/300",
    price: 1000,
    rating: 4,
    numReviews: 12,
    quanity:1,

  },

  {
    _id: "8",
    name: "Other Cat",
    price: 1200,
    image: "http://placekitten.com/g/600/300",
    rating: 5,
    numReviews: 18, 
    quanity:1,
  },
  {
    _id: "9",
    name: "Samsung S21",
    price: 2500,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 18,
    quanity:1,

  },
  {
    _id: "10",
    name: "Samsung M21",
    price: 2300,
    image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 16,
    quanity:1,

  },
  {
    _id: "11",
    name: "Redmi 9",
    price: 3500,
    image: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
    rating: 4,
    numReviews: 20,
    quanity:1,

  },
  {
    _id: "12",
    name: "Iphone 12",
    price: 90500,
    image: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
    rating: 4,
    numReviews: 22,
    quanity:1,

  },
  {
    _id: "13",
    name: "Samsung S21",
    price: 2500,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 21,
    quanity:1,

  },
  {
    _id: "14",
    name: "Redmi 9",
    price: 3500,
    image: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
    rating: 4,
    numReviews: 23,
    quanity:1,

  },
  {
    _id: "15",
    name: "Samsung S21",
    price: 2500,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "16",
    name: "Iphone 12",
    price: 90500,
    image: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
    rating: 4,
    numReviews: 30,
    quanity:1,

  },
  {
    _id: "17",
    name: "Samsung S21",
    price: 2500,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "18",
    name: "Samsung S21",
    description: "black in color",
    price: 2500,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "19",
    name: "Samsung S21",
    price: 2500,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4,
    numReviews: 12,
    quanity:1,

  },
  {
    _id: "20",
    name: "Samsung S21",
    price: "2500",
    image: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
    rating: 4,
    numReviews: 12,
    quanity:1,

    
  },
  {
    _id: "21",
    name: "Samsung S21",
    price: "2500",
    image: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
    rating: 4,
    numReviews: 23,
    quanity:1,

    
  },
];

export default products;
