import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import LatestCollections from "./components/LatestCollections";
import BestSellers from "./components/BestSellers";
import PolicyFeatures from "./components/PolicyFeatures";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ProductDetail from "./components/ProductDetail";
import { ProductProvider } from "./components/ProductContext";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./components/Checkout";
import LoginSignup from "./components/LoginSignup";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import BlogDetail from "./components/BlogDetail";

function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <HeroBanner />
      <LatestCollections />
      <BestSellers />
      <PolicyFeatures />
      <Subscribe />
      <TestimonialCarousel />
      <Faq />
    </main>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={
              <main className="max-w-screen-xl mx-auto">
                <Collection />
                <PolicyFeatures />
                <Subscribe />
                <TestimonialCarousel />
              </main>
            }
            />
            <Route
              path="/about"
              element={
                <main className="max-w-screen-xl mx-auto">
                  <About />
                  <PolicyFeatures />
                  <Subscribe />
                  <Faq />
                </main>
              }
            />
            <Route
              path="/contact"
              element={
                <main className="max-w-screen-xl mx-auto">
                  <Contact />
                  <PolicyFeatures />
                  <Subscribe />
                </main>
              }
            />
            <Route path="/blog" element={
              <main className="max-w-screen-xl mx-auto">
                <Blog />
                <TestimonialCarousel />
                <Subscribe />
              </main>
            } />
            <Route path="/blog/:id" element={
              <main className="max-w-screen-xl mx-auto">
                <BlogDetail />
                <TestimonialCarousel />
                <Subscribe />
              </main>
            } />

            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={
              <main className="max-w-screen-xl mx-auto">
                <Cart />
                <PolicyFeatures />
                <Subscribe />
                <Faq />
              </main>} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;