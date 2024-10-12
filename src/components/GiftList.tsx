import { Datum } from "../types";

import GiftItem from "./GiftItem";

function GiftList({ gifs, loading }: { gifs: Datum[]; loading: boolean }) {
  console.log("render GiftList", gifs);
  return (
    <ul className="animate__animated animate__fadeInDown animate__delay-2s">
      {" "}
      {loading && <p>Loading...</p>}
      {gifs.map((gif) => (
        <GiftItem gif={gif} key={gif.id} />
      ))}
    </ul>
  );
}

export default GiftList;
