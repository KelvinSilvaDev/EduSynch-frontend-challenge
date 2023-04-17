import Image from "next/image";
import dailyVariation from "../../../public/dailyVariation.png";

export const Variation = () => {
  return (
    <div className="flex align-middle justify-center items-center bg-white py-2">
      <div className="flex flex-col px-4">
        <span>Daily Variation</span>
        <span>ETH</span>
        <span>+5,65%</span>
      </div>
      <div>
        <Image src={dailyVariation} width={150} alt="Daily Variation" />
      </div>
    </div>
  );
};
