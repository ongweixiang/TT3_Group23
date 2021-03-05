import axios from "axios"

const API_URL= "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/"

class AuthService{
    login(username, password){
        return axios
          .post(API_URL + "login", {
              username: username,
              password: password
          })
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("accountKey", JSON.stringify(response.data));
            }
            return response.data;
          });
      };

      alt_login(username, password) {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'X-x-api-key': 'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu'},
            body: JSON.stringify({ 
                username: username, 
                password: password
            })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }
}

export default new AuthService();