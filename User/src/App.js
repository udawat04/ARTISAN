import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Layouts from "./components/Layout/Layouts";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Wishlist from "./components/Module/Wishlist";
import Products from "./components/Module/Products";
import ProductDetail from "./components/pages/ProductDetail";
import ContactUs from "./components/pages/ContactUs";
// import Ajrakh from "./components/pages/ProductBySubcategory";
import Chikankari from "./components/pages/Chikankari";
import Madhubani from "./components/pages/Madhubani";
import IncenseSticks from "./components/pages/IncenseSticks";
import Payment from "./components/pages/Payment";
import ShoppingCart from "./components/pages/ShoppingCart";
import OrderPlace from "./components/pages/OrderPlace";
import Category from "./components/Module/Category";
import ViewProduct from "./components/pages/ProductBySubcategory";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = (props) => {
  debugger;
  const { isAuthenticate } = useAuth();
  console.log("check it is true form app js",isAuthenticate)
  return isAuthenticate ? props.children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productdetail" element={<ProductDetail />} />
          {/* <Route path="/product/:productId" component={ProductDetail} /> */}
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Madhubani" element={<Madhubani />} />
          <Route exact path="/subcat/products/:id" element={<ViewProduct />} />
          <Route exact path="/Chikankari/:id" element={<Chikankari />} />
          <Route exact path="/IncenseSticks" element={<IncenseSticks />} />
          <Route
            exact
            path="/ShoppingCart"
            element={
              <ProtectedRoute>
                <ShoppingCart />
              </ProtectedRoute>
            }
          />
          <Route exact path="/Payment" element={<Payment />} />
          <Route exact path="/OrderPlace" element={<OrderPlace />} />
          <Route exact path="/category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
