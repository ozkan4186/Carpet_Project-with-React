import React from "react";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  return (
    <header>
      <div className="d-flex justify-content-between  flex-lg-row flex-md-column flex-sm-column">
        <img
          style={{
            maxWidth: "300px",
            textAlign: "center",
            margin: "0 auto",
          }}
          src={logo}
          alt=""
        />
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;üyeliksiz ödeme&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;üyeliksiz ödeme&nbsp;
          </span>
        </button>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-5 mt-5 ">
        <form
          action=""
          style={{
            backgroundColor: "#eee",
            padding: "2rem",
            borderRadius: "1rem",
            width: "35rem",
          }}
        >
          <h1>Giriş</h1>
          <div className="d-flex justify-content-between  align-items-center  " style={{
            width:"400px"
          }} >
            <div>
              <svg width="2.5em" height="2.5em" viewBox="0 0 24 24">
                <path
                  fill="#4f30d8"
                  d="M19 22q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35q-.15-.15-.35-.15q-.2 0-.35.15q-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22ZM3 18q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v6h-3.5q-1.45 0-2.475 1.025Q14 12.05 14 13.5V18Zm8-7l8-5V4l-8 5l-8-5v2Z"
                ></path>
              </svg>
              <label className="ms-2" htmlFor="">
                Email
              </label>
            </div>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email "
              style={{
                border:"2px solid red",
                width:"600px",
                flex:1
              }}
            
            
            
            ></input>
          </div>
          <br /> <br />
          <div className="d-flex justify-content-between  align-items-center  ">
            <div>
              <svg width="2.5em" height="2.5em" viewBox="0 0 24 24">
                <path
                  fill="#4f30d8"
                  d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 
      0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"
                ></path>
              </svg>
              <label className="ms-2" htmlFor="">
                Şifre
              </label>
            </div>

            <input
              type="password"
              name="password"
               className="form-control"
              placeholder="password"
            ></input>
          </div>
          <br /> <br />
          <button
            className="buttongr "
            style={{
              marginLeft: "25rem",
              padding:"1rem 2rem"
            }}
          >
            {" "}
            Giriş
          </button>
          <hr
            noshade
            size="7"
            style={{
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(90deg,  #490af5a4 0%, #490af5 50%, #490af5a4 100%)",
              border: "none",
              borderRadius: "75%",
            }}
          />
          <div className="d-flex justify-content-between  align-items-center  ">
            <div>
              <button className="buttonş">
                <span></span>
                <span></span>
                <span></span>
                <span></span> 🙄 Şifremi Unuttum
              </button>
            </div>

            <div className="d-flex justify-content-center align-items-center " >
              <button className="btn btn-danger">
                <svg width="1em" height="1em" viewBox="0 0 48 48">
                  <mask id="svgIDa">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M30 4H18v14H4v12h14v14h12V30h14V18H30V4Z"
                    ></path>
                  </mask>
                  <path
                    fill="#888888"
                    d="M0 0h48v48H0z"
                    mask="url(#svgIDa)"
                  ></path>
                </svg>
              </button>

              <label htmlFor="">Yeni Kayıt</label>
            </div>
          </div>
        </form>
        <img
          className="d-md-none d-sm-none d-lg-block"
          style={{
            borderRadius: "1rem",
          }}
          src={banner}
          alt=""
        />
       
      </div>
       <Footer/>
    </header>
  );
};

export default Login;
