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
      console.log("tentativa de login");
      props.setUser({ ...result.data });
      console.log("pos setUser Props");
      localStorage.setItem("loggedInUser", JSON.stringify({ ...result.data }));
      history.push(`/establishment/profile/${result.data.userObj._id}`);
      console.log(result.data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div style={{border: "1rem"}}>
      <h1 className="divbtnLogin titleFormat">Login</h1>
      <hr className="hrWidthLoginForm"></hr>
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
