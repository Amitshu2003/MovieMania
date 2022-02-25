import React from "react";

function Moviecard({ movie, setMovieId }) {
  
  const { Title, Year, Type, Poster, imdbID } = movie;

  function showInfo(id) {
    setMovieId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div
        onClick={() => showInfo(imdbID)}
        className="flex flex-col rounded-md cursor-pointer shadow-lg p-3 m-4 bg-white w-72"
      >
        <img src={Poster} alt="Movie Pic" className="object-cover min-h-[80%]  mb-1" />
        <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {Title}
        </h2>
        <div className="flex flex-row justify-between">
          <p>Year : {Year}</p>
          <p>Type : {Type}</p>
        </div>
      </div>
    </>
  );
}

export default Moviecard;
