import React, { useState, useEffect } from "react";

import ApiService from "../services/apiServices.js";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    ApiService.historicalPricingOfAsset().then(
      (response) => response.json()
      .then((response) => {
          setContent(response.price)
          console.log(response)
      }),
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;