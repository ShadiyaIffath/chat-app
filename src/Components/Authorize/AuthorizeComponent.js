import React from "react";
import "./Authorize.css";

const AuthorizeComponent = ({ login }) => {
  const image =
    window.location.origin + "/Assets/undraw_Having_fun_re_vj4h.svg";

  return (
    <div className="logo-authorize">
      <img src={image} alt="logo" className="logo-img" />
      <p className="p">{login ? "Oops! No account?" : "Already a Member?"}</p>
      <button className="btn reg-btn rounded-pill">
        {login ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default AuthorizeComponent;
