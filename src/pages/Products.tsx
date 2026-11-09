import { useState, useEffect } from "react";
import { fakeStoreAPI } from "../components/axios";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fakeStoreAPI.get("/products");
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Welcome to my Products Page!!!</h1>
      {products.map((products, index) => {
        return (
          <div key={index}>
            <i>"{products.title}"</i>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
