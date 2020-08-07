import React from "react";

const AuthForm = (props) => {
  function handleChange(event) {
    props.setUser({
      ...props.user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.user);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="inputLabelLogin">Username</label>
        <input
          type="text"
          className="form-control form-control-md border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor inputLogin"
          id="authUsernameField"
          name="username"
          onChange={handleChange}
          value={props.user.username}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="inputLabelLogin">Password</label>
        <input
          type="password"
<<<<<<< HEAD
          className="form-control-md col-5 border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor inputLogin"
=======
          className="form-control form-control-md border-top-0 border-right-0 border-left-0 rounded-0 divLinesColor inputLogin"
>>>>>>> fab09e74aeeb42c8d4ed1784f18fcd18fc752dd2
          name="password"
          id="authPasswordField"
          onChange={handleChange}
          value={props.user.password}
        />
      </div>

      <div className=" divbtnLogin ">
      <button type="submit" className="btn btn-lg btnLogin" style={{color: "white"}}>
      {props.buttonText}
      </button>
      </div>
    </form>
  );
};

export default AuthForm;
