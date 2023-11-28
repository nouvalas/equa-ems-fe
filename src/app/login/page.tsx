import AssetWeb from "@/components/AssetWeb";
import FormLogin from "@/components/Login/FormLogin";
import React from "react";

function LoginPage() {
  return (
    <div>
      <AssetWeb />
      <div className="w-[1920px] h-[1080px] relative bg-radial-gradient flex justify-center">
        <FormLogin />
      </div>
    </div>
  );
}

export default LoginPage;
