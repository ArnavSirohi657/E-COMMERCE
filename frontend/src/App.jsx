import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./LandingPage/Home";
import Sell from "./LandingPage/Sell";
import BestSellers from "./LandingPage/BestSellers";
import TodayDeal from "./LandingPage/TodayDeal";
import Mobiles from "./LandingPage/Mobiles";
import CustomerService from "./LandingPage/CustomerService";
import Fashion from "./LandingPage/Fashion";
import Electronic from "./LandingPage/Electronic";
import HomeAndKitchen from "./LandingPage/HomeAndKitchen";
import CarAndMotorbike from "./LandingPage/CarAndMotorbike";
import Computer from "./LandingPage/Computer";
import Book from "./LandingPage/Book";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import TopBar from "./NavBar/TopBar";
import SignIn from "./LandingPage/SignIn";
import SearchResults from "./Display/SearchResults.jsx";
import ProductDetail from "./Display/ProductDetail.jsx";
import FakeCheckout from "./Display/FakeCheckout.jsx";
import { CartProvider } from "./context/CartContext";
import CartPage from "./context/CartPage.jsx";
function App() {
  return (
    // ✅ Wrap everything inside CartProvider
    <CartProvider>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/bestsellers" element={<BestSellers />} />
          <Route path="/todaydeal" element={<TodayDeal />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/homeandkitchen" element={<HomeAndKitchen />} />
          <Route path="/carandmotorbike" element={<CarAndMotorbike />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/book" element={<Book />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout/:orderId/:amount" element={<FakeCheckout />} />
          <Route path="/cart" element={<CartPage />} />  // ✅ Add this

        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;