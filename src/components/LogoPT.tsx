import React from "react";
import Image from "next/image";

function LogoPT() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[73px] mb-[55px] gap-3">
        <div>
          <Image src="/images/logopt.svg" width={100} height={100} alt="" />
        </div>
        <div className="text-white text-5xl font-semibold font-['Montserrat']">
          EQUA
        </div>
      </div>
    </div>
  );
}

export default LogoPT;
