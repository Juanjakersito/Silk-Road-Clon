import Product from "./Product";
import "./Products.css";
import { productPropsType } from "../../Types/productPropsType";

function Products({ products }:{products:Array<productPropsType>}) {

  return (
    <>
      {products.length == 0 ? (
        <h3 style={{ color: "red"}}>No se encontraron productos</h3>
      ) : (
        ""
      )}

      <div className="products">
        {products.map((product) => {
          return <Product key={product.id} productProps={product} />;
        })}
      </div>
    </>
  );
}

export default Products;
