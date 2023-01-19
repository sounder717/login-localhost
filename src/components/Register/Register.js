import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import simage from "../../assets/images/signup.jpg";

export default function Register() {
  const navigate = useNavigate();
  const [formData, updateData] = useState({
    fName: "",
    fPassword: "",
    fEmail: "",
    fNumber: "",
    dataUrl:
      "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1600",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;

    updateData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const LoginStore = () => {
    const key = localStorage.length;
    if (
      formData.fName &&
      formData.fPassword &&
      formData.fEmail &&
      formData.fNumber
    ) {
      //   localStorage.setItem(key, JSON.stringify([formData]));
      localStorage.setItem(
        key,
        JSON.stringify({
          name: formData.fName,
          password: formData.fPassword,
          email: formData.fEmail,
          number: formData.fNumber,
        })
      );
      navigate("/Login");
    }
  };

  return (
    <>
      <form>
        <div className="register_outer">
          <div className="register">
            <div className="register_image">
              <img src={simage} className="register_img"></img>
            </div>
            <div className="register_content">
              <div className="register_details">
                <div className="register_name">Name:</div>
                <div className="register_input">
                  <input
                    type="text"
                    name="fName"
                    value={formData.fName}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="register_details">
                <div className="register_name">Email Id:</div>
                <div className="register_input">
                  <input
                    type="email"
                    name="fEmail"
                    value={formData.fEmail}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="register_details">
                <div className="register_name">Phone:</div>
                <div className="register_input">
                  <input
                    type="number"
                    name="fNumber"
                    value={formData.fNumber}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="register_details">
                <div className="register_name">Password:</div>
                <div className="register_input">
                  <input
                    type="password"
                    name="fPassword"
                    value={formData.fPassword}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="register_details">
                <div className="register_input">
                  <button
                    className="Register_Cs  Cs_2"
                    onClick={(e) => navigate("/Login")}
                  >
                    Login
                  </button>
                  <input
                    type="Submit"
                    name="rSubmit"
                    value="Sign Up"
                    onClick={LoginStore}
                    className="Register_Cs Cs_1"
                    readOnly
                  ></input>
                </div>
              </div>
              <div className="register_details">
                <div id="in"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
