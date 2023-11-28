import React from "react";
import LogoPT from "../LogoPT";
import Footer from "../Footer";
import Link from "next/link";

function FormLogin() {
  return (
    <div>
      <div>
        <LogoPT />
      </div>
      <form className="w-[690px] h-[500px] bg-indigo-500 bg-opacity-30 rounded-[40px] border-2 border-indigo-500 backdrop-blur-[25px] flex flex-col justify-center">
        <div className="mx-[93px]">
          <h1 className="text-white text-[38px] font-normal font-montserrat mb-[25px] ">
            Login
          </h1>
          <label
            className="text-white text-lg font-normal font-montserrat"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-[500px] h-[50px] bg-white rounded-[10px] border border-stone-300 mb-[29px] pl-[23px]"
            type="email"
            placeholder="username@gmail.com"
          />
          <label
            className="text-white text-lg font-normal font-['Montserrat']"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-[500px] h-[50px] bg-white rounded-[10px] border border-stone-300 mb-[31px] pl-[23px]"
            type="password"
            placeholder="Password"
          />
          <Link href="/forgotpassword">
            <p className="text-white text-xs font-normal font-['Montserrat'] mb-[27px]">
              Forgot Password?
            </p>
          </Link>
          <button className="w-[500px] h-[50px] bg-sky-900 rounded-[10px] text-white text-xl font-normal font-['Montserrat']">
            Sign in
          </button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default FormLogin;
