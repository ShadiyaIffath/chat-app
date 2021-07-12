import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import "../Authorize/Authorize.css";
import LogoComponent from "../Authorize/LogoComponent";
import ParticlesComponent from "../ParticlesComponent";

function SigninComponent() {
  const location = useLocation();
  const { home } = location.state;
  const history = useHistory();
  const [loginDetails, setDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    history.push({ pathname: "/home" });
  };

  const navigationHandler = () =>
    history.push({ pathname: "/signUp", state: { home: false } });

  return (
    <>
      <ParticlesComponent />
      <div className="d-flex align-items-center min-vh-100 text-center">
        <div className="container shadow">
          <div className="row">
            <div className="col">
              <div className={"card box shadow " + (!home ? "fadeIn" : "")}>
                <form onSubmit={submitHandler}>
                  <div className="form-inner">
                    <h1 className="h1">SignIn</h1>
                    <div className="form-group mt-4 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                          setDetails({ ...loginDetails, email: e.target.value })
                        }
                        placeholder="Email Address"
                        value={loginDetails.email}
                      />
                    </div>
                    <div className="form-group mt-3 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                          setDetails({
                            ...loginDetails,
                            password: e.target.value,
                          })
                        }
                        placeholder="Password"
                        value={loginDetails.password}
                      />
                    </div>
                  </div>
                  <p className="p mt-2">Forgot your password?</p>
                  <input
                    className="button btn rounded-pill mt-1"
                    type="submit"
                    value="SignIn"
                  />
                </form>
              </div>
            </div>
            <div className="col">
              <LogoComponent
                login={true}
                navigation={navigationHandler}
                isHome={home}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninComponent;
