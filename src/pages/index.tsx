import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HomeSliders } from "@/components/Home/Carrousel";
import api from "@/services/api";
import sectionSeparator from "../../public/sectionSeparator.png";
import { CryptoTable } from "@/components/Home/CryptoTable";

export default function Home() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const response = api.get("/exchangerate/BTC?invert=false");

  //   console.log(response);
  // }, []);
  return (
    <>
      <section className="flex align-middle items-center py-20 px-7 lg:px-28">
        <div className="flex-col align-top justify-start items-start lg:min-w-[500px] lg:w-[550px]">
          <h1 className="text-[#FBAB34] font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <h2 className=" text-xl text-[#5D6670] leading-8 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </h2>
          <button className=" mt-8 bg-[#FBAB34] text-white rounded-3xl py-3 px-[77px]">
            Sign Up Now
          </button>
          <div className="flex gap-2 mt-20">
            <Link href="/" className="bg-[#FFF6E8] py-2 px-4 text-[#FBAB34] ">
              Cryptos
            </Link>
            <Link href="/" className="bg-[#FFF6E8] py-2 px-4 text-[#FBAB34] ">
              NFTs
            </Link>
            <Link href="/" className="bg-[#FFF6E8] py-2 px-4 text-[#FBAB34] ">
              Games
            </Link>
          </div>
        </div>
        <div className="w-[1150px] ml-28 ">
          <HomeSliders />
        </div>
      </section>
      <Image src={sectionSeparator} width={1200} layout="responsive" alt="" />
      <section className=" md:flex-col-reverse lg:flex-row flex align-middle justify-center items-center gap-2 bg-gradient-to-b from-transparent to-[#F7F7F7] py-20 px-28">
        <div className=" w-90 ">
          <div className="flex gap-8 pr-8 pt-2">
            <div className="shadow-sm p-8 bg-white rounded-lg w-[280px] h-[268px] flex flex-col align-middle justify-center items ">
              <p className="text-[#FBAB34] font-bold text-base">
                For Your Company
              </p>
              <h3 className="font-bold text-2xl text-[#5D6670]">
                Crypto Solutions
              </h3>
              <p className="font-normal text-sm text-[#5D6670] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{" "}
              </p>
            </div>
            <div className="shadow-sm p-8 bg-white rounded-lg w-[280px] h-[268px] flex flex-col align-middle justify-center items ">
              <p className="text-[#FBAB34] font-bold text-base">
                For Your Company
              </p>
              <h3 className="font-bold text-2xl text-[#5D6670]">
                Crypto Solutions
              </h3>
              <p className="font-normal text-sm text-[#5D6670] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-8 pl-8 mt-8">
            <div className="shadow-sm p-8 rounded-lg bg-white w-[280px] h-[268px] flex flex-col align-middle justify-center items ">
              <p className="text-[#FBAB34] font-bold text-base">
                For Your Company
              </p>
              <h3 className="font-bold text-2xl text-[#5D6670]">
                Crypto Solutions
              </h3>
              <p className="font-normal text-sm text-[#5D6670] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{" "}
              </p>
            </div>
            <div className="shadow-sm p-8 bg-white rounded-lg w-[280px] h-[268px] flex flex-col align-middle justify-center items ">
              <p className="text-[#FBAB34] font-bold text-base">
                For Your Company
              </p>
              <h3 className="font-bold text-2xl text-[#5D6670]">
                Crypto Solutions
              </h3>
              <p className="font-normal text-sm text-[#5D6670] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start align-middle ml-8">
          <h3 className="text-[#FBAB34] font-bold">Lorem ipsum</h3>
          <h1 className="text-[#5D6670] font-bold text-[40px] leading-[48px] ">
            Lorem ipsum
          </h1>
          <p className="text-[#5D6670]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <Link
            href="/"
            className="bg-[#FBAB34] text-white rounded-3xl py-3 px-[77px]"
          >
            <button>Sign Up Now</button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center align-middle py-20 px-28">
        <h2>Top Cryptos</h2>
        <CryptoTable />
      </section>
      <section className="flex items-center justify-center h-[80vh] bg-cover bg-center bg-newsletter-bg bg-[#da8300]">
        <div className="container px-28 flex justify-between">
          <div className="">
            <h1 className="text-4xl font-bold text-white">
              Assine nossa newsletter
            </h1>
            <p className="mt-4 text-lg text-white">
              Receba as últimas notícias e atualizações diretamente em sua caixa
              de entrada.
            </p>
          </div>
          <div>
            <form className="mt-8 max-w-md mx-auto">
              <div className="flex flex-wrap">
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu e-mail"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 mt-4 text-white bg-[#FBAB34] rounded-3xl hover:bg-[#FBAB14] focus:outline-none focus:bg-blue-600"
                >
                  Assinar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
