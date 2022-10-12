import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SignIn/SignIn.css";
import { StoreContext } from "../../Redux/Store/Store";
import { API_ACCOUNTS } from "../../Common/ApiController";

export default function SignUp() {
  const store = useContext(StoreContext);
  const [email, setEmail] = useState({
    email: "",
    messError: "",
  });
  const [password, setPassword] = useState({
    password: "",
    messError: "",
  });
  // const REGEX_LIST = [
  //   {
  //     nameInput: "email",
  //     inputValue: "email",
  //     error: "messError",
  //     pattern: /^.+$/,
  //     messError: "Vui lòng nhập tên tài khoản!",
  //   },
  //   {
  //     nameInput: "password",
  //     inputValue: "password",
  //     error: "messError",
  //     pattern: /^.+$/,
  //     messError: "Vui lòng nhập mật khẩu!",
  //   },
  // ];
  const account = { email: email.email, password: password.password };
  const navigate = useNavigate();

  const UserSignIn = async (event, account) => {
    event.preventDefault();
    if (Validation(account)) {
      let res = await fetch(API_ACCOUNTS.SIGNUP, {
        headers: {
          //Nó sẽ nói cho sever biết, web này sẽ gởi giá trị đi là json
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(account),
      });
      if (res.status === 200) {
        alert("Đăng ký thành công");
        navigate("/SignIn");
      } else {
        alert("Đăng ký thất bại!");
      }
    }
  };
  const Validation = (account) => {
    Object.values(account).forEach((info) => {
      if (info === "") {
        alert("Vui lòng nhập đầy đủ");
        return false;
      }
    });
    return true;
  };
  return (
    <div className="main">
      <div className="sign-in">
        <h1>REGISTER</h1>
        <form>
          <div className="row-input">
            <label className="lable-input">Email</label>
            <input
              className="input-field"
              onChange={(event) =>
                setEmail((preEmail) => {
                  return { ...preEmail, email: event.target.value };
                })
              }
            />
          </div>
          <div className="row-input">
            <label className="lable-input">Password</label>
            <input
              className="input-field"
              type="password"
              onChange={(event) =>
                setPassword((prePassword) => {
                  return { ...prePassword, password: event.target.value };
                })
              }
            />
          </div>
          <button
            className="button-signin"
            onClick={(event) => UserSignIn(event, account)}
          >
            Sign Up
          </button>
          <div>
            <span style={{ color: "#d6ebff" }}>You have account? </span>
            <Link
              to="/SignIn"
              style={{
                textDecoration: "underline",
                fontWeight: "bolder",
              }}
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
