import React, { useState } from "react";
import signupanimation from "../images/signupanimation.gif";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import formbg from "../images/formbg.jpg";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow">
          <img src={signupanimation} className="h=full" />
        </div>

        <form className="w-full py-3 flex flex-col" >
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="fistName"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}

          />

          <label htmlFor="email">E-mail</label>
          <input
            type={"text"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}

          />

          <label htmlFor="password">Password</label>
          <div className="flex px-1 py-1 bg-slate-300 rounded mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-1 py-1 bg-slate-300 mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300 ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4">
            Sign up
          </button>
        </form>

        <p>
          {" "}
          you already have an account ?{" "}
          <Link to={"/Login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
