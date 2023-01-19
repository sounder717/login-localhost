import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import limage from "../../assets/images/signin.jpg";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [loginData, loginUpdateData] = useState({
    lName: "",
    lPassword: "",
  });
  const HandleChange = (e) => {
    const { name, value } = e.target;

    loginUpdateData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const loginCheck = () => {
    var newarray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const para = localStorage.getItem(i);
      newarray.push(JSON.parse(para));
    }
    newarray.map((e, i) => {
      var gcontent = [e];
      gcontent.map((x, y) => {
        if (x.email == loginData.lName) {
          if (x.password == loginData.lPassword) {
            navigate("/Employee");
          } else {
            console.log("wrong password");
          }
        }
      });
    });
  };
  return (
    <>
      <div className="Login_outer">
        <div className="Login">
          <div className="Login_image">
            <img src={limage} className="Login_img"></img>
          </div>
          <div className="Login_Content">
            <div className="Login_details">
              <div className="Login_name">Email:</div>
              <div className="Login_input">
                <input
                  type="email"
                  name="lName"
                  value={loginData.lName}
                  onChange={HandleChange}
                  required
                ></input>
              </div>
            </div>
            <div className="Login_details">
              <div className="Login_name">Password:</div>
              <div className="Login_input">
                <input
                  type="password"
                  name="lPassword"
                  value={loginData.lPassword}
                  onChange={HandleChange}
                  required
                ></input>
              </div>
            </div>
            <div className="Login_details">
              <div className="Login_input">
                <input
                  type="Submit"
                  name="Submit"
                  value="Sign In"
                  className="Login_Cs Cs_1"
                  readOnly
                  onClick={loginCheck}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
