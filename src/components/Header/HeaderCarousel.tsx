import api from "@/services/api";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Coin {
  time: Date;
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
}

const animation = { duration: 15000, easing: (t: number) => t };

export const HeaderCarousel = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api
        .get("/currences")
        .then((response) => response.data);
      setCoins(response);
    }
    fetchData();
  }, []);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });
  return (
    <div
      ref={sliderRef}
      className="keen-slider max-w-[250px] overflow-hidden flex justify-start items-start "
    >
      <div className="flex w-1/4">
        {coins.map((coin) => (
          <div
            key={coin.asset_id_base + coin.asset_id_quote}
            className={`keen-slider__slide flex gap-0 justify-start w-[30px] ${coin.asset_id_base}`}
          >
            <p className="text-[#4E4B59]">{coin.asset_id_base} </p>
            <p className="text-[#5D6670]">{coin.asset_id_quote} </p>
            <p className="text-red-500">
              {coin.rate.toFixed(2).toLocaleLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
