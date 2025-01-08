import "../style/products.css";
import Badge from "react-bootstrap/Badge";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductTile(props) {
  return (
    <div className="product-Tile" style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <Badge style={{ position: "absolute", top: "10px", right: "10px" }}>
          {props.data.rating.rate}
        </Badge>
        <img src={props.data.image} alt="" />
      </div>
      {/* </div><div className="product-Details"> */}
      <p className="prodcut-name">{props.data.title}</p>
      <div>
        <p className="prodcut-price">{`$${props.data.price}`}</p>
      </div>
      <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>
        <ButtonGroup>
          <Link to={`/Products/${props.data.id}`}>
            <Button variant="info">View</Button>
          </Link>
          <Button variant="warning">Add to Cart</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
export default ProductTile;
