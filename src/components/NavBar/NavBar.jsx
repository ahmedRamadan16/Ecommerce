import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineClose
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function NavBar() {
  const [isScroll, SetisScroll] = useState(false);
  const [showSearch, SetShowSearch] = useState(false);
  useEffect(() => {
    const checkScroll = function() {
      window.onscroll = function() {
        if (window.scrollY > 50) {
          SetisScroll(true);
        } else {
          SetisScroll(false);
        }
      };
    };
    checkScroll();
  }, []);
  const handleClick = () => {
    SetShowSearch(true);
  };
  return (
    <Navbar expand="lg" className={`fixed-top ${isScroll ? "scrolled" : ""} `}>
      <Container>
        <Navbar.Brand href="#home" className="me-5">
          <h2>
            <span>coza</span>STORE
          </h2>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Home"
              className="active"
              id="basic-nav-dropdown"
            >
              <Link to="/" className="dropdown-item">
                HomePage1
              </Link>
              <Link to="/homepage2" className="dropdown-item">
                HomePage2
              </Link>
              <Link to="/homepage3" className="dropdown-item">
                homepage3
              </Link>
            </NavDropdown>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/features" className="nav-link">
              Features
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="icons">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="nav-icons">
            <div className="search" onClick={handleClick}>
              <AiOutlineSearch />
            </div>
            <div className="car">
              <BsFillCartFill />
            </div>
            <div className="heart">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </Container>
      <div className={`search-box ${showSearch ? "show" : "hide"}`}>
        <div className="box">
          <AiOutlineClose onClick={() => SetShowSearch(false)} />
          <div className="search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search.." />
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
