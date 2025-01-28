/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#fafafa] h-dvh w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-3xl">
        <div className="mb-4">
          <p className="font-bold text-2xl mb-[5px]">Log In</p>
          <small className="text-[12px] font-bold text-[#424242be]">
            Continue your journey with Formix
          </small>
        </div>
        <form>
          <div className="flex flex-col mb-[10px]">
            <label htmlFor="email" className="text-[10px] font-bold mb-[3px]">
              Email
            </label>
            <input
              type="text"
              className="border-2 rounded-[3px] py-1 px-3 text-[12px] font-bold text-[#242424e8]"
            />
          </div>
          <div className="flex flex-col mb-[27px]">
            <label
              htmlFor="password"
              className="text-[10px] font-bold mb-[3px]"
            >
              Password
            </label>
            <div className="relative">
              <input
                min="7"
                max="10"
                type={showPassword ? "password" : "number"}
                className="border-2 rounded-[3px] py-1 px-3 text-[12px] font-bold text-[#242424e8] w-full"
              />
              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[30%] text-[#3d3d3dbb] text-[12px] cursor-pointer hover:text-[#1a1a1ae3]"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[30%] text-[#3d3d3dbb] text-[12px] cursor-pointer hover:text-[#1a1a1ae3]"
                />
              )}
            </div>
          </div>
          <div className="flex items-center gap-1 mb-5">
            <input type="checkbox" className="accent-black" />
            <small className="text-[11px]">Remember me</small>
          </div>
          <Link to="/agreementPage">
            <button className="w-full bg-black text-[#fcfcfcf8] rounded text-[12px] p-[9px] font-semibold mb-5">
              Log In
            </button>
          </Link>
        </form>
        <p className="text-[11px] text-center text-[#1f1f1f9c] font-bold">
          Don't have an account?
          <b className="text-black">
            <Link to="/registerPage"> Register Now</Link>
          </b>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
