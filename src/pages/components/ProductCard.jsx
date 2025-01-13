import { NavLink } from "react-router";

function ProductCard ({product}) {
  return (
    <NavLink className="product-link" to={`/products/${product.id}`}>
    <div class="product-item">
      <div class="product-image">
        
        <img src={product.img[0]} />
      </div>
      <div class="product-name">
        <p>{product.name}</p>
      </div>
    </div>
    </NavLink>
);
}

export default ProductCard;