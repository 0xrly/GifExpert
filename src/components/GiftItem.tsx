import { Datum } from "../types";

function GiftItem({ gif }: { gif: Datum }) {
  return (
    <li key={gif.id}>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <p>{gif.title}</p>
    </li>
  );
}
export default GiftItem;
