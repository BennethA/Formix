import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#fafafa] h-dvh w-full flex items-center justify-center">
      <div className="bg-white p-6 rounded-3xl">
        <div className="mb-4">
          <p className="font-bold text-2xl mb-[5px]">Register</p>
          <small className="text-[12px] font-bold text-[#424242be]">
            Sign up for Formix
          </small>
        </div>
        <div className="flex justify-between gap-1 mb-6">
          <button className="flex items-center justify-center gap-[6px] w-full border-gray-200 border rounded p-[5px]">
            <FaGoogle className="text-[15x]" />
            <p className="text-[12px] text-[#424242be] font-bold">Google</p>
          </button>
          <button className="flex items-center justify-center gap-[6px] w-full border-gray-200 border rounded p-[5px]">
            <FaGithub className="text-[15px]" />
            <p className="text-[12px] text-[#424242be] font-bold">Github</p>
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="h-full flex items-center w-full">
            <hr className="h-[2px] w-full bg-[#b6b6b621]" />
          </div>
          <div className="mx-2 text-[10px] text-[#808080e1] font-semibold">
            or
          </div>
          <div className="h-full flex items-center w-full">
            <hr className="h-[2px] w-full bg-[#b6b6b621]" />
          </div>
        </div>
        <form>
          <div className="flex flex-col mb-[10px]">
            <label
              htmlFor="fullName"
              className="text-[10px] font-bold mb-[3px]"
            >
              Full Name
            </label>
            <input
              type="text"
              className="border-2 rounded-[3px] py-1 px-3 text-[12px] font-bold text-[#3d3d3d8e]"
            />
          </div>
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
            <small className="text-[11px]">
              I agree to the <b className="text-black">Privacy Policy</b> and{" "}
              <b className="text-black">Terms of Service</b>
            </small>
          </div>
          <button className="w-full bg-black text-[#fcfcfcf8] rounded text-[12px] p-[9px] font-semibold mb-5">
            Create Account
          </button>
        </form>
        <p className="text-[11px] text-center text-[#1f1f1f9c] font-bold">
          Have an account already?{" "}
          <b className="text-black">
            <Link to="/loginPage"> Log In</Link>
          </b>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage