import React from "react";
import AssetWeb from "@/components/AssetWeb";
import FormChangePw from "@/components/Change Password/FormChangePw";

function page() {
  return (
    <div>
      <AssetWeb />
      <div className="w-[1920px] h-[1080px] relative bg-radial-gradient flex justify-center">
        <FormChangePw />
      </div>
    </div>
  );
}

export default page;
