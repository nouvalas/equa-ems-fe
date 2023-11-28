import React from "react";
import LogoPT from "../LogoPT";
import Footer from "../Footer";

function FormForgotPw() {
  return (
    <div>
      <div>
        <LogoPT />
      </div>
      <form className="w-[690px] h-[500px] bg-indigo-500 bg-opacity-30 rounded-[40px] border-2 border-indigo-500 backdrop-blur-[25px] flex flex-col justify-center">
        <div className="mx-[93px]">
          <h1 className="text-white text-[38px] font-normal font-['Montserrat'] mb-[25px] ">
            Forgot Password
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
          <button className="w-[500px] h-[50px] bg-sky-900 rounded-[10px] text-white text-xl font-normal font-['Montserrat']">
            Send Email
          </button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default FormForgotPw;
