import React from "react";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div className="login">
      <div>
        <label htmlFor="email" className="flex-input">
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password" className="flex-input">
          Constraseña
          <input type="password" name="password" id="password" />
        </label>
      </div>
      <input type="submit" value="Iniciar Secion" />
    </div>
  );
};

export default Login;
