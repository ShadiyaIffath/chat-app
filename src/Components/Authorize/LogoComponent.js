import "./Authorize.css";

const LogoComponent = ({ login, navigation, isHome }) => {
  console.log(isHome);
  const image =
    window.location.origin + "/Assets/undraw_Having_fun_re_vj4h.svg";

  return (
    <div
      className={
        "logo-authorize " + (!isHome ? (login ? "sign-in" : "sign-up") : "")
      }
    >
      <img src={image} alt="logo" className="logo-img" />
      <p className="p">{login ? "Oops! No account?" : "Already a Member?"}</p>
      <button className="btn reg-btn rounded-pill" onClick={navigation}>
        {login ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default LogoComponent;
