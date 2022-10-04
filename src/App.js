import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage1 from "./pages/Home/HomePage1.jsx";
import HomePage2 from "./pages/Home/HomePage2.jsx";
import HomePage3 from "./pages/Home/HomePage3.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Features from "./pages/Features/Features.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import TopNavbar from "./components/TopNavbar/TopNavbar.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/homepage2" element={<HomePage2 />} />
          <Route path="/homepage3" element={<HomePage3 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
