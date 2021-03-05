import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// useState can hold information that we are getting from the API
// useEffects runs the fetch call when our component mounts

function Shop() {
  const itemStyle = {
    color: "Black",
    textDecoration: "none",
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/upcoming/get`
    );
    const datas = await data.json();
    console.log(datas);
    setItems(datas.data);
  };

  return (
    <div>
      {items.map((item) => (
        <h4 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>
            <span style={itemStyle}>{item.item.name}</span>
          </Link>

          {/* when we link something, we get access to our props in that link? */}
        </h4>
      ))}
    </div>
  );
}

export default Shop;
