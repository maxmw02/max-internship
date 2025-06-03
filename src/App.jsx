import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const [nftData, setNftData] = useState([]);

  // async function fetchApi() {
  //   try {
  //     const { data } = await axios.get(
  //       `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
  //     );
  //     setNftData(data || []);
  //     console.log(nftData);
  //   } catch (error) {
  //     console.error("Error fetching api:", error);
  //     setNftData([]);
  //   }
  // }

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author" element={<Author />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
