import Image from "next/image";
import Logo from "../../public/Logo.png";

export const Footer = () => {
  return (
    <footer className=" h-16 px-28 flex justify-between align-middle items-center ">
      <p>Copyright &copy; 2023 - All rights reserved</p>
      <Image src={Logo} width={100} alt="Logo" />
    </footer>
  );
};
