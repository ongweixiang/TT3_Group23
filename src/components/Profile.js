import React, { useState, useRef, useEffect } from "react";

function Profile(props) {
  const loginStyle = {
    color: "black",
    textDecoration: "none",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login?",
      {
        method: "POST",
        headers: {
          "x-api-key": "dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu",
        },
        body: JSON.stringify({
          username: "Group23",
          password: "M4suvRLLksbz4rG",
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return (
          <div>
            <h1>Profile Page</h1>
          </div>
        );
        console.log(response);
        console.log(response.nric);
        console.log(response.firstName);
        console.log(response.lastName);
      });
  };

  //   const getUserInformation = () => {
  //     const username = props.location.state.username;
  //     const password = props.location.state.password;
  //   };

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
}

export default Profile;
