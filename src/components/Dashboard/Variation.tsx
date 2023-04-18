import Image from "next/image";
import dailyVariation from "../../../public/dailyVariation.png";

export const Variation = () => {
  return (
    <div className="w-1/4 flex align-middle justify-between items-center bg-white py-2 rounded-lg shadow-2xl">
      <div className="w-1/2 flex flex-col px-4">
        <span>Daily Variation</span>
        <span>ETH</span>
        <span>+5,65%</span>
      </div>
      <div className="w-1/2">
        <Image src={dailyVariation} width={250} alt="Daily Variation" />
      </div>
    </div>
  );
};
