import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieInfo({ id }) {
  const [clickedMovie, setClickedMovie] = useState(); 

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => setClickedMovie(res.data));
  }, [id]);

  function removeItem() {
    setClickedMovie();
  }

  return (
    <>
      {clickedMovie ? (
        <div>
        <div className="flex flex-row m-2 p-4">
          <img src={clickedMovie.Poster} alt="Logo" className="h-80" />

          <div className="ml-4 space-y-2" style={{ width: "70%" }}>
            <h2 className="font-bold text-2xl">{clickedMovie.Title}</h2>
            <h3>
              <span className="font-semibold">IMDB Rating:</span>
              {clickedMovie.Ratings[0].Value}
            </h3>
            <h3>
              <span className="font-semibold">Year:</span> {clickedMovie.Year}
            </h3>
            <h3>
              <span className="font-semibold">Rated:</span> {clickedMovie.Rated}
            </h3>
            <h3>
              <span className="font-semibold">Released:</span>{" "}
              {clickedMovie.Released}
            </h3>
            <h3>
              <span className="font-semibold">Runtime:</span>{" "}
              {clickedMovie.Runtime}
            </h3>
            <h3>
              <span className="font-semibold">Genre:</span> {clickedMovie.Genre}
            </h3>
            <h3>
              <span className="font-semibold">Director:</span>{" "}
              {clickedMovie.Director}
            </h3>
            <h3>
              <span className="font-semibold">Actors:</span>{" "}
              {clickedMovie.Actors}
            </h3>
            <h3>
              <span className="font-semibold">Plot:</span> {clickedMovie.Plot}
            </h3>
          </div>

          <div className="cursor-pointer p-1 w-8 h-8 rounded-full bg-white text-center">
            <h2 onClick={removeItem}>X</h2>
          </div>

          {/* <div className="cursor-pointer p-1 w-8 h-8 ml-3 rounded-full bg-white text-center">
          <i className="fa-solid fa-heart" ></i>
          </div> */}
          
        </div>
        <hr className="bg-slate-500" />
        </div>
      ) : ""}
    </>
  );
}

export default MovieInfo;
