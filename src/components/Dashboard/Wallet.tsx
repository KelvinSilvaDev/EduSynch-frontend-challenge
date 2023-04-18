import { useState } from "react";

interface coinsProps {
  id: number;
  cryptoName: string;
  coinValue: string;
  dolarValue: string;
  variation: string;
}

export const Wallet = () => {
  const [coins, setCoins] = useState<coinsProps[]>([
    {
      id: 1,
      cryptoName: "Bitcoin",
      dolarValue: "US$ 25.499,52",
      coinValue: "434 BTC",
      variation: "+5,65%",
    },
    {
      id: 2,
      cryptoName: "Bitcoin",
      dolarValue: "US$ 25.499,52",
      coinValue: "434 BTC",
      variation: "+5,65%",
    },
    {
      id: 3,
      cryptoName: "Bitcoin",
      dolarValue: "US$ 25.499,52",
      coinValue: "434 BTC",
      variation: "+5,65%",
    },
    {
      id: 4,
      cryptoName: "Bitcoin",
      dolarValue: "US$ 25.499,52",
      coinValue: "434 BTC",
      variation: "+5,65%",
    },
    {
      id: 5,
      cryptoName: "Bitcoin",
      dolarValue: "US$ 25.499,52",
      coinValue: "434 BTC",
      variation: "+5,65%",
    },
  ]);
  return (
    <div className="flex flex-col w-full bg-white rounded-lg overflow-y-scroll">
      <div className="w-full flex align-middle items-center justify-between py-2 px-4 border-b-[1px]">
        <div className="flex ">
          <h1>My Wallet</h1>
        </div>
        <button className="rounded-3xl py-2 px-3 bg-[#FBAB34] text-white">
          + Add crypto
        </button>
      </div>
      <section className="w-full">
        <table className="w-full">
          <thead>
            <tr className="w-full flex items-center align-middle justify-between  gap-8">
              <th className="p-12">#</th>
              <th className="p-12">Crypto</th>
              <th className="p-12">Holdings</th>
              <th className="p-12">Change</th>
              <th className="p-12">Trade</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr
                key={coin.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } w-full flex items-center align-middle justify-between gap-8`}
              >
                <td className="p-12">{index + 1}</td>
                <td className="p-12">{coin.cryptoName}</td>
                <td className="p-12">{coin.dolarValue}</td>
                <td className="p-12">{coin.coinValue}</td>
                <td className="p-12">{coin.variation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
