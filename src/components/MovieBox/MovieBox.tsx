import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieBoxProps } from "../../Interfaces/Interfaces";

const MovieBox = ({ movie, id, isMoviesSelected }: MovieBoxProps) => {
  const navigate = useNavigate();

  const route = isMoviesSelected ? "movie" : "tv";

  return (
    <div
      className="flex flex-col px-20 py-20 bg-[#1A1A1A] rounded-12 border border-[#262626] gap-10 cursor-pointer"
      onClick={() => navigate(`/${route}/${id}`)}
    >
      <img
        className="w-[240px] h-[350px] rounded-8 object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <div className="flex justify-between text-gray-300 text-[16px]">
        <div className="flex px-10 py-6 gap-2 bg-black-300 border border border-black-500 rounded-50">
          <img src="/TimeIcon.png" />
          <span>{movie.vote_average}</span>
        </div>
        <div className="flex px-10 py-6 gap-2 bg-black-300 border border border-black-500 rounded-50">
          <img src="/ViewsIcon.png" />
          <span>{movie.popularity}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
