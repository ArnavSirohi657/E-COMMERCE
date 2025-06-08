
import {BrowserRouter,Routes,Route} from "react-router-dom";
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

function App() {


  return (
    <>
    <TopBar/>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/bestsellers" element={<BestSellers/>}/>
      <Route path="/todaydeal" element={<TodayDeal/>}/>
      <Route path="/mobiles" element={<Mobiles/>}/>
      <Route path="/customerservice" element={<CustomerService/>}/>
      <Route path="/fashion" element={<Fashion/>}/>
      <Route path="/electronic" element={<Electronic/>}/>
      <Route path="/homeandkitchen" element={<HomeAndKitchen/>}/>
      <Route path="/carandmotorbike" element={<CarAndMotorbike/>}/>
      <Route path="/computer" element={<Computer/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/signin" element={<SignIn/>}/>

    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
