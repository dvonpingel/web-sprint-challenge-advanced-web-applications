import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState(initialValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        push("/bubble");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {});

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username.."
          ></input>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password.."
          ></input>
          <button>Log In</button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.

//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.

//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
