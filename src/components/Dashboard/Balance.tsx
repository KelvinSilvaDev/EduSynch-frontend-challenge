import balance from "../../../public/balance.svg";
import Image from "next/image";

export const Balance = () => {
  return (
    <div className="w-2/4 flex justify-between bg-white rounded-lg shadow-2xl ">
      <div className="w-1/2 p-2 flex gap-4  align-middle justify-center items-center rounded-l-lg">
        <div className="flex">
          <Image src={balance} alt="balance" />
        </div>
        <div className="text-[#5D6670]">
          <h3 className=" text-2xl">Balance in US$</h3>
          <span className="text-base">(approximately)</span>
        </div>
      </div>
      <div className="w-1/2 bg-[#FFF6E8] py-2 px-8 flex flex-col align-middle justify-center items-center rounded-r-lg">
        <h2 className=" text-[2rem] font-bold text-[#5D6670]">$32,256.56</h2>
      </div>
    </div>
  );
};
