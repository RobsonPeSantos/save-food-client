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
    <div>
      <h1 className="divbtnLogin titleFormat">Signup</h1>
      <hr className="hrWidthLoginForm" ></hr>
      <AuthForm
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Sign up"
      />
    </div>
  );
};

export default Signup;
