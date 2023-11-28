import React from "react";
import Image from "next/image";

function AssetWeb() {
  return (
    <div>
      {/* Asset kiri */}
      <div className="mix-blend-luminosity absolute z-10 mt-[305px] ml-[419px]">
        <Image
          priority
          src="/images/asset1.svg"
          width={244.51}
          height={132.59}
          alt=""
        />
      </div>
      <div className="mix-blend-luminosity absolute z-10 mt-[462px] ml-[385.22px]">
        <Image
          priority
          src="/images/asset1.svg"
          width={155.791}
          height={84.557}
          alt=""
        />
      </div>

      {/* Asset kanan */}
      <div className="mix-blend-luminosity absolute z-10 mt-[744px] ml-[1273px]">
        <Image
          priority
          src="/images/asset2.svg"
          width={176.3}
          height={56.63}
          alt=""
        />
      </div>
      <div className="mix-blend-luminosity absolute z-10 mt-[811px] ml-[1357px]">
        <Image
          priority
          src="/images/asset2.svg"
          width={176.22}
          height={56.72}
          alt=""
        />
      </div>
    </div>
  );
}

export default AssetWeb;
