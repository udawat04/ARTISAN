import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import Chikankari from "./components/pages/Chikankari";
import Madhubani from "./components/pages/Madhubani";
import IncenseSticks from "./components/pages/IncenseSticks";
import Payment from "./components/pages/Payment";
import ShoppingCart from "./components/pages/ShoppingCart";
import OrderPlace from "./components/pages/OrderPlace";
import Category from "./components/Module/Category";
import ViewProduct from "./components/pages/ProductBySubcategory";
import { AuthProvider, useAuth } from "./context/AuthContext";

const ProtectedRoute = (props) => {
   const token = localStorage.getItem("accessToken");
   const storedUser = localStorage.getItem("user");
   let flag = false;
   if (token && storedUser) {
     try {
       flag = true
     } catch (error) {
       console.error("Failed to parse user from local storage", error);
     }
   }

  return flag ? props.children : <Navigate to="/login" />;
};

const AuthRoute = (props) => {
  const  location = useLocation();
  const { isAuthenticate } = useAuth();
  console.log("check it is true from app js login", isAuthenticate, location.pathname);
  return isAuthenticate ? <Navigate to="/" /> : props.children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/wishlist" element={<Wishlist />} />
            {/* </Route> */}

            <Route path="/products" element={<Products />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Madhubani" element={<Madhubani />} />
            <Route path="/subcat/products/:id" element={<ViewProduct />} />
            <Route path="/Chikankari/:id" element={<Chikankari />} />
            <Route path="/IncenseSticks" element={<IncenseSticks />} />
            <Route
              path="/ShoppingCart"
              element={
                <ProtectedRoute>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/OrderPlace" element={<OrderPlace />} />
            <Route path="/category" element={<Category />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
