import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  AOS.init();

  AOS.init({
    disable: false, 
    startEvent: "DOMContentLoaded", 
    initClassName: "aos-init", 
    animatedClassName: "aos-animate", 
    useClassNames: false, 
    disableMutationObserver: false,


    offset: 120, 
    delay: 0, 
    duration: 400,
    easing: "ease", 
    once: false, 
    mirror: false, 
    anchorPlacement: "top-bottom", 
  });
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:nftId" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
