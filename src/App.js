import axios from "axios";
import { useState, useEffect } from "react";
import Moviecard from "./components/MovieCard";
import MovieInfo from "./components/MovieInfo";
import { useDebounce } from "use-debounce";
import "animate.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [movieId, setMovieId] = useState();
  const [debouncedValue] = useDebounce(input, 500);
  
  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(response);
    setResults(response.data.Search);
  };

  useEffect(() => {
    fetchData(debouncedValue);
    setMovieId();
  }, [debouncedValue]);


  return (
       <>
      <div className="flex justify-between flex-row bg-cyan-900 items-center">
        <h3 className="text-white pl-2 text-xl font-semibold">MovieMania</h3>

        <div className="flex flex-row">
          {/* <button className="bg-white p-2 rounded m-1 mr-2 text-gray-900 hover:bg-slate-800 hover:text-white font-semibold" >
            <i className="fa-solid fa-heart text-red-500"></i> My Wishlist
          </button> */}

          <div className="flex flex-row items-center bg-gray-100 text-gray-600 m-1 mr-3 px-6 py-3 rounded-md">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Movie"
              className="ml-2 outline-none bg-gray-100 pr-44 font-bold"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>


      <div>{movieId ? <MovieInfo id={movieId} /> : " "}</div>

      <div className="flex flex-row flex-wrap justify-evenly">
        {results?.length ? (
          results.map((movie, index) => (
            <Moviecard key={index} movie={movie} setMovieId={setMovieId} />
          ))
        ) : (
          <div className="h-[31rem]">
            <h1 className="my-[30vh]  animate__animated animate__backInDown  text-cyan-900 text-center text-6xl">
              Welcome to MovieMania.
            </h1>
          </div>
        )}
      </div>

      <div className=" w-[100%] h-13 p-4 bg-cyan-800 relative bottom-0">
        <h2 className="text-center  text-white text-xl">© Amit Shukla, 2022</h2>
      </div>
      </>

  );
}

export default App;
