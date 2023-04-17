export const Balance = () => {
  return (
    <div className="flex rounded-lg shadow-2xl ">
      <div className="bg-white p-2 flex flex-col align-middle justify-center items-center rounded-l-lg">
        <h3>Balance in US$</h3>
        <span>(approximately)</span>
      </div>
      <div className="bg-[#FFF6E8] py-2 px-8 flex flex-col align-middle justify-center items-center rounded-r-lg">
        <h2>$32,256.56</h2>
      </div>
    </div>
  );
};
