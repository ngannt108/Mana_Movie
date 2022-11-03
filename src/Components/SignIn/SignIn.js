import React, { useState, useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { StoreContext } from "../../Redux/Store/Store";
import { API_ACCOUNTS } from "../../Common/ApiController";
import swal from "sweetalert";

export default function LogIn() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

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
      let res = await fetch(API_ACCOUNTS.SIGNIN, {
        headers: {
          //Nó sẽ nói cho sever biết, web này sẽ gởi giá trị đi là json
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(account),
      });
      if (res.status === 200) {
        await swal({
          title: "Login Successfully",
          // text: "Enjoy your movie",
          icon: "success",
        });
        store.AccountDispatch({
          type: "ACCOUNT",
          payload: account.email,
        });
        navigate("/");
      } else {
        await swal({
          title: "Login Failed",
          text: "Please try again",
          icon: "error",
        });
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
        <h1>LOG IN</h1>
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
            Log In
          </button>
          <Link to="/ForgotPassword"> Forgot password!</Link>
          <div>
            <span style={{ color: "#d6ebff" }}>Don't have account? </span>
            <Link
              to="/SignUp"
              style={{
                textDecoration: "underline",
                fontWeight: "bolder",
              }}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
