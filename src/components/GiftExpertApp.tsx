import { Fragment } from "react/jsx-runtime";
import GifForm from "./GifForm";
import GiftList from "./GiftList";
import { useGifs } from "../hooks/useGifs";
import { useState } from "react";

export const API_KEY = "vHqfQcRKA3gvJavHXloavRL8P06qS7KK";
function GiftExpertApp() {
  const [searchTerm, setSearchTerm] = useState("Cristiano Ronaldo");
  const { gifs, loading } = useGifs({ searchTerm });
  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <GifForm setSearchTerm={setSearchTerm} />

      <hr />

      <GiftList loading={loading} gifs={gifs} />
    </Fragment>
  );
}
export default GiftExpertApp;
