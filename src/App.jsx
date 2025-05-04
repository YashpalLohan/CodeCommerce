import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import LatestCollections from "./components/LatestCollections";
import BestSellers from "./components/BestSellers";
import PolicyFeatures from "./components/PolicyFeatures";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Faq from "./components/Faq";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="max-w-screen-xl mx-auto">
            <HeroBanner />
            <LatestCollections />
            <BestSellers />
            <PolicyFeatures />
            <Subscribe />
            <Faq />
          </main>
        }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;