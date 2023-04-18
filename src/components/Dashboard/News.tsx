import Image from "next/image";
import Link from "next/link";
import eduphantsNormal from "../../../public/eduphantsNormal.png";

export const News = () => {
  return (
    <div className="w-1/4 flex align-middle justify-between items-center bg-white rounded-lg shadow-2xl">
      <div className="flex flex-col px-2">
        <h3>NFT’s NEWS</h3>
        <span>New ElephantX NFT to be lauched!</span>
        <Link href="/">Read more +</Link>
      </div>
      <div className="rounded-r-lg">
        <Image
          src={eduphantsNormal}
          className=" rounded-r-lg "
          alt="Elephant"
          width={250}
        />
      </div>
    </div>
  );
};
