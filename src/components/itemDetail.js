import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// useState can hold information that we are getting from the API
// useEffects runs the fetch call when our component mounts

function Item(match) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
    console.log(item);
  };

  const navstyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      {console.log(item)}
      <h1> {item.name}</h1>
      <h2>
        <button className="btn btn-primary btn-block">
          <Link style={navstyle} to="/shop">
            <li>Shop</li>
          </Link>
        </button>
      </h2>
      {<img src={item.images.information} alt="" />}
    </div>
  );
}

export default Item;
