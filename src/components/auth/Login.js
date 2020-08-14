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
   
      props.setUser({ ...result.data });
   
      localStorage.setItem("loggedInUser", JSON.stringify({ ...result.data }));
      history.push(`/establishment/profile/${result.data.userObj._id}`);
      console.log(result.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="login-background">
      <div className="form-container" style={{border: "1rem" }}>
      <div className="login-box">
      <h1 className="">Login</h1>
      <hr className="hrWidthLoginForm"></hr>
      <AuthForm
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Login"
      />
      </div>
    
    </div>
    </div>

  );
};

export default Login;
