import React from "react";
import MovieBox from "../components/MovieBox/MovieBox";
import { MovieOrSeriesProps } from "../Interfaces/Interfaces";

const MovieOrSeriesDisplayList = ({
  title,
  movies,
  isMovieSelected,
}: MovieOrSeriesProps) => {
  return (
    <div className="flex flex-col gap-40 mt-120 mb-120">
      <h1 className="text-white text-[38px] font-bold">{title}</h1>
      <div className="flex flex-wrap gap-x-20 gap-y-40">
        {movies?.results.length > 0 ? (
          movies.results.map((movie: any) => (
            <MovieBox
              key={movie.id}
              movie={movie}
              id={movie.id}
              isMoviesSelected={isMovieSelected}
            />
          ))
        ) : (
          <div className="text-white"> Nothing found! </div>
        )}
      </div>
    </div>
  );
};

export default MovieOrSeriesDisplayList;
