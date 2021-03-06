import React, { useState } from "react";
import ParticlesComponent from "../ParticlesComponent";
import "../Authorize/Authorize.css";
import LogoComponent from "../Authorize/LogoComponent";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

function SignUpComponent() {
  const location = useLocation();
  const { home } = location.state;
  console.log(home);
  const history = useHistory();
  const [regDetails, setDetails] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const navigationHandler = () =>
    history.push({ pathname: "/signIn", state: { home: false } });

  return (
    <>
      <ParticlesComponent />
      <div className="d-flex align-items-center min-vh-100 text-center">
        <div className="container shadow">
          <div className="row">
            <div className="col">
              <LogoComponent
                login={false}
                navigation={navigationHandler}
                isHome={home}
              />
            </div>
            <div className="col">
              <div className={"card box shadow " + (!home ? "fadeIn" : "")}>
                <form onSubmit={submitHandler}>
                  <div className="form-inner">
                    <h1 className="h1">SignUp</h1>
                    <div className="form-group mt-4 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) =>
                          setDetails({
                            ...regDetails,
                            username: e.target.value,
                          })
                        }
                        placeholder="Username"
                        value={regDetails.username}
                      />
                    </div>
                    <div className="form-group mt-3 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) =>
                          setDetails({ ...regDetails, name: e.target.value })
                        }
                        placeholder="Name"
                        value={regDetails.name}
                      />
                    </div>
                    <div className="form-group mt-3 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                          setDetails({ ...regDetails, email: e.target.value })
                        }
                        placeholder="Email Address"
                        value={regDetails.email}
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
                            ...regDetails,
                            password: e.target.value,
                          })
                        }
                        placeholder="Password"
                        value={regDetails.password}
                      />
                    </div>
                  </div>
                  <input
                    className="button btn rounded-pill mt-4"
                    type="submit"
                    value="SignUp"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpComponent;
