import React from "react";
import "./Start.scss";

export type StartProps = {};

const Start: React.FC<StartProps> = ({}) => {
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
