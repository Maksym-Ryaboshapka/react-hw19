import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import GifSearch from "./components/GifSearch/GifSearch";
import GifList from "./components/GifList/GIfList";

import apiJSON from "./api-key.json";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");

  const apiEndpoint = "https://api.giphy.com/v1/gifs/search";
  const apiKey = apiJSON.key;

  useEffect(() => {
    if (!keyword) return;

    const fetchGifs = async () => {
      try {
        const res = await axios.get(
          `${apiEndpoint}?api_key=${apiKey}&q=${keyword}&limit=15`
        );
        setGifs(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGifs();
  }, [keyword]);

  const handleChangeKeyword = useCallback((newKeyword) => {
    setKeyword(newKeyword);
  }, setKeyword);

  return (
    <div className="App">
      <GifSearch changeKeyword={handleChangeKeyword} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default App;
