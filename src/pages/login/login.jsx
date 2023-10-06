import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            iste atque aut, corrupti magni fugit velit blanditiis nihil tempore
            eveniet culpa exercitationem!
          </p>
          <span>Don't you have an account?</span>

          <NavLink to="/register">
            <button className="button1">Register </button>
          </NavLink>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
