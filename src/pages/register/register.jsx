import React from "react";
import { NavLink } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register here</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            iste atque aut, corrupti magni fugit velit blanditiis nihil tempore
            eveniet culpa exercitationem!
          </p>
          <span>Do you have an account Already?</span>

          <NavLink to="/login">
            <button className="button2">Login </button>
          </NavLink>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
