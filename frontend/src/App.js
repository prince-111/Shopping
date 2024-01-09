import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tshirt from "./page/Tshirt";
import Home from "./Home";
import Hoodies from "./page/Hoodies";
import Shirts from "./page/Shirts";
import BottomWears from "./page/BottomWears";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const App = () => {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/tshirts" element={<Tshirt />}/>
          <Route path="/hoodies" element={<Hoodies/>}/>
          <Route path="/shirts" element={<Shirts/>}/>
          <Route path="/BottomWears" element={<BottomWears/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      <Footer/>
    </>
  );
};

export default App;
