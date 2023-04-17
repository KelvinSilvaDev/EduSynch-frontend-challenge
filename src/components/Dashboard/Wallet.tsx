export const Wallet = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="w-full flex justify-between">
        <div className="flex">
          <h1>My Wallet</h1>
        </div>
        <button className="rounded-xl px-3 bg-[#FBAB34] text-white">
          + Add crypto
        </button>
      </div>
      <section className="w-full">
        <table className="w-full">
          <thead>
            <tr className="w-full flex items-center align-middle justify-center  gap-8">
              <th className="p-12">#</th>
              <th className="p-12">Crypto</th>
              <th className="p-12">Holdings</th>
              <th className="p-12">Change</th>
              <th className="p-12">Trade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full flex items-center align-middle justify-center gap-8">
              <td className="p-10">1</td>
              <td className="p-10">Bitcoin</td>
              <td className="p-10">
                US$ 25.499,52 <br />
                434 BTC
              </td>
              <td className="p-10">+5,65%</td>
              <td className="p-10">TRADEBTN</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
