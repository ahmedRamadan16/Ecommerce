import { AiOutlineHeart } from "react-icons/ai";
function ProductCard({ img, title, price }) {
  return (
    <div className="product-card">
      <div className="images">
        <img src={img} alt="" />
        <div className="view-btn">
          <button className="btn ">Quick view</button>
        </div>
      </div>
      <div className="info">
        <h2>
          {title}
        </h2>
        <AiOutlineHeart />
      </div>
      <span>
        {price}
      </span>
    </div>
  );
}

export default ProductCard;
