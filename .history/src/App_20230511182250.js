import {useEffect, useState} from "react";
import './App.css';
import {getAllPokemon} from "./utils/pokemon.js";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  return <div className="App">
    {loading ? (
      <h1>ロード中・・・</h1>
    ) : (
    <>
      <h1>ポケモンデータを取得しました</h1>
    </>
    )};
  </div>;
}

export default App;
