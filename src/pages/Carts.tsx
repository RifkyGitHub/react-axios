import { useState, useEffect } from "react";
import { fakeStoreAPI } from "../components/axios";

function Carts() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await fakeStoreAPI.get("/carts");
        setCarts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCarts();
  }, []);

  return (
    <div>
      <h1>Welcome to my Carts Page!!!</h1>
      {carts.map((carts, index) => {
        return (
          <div key={index}>
            <i>"{carts.date}"</i>
          </div>
        );
      })}
    </div>
  );
}

export default Carts;
