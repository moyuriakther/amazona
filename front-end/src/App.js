import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreens from "./Screens/HomeScreens";
import ProductScreen from "./Screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Badge, Nav } from "react-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./Screens/CartScreen";
import SignInScreen from "./Screens/SignInScreen";

function App() {
  const { state } = useContext(Store);
  const {cart} = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column main-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                  <Link to="/cart" className="nav-link">
                     Cart
                      {
                        cart.cartItems.length > 0 && (
                          <Badge pill bg="danger">
                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                          </Badge>
                        )
                      }
                  </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<HomeScreens />} />
              <Route path="/signin" element={<SignInScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All Right Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
