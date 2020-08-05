import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authApi from "../../apis/auth";

import AuthForm from "./AuthForm";

const Login = (props) => {
  const history = useHistory();
  const [user, setUser] = useState({ username: "", password: "" });

  async function handleSubmit(data) {
    try {
      const result = await authApi.post("/user/login", data);
      console.log("tentativa de login")
      props.setUser({ ...result.data });
      console.log("pos setUser Props")
      localStorage.setItem("loggedInUser", JSON.stringify({ ...result.data }));
      history.push("/offers");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <hr></hr>
      <AuthForm
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
