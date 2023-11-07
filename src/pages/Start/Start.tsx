import React from "react";
import "./Start.scss";

const Start: React.FC = () => {
  return (
    <div className="start">
      <h1>BIENVENIDO</h1>
      <div>
        <button>registrarse</button>
        <button>iniciar sesion</button>
      </div>
    </div>
  );
};

export default Start;
