import { useEffect, useState } from "react";
import { Datum, Gifts } from "../types";

export const API_KEY = "KwMjI3aikwFI48xTH6RE6GtGJl97Txez";

export const useGifs = ({ searchTerm }: { searchTerm: string }) => {
  const [gifs, setGifs] = useState<Datum[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGifts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(
            searchTerm
          )}&limit=10`
        );
        const responseData: Gifts = await response.json();
        console.log(responseData.data);
        setGifs(responseData.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    getGifts();
  }, [searchTerm]);

  console.log(gifs);
  return { gifs, loading };
};
