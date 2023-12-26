import React from "react";
import '../stylesheets/botonClear.css'

const BtnClear = (props)=>(
  <div className="btn-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BtnClear;