import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ContactPage from "./components/Pages/ContactPage";
import AboutPage from "./components/AboutPage";
import Products from "./components/Products";
import Services from "./components/Services";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-[100% + 20%]">
              <Hero />
              <Services />
              <About />
              <Products />
              <Blog />
              <Newsletter />
            </div>
          }
        />
        <Route path="/contacto" element={<ContactPage />} />
        <Route
          path="/nosotros"
          element={
            <>
              <AboutPage />
            </>
          }
        />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;
