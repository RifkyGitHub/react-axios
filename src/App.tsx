import { useEffect, useState } from "react";
import Comments from "./components/comments/index.tsx";
import { requestPokemon } from "./components/axios/index.ts";
import { RouterProvider } from "react-router";
import { myRouter } from "./routes/index.tsx";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [errorPokemon, setErrorPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await requestPokemon.get("/pokemon");
        setPokemonList(response.data.results);
        // if (!response.ok) {
        //   throw new Error("Error Detected");
        // }
        // const data = await response.json();
        // setPokemonList(data.results);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        setErrorPokemon(error.message);
      }

      // Asynchronous (best practice)
      // const response = await fetch('https://pokeapi.co');
      // const data = await response.json()
      // setPokemonList(data.results)

      //Synchronous
      // fetch("https://pokeapi.co")
      //   //then pertama untuk meng-ekstrak data menjadi json
      //   .then((response) => response.json())
      //   //then kedua untuk menyimpan data ke state
      //   .then((data) => setPokemonList(data.results));
    };

    //panggil functionnya biar jalan
    getPokemon();
  }, []);
  console.log(pokemonList);

  const [dummyJSON, setDummyJSON] = useState([]);
  const [errorDummy, setErrorDummy] = useState(null);

  useEffect(() => {
    const getDummyJSON = async () => {
      try {
        //Asynchronous
        const dummyResp = await fetch("https://dummyjson.com/users");
        if (!dummyResp.ok) {
          throw new Error("Error Detected");
        }
        const dummyData = await dummyResp.json();
        setDummyJSON(dummyData.users);
      } catch (error) {
        setErrorDummy(error.message);
      }

      //Synchronous
      // fetch('https://dummyjson.com')
      //   .then((res) => res.json())
      //   .then((data) => setDummyJSON(data.users));
    };

    getDummyJSON();
  }, []);
  console.log(dummyJSON);

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
      }}
      className=" w-screen h-screen flex flex-col justify-center items-center gap-6"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <h1>PokeAPI</h1>
        {pokemonList.length > 0 ? (
          pokemonList.map((pokemon, index) => {
            return <span key={index}>{pokemon.name}</span>;
          })
        ) : (
          <span>{errorPokemon}</span>
        )} */}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Users API</h1>
        {/* {dummyJSON.length > 0 ? (
          dummyJSON.map((dummyJSON, index) => {
            return (
              <span key={index}>
                {dummyJSON.firstName} {dummyJSON.lastName}{" "}
                {dummyJSON.maidenName} {dummyJSON.age}
              </span>
            );
          })
        ) : (
          <span>{errorDummy}</span>
        )} */}
      </div>
      {/* <RouterProvider router={myRouter} /> */}
      {/* <Comments/> */}
    </div>
  );
}

export default App;
