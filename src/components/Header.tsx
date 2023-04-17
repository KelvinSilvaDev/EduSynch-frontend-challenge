import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  return (
    <header className="flex items-center justify-between md:px-7 lg:px-28 h-16">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className={`${roboto.className} ml-10 flex gap-8 text-[#5D6670]`}>
        <Link href="/">About Us</Link>
        <Link href="/">Top Cryptos</Link>
      </nav>
      <div></div>
      <div
        className={`${roboto.className} flex items-center gap-2 text-[#5D6670]`}
      >
        <Link href="/dashboard">Login</Link>
        <Link href="/register">
          <button className="bg-[#FBAB34] text-white rounded-full flex align-middle justify-center items-center w-32 h-8 py-4">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};
