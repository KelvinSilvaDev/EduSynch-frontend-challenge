import Link from "next/link";
import CryptoIcon from "../../../public/CryptoIcon.svg";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col px-2 h-full gap-4 items-center align-middle justify-start pt-8">
      <Link href="/">
        <Image src={CryptoIcon} alt="icon" />
      </Link>
      <Link href="/">
        <Image src={CryptoIcon} alt="icon" />
      </Link>
      <Link href="/">
        <Image src={CryptoIcon} alt="icon" />
      </Link>
      <Link href="/">
        <Image src={CryptoIcon} alt="icon" />
      </Link>
    </aside>
  );
};
