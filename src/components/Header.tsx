import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { HeaderCarousel } from "./Header/HeaderCarousel";
import { useState } from "react";
import FullscreenModal from "./FullscreenModal";
import { SignIn } from "./Header/SignIn";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInstance, setModalInstance] = useState(SignIn);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSignInModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

      <HeaderCarousel />

      <div
        className={`${roboto.className} flex items-center gap-2 text-[#5D6670]`}
      >
        <Link href="/dashboard">Login</Link>
        <button
          className="bg-[#FBAB34] text-white rounded-full flex align-middle justify-center items-center w-32 h-8 py-4"
          onClick={handleOpenModal}
        >
          Register
        </button>
        {/* <Link href="/">
        </Link> */}
      </div>
      <FullscreenModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalInstance}
      </FullscreenModal>
    </header>
  );
};
