import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: "Moyuri",
      email: "akthermoyuri@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Anik",
      email: "moyuriakther97@gmail.com",
      password: bcrypt.hashSync("1234567"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Nike Slim Shirt",
      slug: "Nike-Slim-Shirt",
      price: 120,
      rating: 4.5,
      countInStock: 0,
      numReviews: 10,
      category: "Shirts",
      brand: "Nike",
      description: "high quality product",
      image: "/images/p1.jpg",
    },
    {
      // _id: '2',
      name: "Adidas Fit Shirt",
      slug: "Adidas-Fit-Shirt",
      price: 180,
      rating: 4.4,
      countInStock: 10,
      numReviews: 15,
      category: "Shirts",
      brand: "Adidas",
      description: "high quality product",
      image: "/images/p2.jpg",
    },
    {
      // _id: '3',
      name: "Nike Slim Pant",
      slug: "Nike-Slim-Pant",
      price: 140,
      rating: 4.9,
      countInStock: 10,
      numReviews: 11,
      category: "Pants",
      brand: "Nike",
      description: "high quality product",
      image: "/images/p3.jpg",
    },
    {
      // _id: '4',
      name: "Nike Bright Pant",
      slug: "Nike-Bright-Pant",
      price: 220,
      rating: 4.5,
      countInStock: 10,
      numReviews: 8,
      category: "Shirts",
      brand: "Nike",
      description: "high quality product",
      image: "/images/p4.jpg",
    },
    // {
    //     _id: '5',
    //     name: 'Nike Slim Shirt',
    //     price: 120,
    //     rating: 4.5,
    //     countInStock: 10,
    //     numReviews: 10,
    //     category: 'Shirts',
    //     brand: 'Nike',
    //     description: 'high quality product',
    //     image: 'https://m.media-amazon.com/images/I/611lq9MXqQL._AC_UX522_.jpg'
    // },
    // {
    //     _id: '6',
    //     name: 'Nike White Shirt',
    //     price: 160,
    //     rating: 4.7,
    //     countInStock: 10,
    //     numReviews: 13,
    //     category: 'Shirts',
    //     brand: 'Nike',
    //     description: 'high quality product',
    //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40W-s7Rx0pCL5Yp8AAc2FqLoYBG3bWV77NQ&usqp=CAU'
    // }
  ],
};
export default data;
