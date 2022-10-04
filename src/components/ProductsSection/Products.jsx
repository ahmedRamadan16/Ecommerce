import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../product-data";
import { Col, Row, Container } from "react-bootstrap";

function Products() {
  const [isFilterOpen, SetIsFilterOpen] = useState(false);
  const [isSerachOpen, SetIsSearchOpen] = useState(false);
  const [currentProducts, SetCurrentProducts] = useState("all");
  const handleProducts = e => {
    let productLinks = document.querySelectorAll(".product-links li");
    productLinks.forEach(link => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
    SetCurrentProducts(e.target.dataset.type);
  };
  return (
    <div className="products">
      <Container>
        <h2>Product Overview</h2>
        <div className="search-filter-section">
          <Row>
            <Col lg="8" md="12">
              <ul className="list-unstyled product-links">
                <li
                  onClick={e => handleProducts(e)}
                  className="active"
                  data-type="all"
                >
                  All Products
                </li>
                <li onClick={e => handleProducts(e)} data-type="women">
                  Women
                </li>
                <li onClick={e => handleProducts(e)} data-type="men">
                  Men
                </li>
                <li onClick={e => handleProducts(e)} data-type="bag">
                  Bag
                </li>
                <li onClick={e => handleProducts(e)} data-type="shoes">
                  Shoes
                </li>
                <li onClick={e => handleProducts(e)} data-type="watches">
                  Watches
                </li>
              </ul>
            </Col>
            <Col lg="4" md="12">
              <div className="icons-area">
                <button
                  onClick={() => SetIsFilterOpen(prev => !prev)}
                  className="btn"
                >
                  <BsFilter className="filter-icon" />
                  <span>Filter</span>
                </button>
                <button
                  className="btn"
                  onClick={() => SetIsSearchOpen(prev => !prev)}
                >
                  <AiOutlineSearch className="filter-icon" />
                  <span>Search</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className={`filter-area ${isFilterOpen
            ? "open-filter"
            : "close-filter"}`}
        >
          <div className="filter-content">
            <Row>
              <Col lg="3" md="3" sm="12">
                <div className="box">
                  <h2>Sort By</h2>
                  <ul className="list-unstyled">
                    <li>Default</li>
                    <li>Popularity</li>
                    <li>Average rating</li>
                    <li>Newness</li>
                    <li>Price: Low to High</li>
                    <li>Price: High to Low</li>
                  </ul>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="box">
                  <h2>Price</h2>
                  <ul className="list-unstyled">
                    <li>All</li>
                    <li>$0.00 -$50.00</li>
                    <li>$50.00 -$100.00</li>
                    <li>$100.00 -$150.00</li>
                    <li>$200.00 -$250.00</li>
                    <li>$250.00+</li>
                  </ul>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="box">
                  <h2>Color</h2>
                  <ul className="list-unstyled colors">
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Grey</li>
                    <li>Green</li>
                    <li>Red</li>
                    <li>White</li>
                  </ul>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="box">
                  <h2>Tags</h2>
                  <ul className="list-unstyled tags">
                    <li>Fashian</li>
                    <li>Lifestyle</li>
                    <li>Denim</li>
                    <li>Streetstyle</li>
                    <li>Crafts</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div
          className={`search-area ${isSerachOpen
            ? "open-search"
            : "close-search"}`}
        >
          <div className="search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="product-container">
          <Row>
            {products.map(({ img, title, price, type }) => {
              let regex = new RegExp(`(\\s|^)${currentProducts}`, "ig");
              if (type.search(regex) !== -1) {
                return (
                  <Col key={Math.random()} lg="3" md="6" sm="12">
                    <ProductCard img={img} title={title} price={price} />
                  </Col>
                );
              }
            })}
          </Row>
          <button className="btn load-more ms-auto me-auto d-block text-uppercase">
            LoadMore
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Products;
