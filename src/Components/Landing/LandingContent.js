import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function LandingContent() {
  const image =
    window.location.origin + "/Assets/undraw_Having_fun_re_vj4h.svg";

  return (
    <>
      <h1 className="h1">Welcome to IChat</h1>
      <img src={image} alt="logo" className="logo-img" />
      <h3 className="h3">We connect you with your friends</h3>
      <div className="row btn-row">
        <Link
          className="col btn rounded-pill btn-lg login-btn"
          to={{
            pathname: "/signIn",
            state: {
              home: true,
            },
          }}
        >
          Sign in
        </Link>
        <Link
          className="col btn rounded-pill btn-lg reg-btn"
          to={{
            pathname: "/signUp",
            state: {
              home: true,
            },
          }}
        >
          Create Account
        </Link>
      </div>
    </>
  );
}

export default LandingContent;
