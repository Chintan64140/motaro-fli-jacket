import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Files/Layout";
import Landing from "./Files/Pages/landing";
// import Layout from "./Files/Layout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./Files/Context/CartContext";
import { ConfirmedOrderProvider } from "./Files/Context/ConfimedorderContext";
import { OrderProvider } from "./Files/Context/OrderContext";
import Cartpage from "./Files/Pages/Cart";
import ProductPage from "./Files/Pages/Product-details";
import AddressPage from "./Files/Pages/address";
import OrderConfirmPage from "./Files/Pages/Order/confirmed";
import Allorders from "./Files/Pages/All-orders";
import AboutUs from "./Files/Pages/privacy/aboutus";
import PrivacyPolicy from "./Files/Pages/privacy";
import TermsOfService from "./Files/Pages/privacy/terms";
import ReturnRefundPolicy from "./Files/Pages/privacy/return";
import ShippingPolicy from "./Files/Pages/privacy/shipping";
import ContactUs from "./Files/Pages/privacy/contactus";
import Payment from "./Files/Pages/payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <ConfirmedOrderProvider>
        <OrderProvider>
          <Layout>
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              // transition={'Slide'}
            />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/prod" element={<ProductPage />} />
              <Route path="/cart" element={<Cartpage />} />
              
              <Route path="/cart/address" element={<AddressPage />} />
              <Route path="/cart/payment" element={<Payment />} />

              <Route path="/order-confirmed" element={<OrderConfirmPage />} />
              <Route path="/orders" element={<Allorders />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-condition" element={<TermsOfService />} />
              <Route path="/return-policy" element={<ReturnRefundPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </Layout>
        </OrderProvider>
      </ConfirmedOrderProvider>
    </CartProvider>
    // <Layout>
    //   <Landing />
    // </Layout>
  );
}

export default App;
