import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { Store } from "../Store";
import axios from "axios";

const Product = ({ product }) => {
  const { slug, image, name, price, rating, numReviews } = product;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const handleAddToCart = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
  };
  return (
    <Card className="product">
      <Link to={`/product/${slug}`}>
        <img className="card-img-top" src={image} alt={name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${slug}`}>
          <Card.Title>{name}</Card.Title>
          <Rating rating={rating} numReviews={numReviews} />
        </Link>
        <Card.Text>${price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => handleAddToCart(product)} id="main-btn">
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
