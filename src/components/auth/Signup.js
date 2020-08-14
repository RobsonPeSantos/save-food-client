import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

import AuthForm from "./AuthForm";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({ username: "", password: "" });

  async function handleSubmit(data) {
    try {
      // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
      const result = await authApi.post("/user/signup", data);

      // Redirecionar para lista Login
      history.push("/user/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="form-container-signup" style={{border: "1rem"}}>
    <div className="signup-box">
      <h1>Signup</h1>
      <hr className="hrWidthLoginForm" />
      <AuthForm
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Sign up"
      />
      </div>
      <div>
        <img src="https://res.cloudinary.com/savefood/image/upload/v1596761593/save-food/SignupBG.png" alt="" style={{width: 150, margin: 10}} />
        </div>
    </div>
    
  );
};

export default Signup;
