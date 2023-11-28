import React from "react";
import AssetWeb from "@/components/AssetWeb";
import FormForgotPw from "@/components/Forgot Password/FormForgotPw";

function page() {
  return (
    <div>
      <AssetWeb />
      <div className="w-[1920px] h-[1080px] relative bg-radial-gradient flex justify-center">
        <FormForgotPw />
      </div>
    </div>
  );
}

export default page;
