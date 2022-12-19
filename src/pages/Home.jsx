import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthContext } from "../components/context/AuthContext";

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  console.log(currentUser)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentUser);
    navigate("/home");
  };

  return (
    <header>
      <div
        className="d-flex justify-content-between   flex-lg-row flex-md-column flex-sm-column mt-3 align-items-md-center align-items-sm-center "
        style={{
          width: "65%",
          margin: "0 auto",
        }}
      >
        <img
          style={{
            maxWidth: "250px",
            textAlign: "center",
          }}
          src={logo}
          alt=""
        />
        <button data-text="Awesome" className="button">
          <span className="actual-text">
            &nbsp;üyeliksiz <br /> ödeme&nbsp;
          </span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;üyeliksiz <br /> ödeme&nbsp;
          </span>
        </button>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-5 mt-5 ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "1rem",
            backgroundColor: "lightsteelblue",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "3.2rem 4rem ",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3effma2teh_x6Li-w2DJagf-WHy20wfRcA&usqp=CAU"
            alt=""
            className="mb-2 rounded"
          />
          <h3>ONLINE ÖDEME YAPMAK İÇİN</h3>
          <button className="buttono" onClick={()=>navigate("/sanalpos")} >
            <span className="text">TIKLAYINIZ</span>
          </button>
        </div>

        <img
          className="d-md-none d-sm-none d-lg-block"
          style={{
            borderRadius: "1rem",
          }}
          src={banner}
          alt=""
        />
      </div>
      <Footer />
    </header>
  );
};

export default Home;
