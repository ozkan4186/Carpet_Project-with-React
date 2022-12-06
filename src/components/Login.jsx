import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <header>
      <div className="d-flex justify-content-between  flex-lg-row flex-md-column">
        <img src={logo} alt="" />
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;üyeliksiz ödeme&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;üyeliksiz ödeme&nbsp;
          </span>
        </button>
      </div>
    </header>
  );
};

export default Login;
