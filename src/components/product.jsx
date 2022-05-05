import "./product.css";
import QuantityPicker from "./quantityPicker";
function Product(props) {
  return (
    <div className="product">

      <h3>{props.info.title}</h3>

      <div className="image">

      <img src={"/images/" + props.info.image}></img>
      </div>
     

      <label>{props.info.price}</label>
      {/* <label>8.00</label> */}
      <QuantityPicker></QuantityPicker>
    
   
      
    </div>
  );
};

export default Product;
