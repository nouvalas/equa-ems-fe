"use client";
import React from "react";
import LogoPT from "../LogoPT";
import Footer from "../Footer";
import { useRouter } from "next/navigation";

function FormChangePw() {
  const router = useRouter();
  return (
    <div>
      <div>
        <LogoPT />
      </div>
      <div className="w-[690px] h-[500px] bg-indigo-500 bg-opacity-30 rounded-[40px] border-2 border-indigo-500 backdrop-blur-[25px] flex flex-col justify-center">
        <div className="mx-[93px]">
          <h1 className="text-white text-[38px] font-normal font-['Montserrat'] mb-[25px] ">
            Change Password
          </h1>
          <label
            className="text-white text-lg font-normal font-montserrat"
            htmlFor="newpassword"
          >
            New Password
          </label>
          <input
            className="w-[500px] h-[50px] bg-white rounded-[10px] border border-stone-300 mb-[29px] pl-[23px]"
            type="password"
            placeholder="New Password"
          />
          <label
            className="text-white text-lg font-normal font-['Montserrat']"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </label>
          <input
            className="w-[500px] h-[50px] bg-white rounded-[10px] border border-stone-300 mb-[31px] pl-[23px]"
            type="password"
            placeholder="Confirm Password"
          />
          <button
            className="w-[500px] h-[50px] bg-sky-900 rounded-[10px] text-white text-xl font-normal font-['Montserrat']"
            onClick={() => router.push("/login")}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default FormChangePw;
