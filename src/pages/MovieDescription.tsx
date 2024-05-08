import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieCast, movieDescription } from "../api";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
import { Rating } from "react-simple-star-rating";
import { useSearchContext } from "../components/Context/SearchContext";
import { Actor, Genre, Languages } from "../Interfaces/Interfaces";

const MovieDescription = () => {
  const location = useLocation();
  const { id } = useParams();
  const { data: movie } = useQuery({
    queryKey: ["movie"],
    queryFn: () => movieDescription(location.pathname),
  });

  const { data: cast } = useQuery({
    queryKey: ["cast"],
    queryFn: () => getMovieCast(location.pathname),
  });

  console.log(cast, movie);

  return (
    <div className="mb-20 mt-[60px]">
      <div className="xl:w-full w-auto px-50 xl:px-0 h-[750px] relative">
        <div className="h-full absolute left-0 top-0 bg-gradient-to-t from-[#141414] to-[#14141410] rounded-12" />
        <img
          className="h-full w-full object-cover rounded-12"
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
        />
        <div className="absolute flex flex-col gap-10 items-center bottom-[10%] text-white w-full text-center">
          <h1 className="text-[38px] font-bold leading-57">
            {movie?.title || movie?.name}
          </h1>
          <span className="text-[18px] text-gray-300 font-normal leading-27">
            {movie?.tagline}
          </span>
          <button className="bg-red-300 px-24 py-14 w-fit rounded-8 text-white font-semibold leading-27 mt-12 flex gap-8 hover:opacity-70">
            <img src="/PlayIcon.png" />
            <span>Play now</span>
          </button>
        </div>
      </div>
      <div className="flex gap-14 mt-120">
        <div className="flex flex-col gap-32 w-[65%]">
          <div className="flex flex-col gap-14 bg-black-400 border border-black-500 justify-center p-50 rounded-12">
            <h1 className="text-gray-300 text-[18px] leading-27 font-semibold">
              Description
            </h1>
            <div className="font-normal text-[18px] leading-27 text-white">
              {movie?.overview}
            </div>
          </div>
          <div className="flex flex-col gap-14 border bg-black-400 border-black-500 justify-center p-50 rounded-12">
            <h1 className="text-gray-300 text-[18px] leading-27 font-semibold">
              Cast
            </h1>
            <div className="flex gap-20">
              {cast?.map(
                (actor: Actor, index: number) =>
                  index < 8 && (
                    <img
                      className="rounded-12 h-110 w-100 object-cover"
                      src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    />
                  )
              )}
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-32 bg-black-400 rounded-12 p-50">
          <div className="flex flex-col gap-14 bg-black-400">
            <h1 className="text-gray-300 text-[18px] leading-27 font-semibold">
              Released Year
            </h1>
            <div className="text-[18px] leading-27 text-white font-bold">
              {moment(movie?.release_date).format("YYYY")}
            </div>
          </div>
          <div className="flex flex-col h-auto gap-14 bg-black-400">
            <h1 className="text-gray-300 text-[18px] leading-27 font-semibold">
              Available Languages
            </h1>
            <div className="flex flex-wrap gap-10 leading-27">
              {movie?.spoken_languages?.map((language: Languages) => (
                <div className="flex justify-center items-center bg-black-300 px-14 py-8 text-white font-semibold border border-black-500 rounded-8">
                  {language.english_name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-14 bg-black-400 w-full">
            <h1 className="text-gray-300 text-[18px] leading-27 font-semibold">
              Ratings
            </h1>
            <div className="flex gap-24">
              <div className="flex gap-10 leading-27">
                <div className="flex flex-col bg-black-300 px-14 py-8 text-white font-semibold border border-black-500 rounded-8">
                  <span className="font-bold pl-2">IMDb</span>
                  <Rating
                    initialValue={movie?.vote_average / 2}
                    readonly
                    SVGstyle={{ display: "inline" }}
                    fillColor="red"
                    size={30}
                    allowFraction
                  />
                </div>
              </div>
              <div className="flex gap-10 leading-27">
                <div className="flex flex-col bg-black-300 px-14 py-8 text-white font-semibold border border-black-500 rounded-8">
                  <span className="font-bold pl-2">Streamvibe</span>
                  <Rating
                    initialValue={movie?.vote_average / 2}
                    readonly
                    SVGstyle={{ display: "inline" }}
                    fillColor="red"
                    size={30}
                    allowFraction
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-14 bg-black-400">
            <h1 className="text-gray-300 text-[18px] leading-27 font-semibold">
              Genres
            </h1>
            <div className="flex gap-10 leading-27">
              {movie?.genres?.map((genre: Genre) => (
                <div className="bg-black-300 px-14 py-8 text-white font-semibold border border-black-500 rounded-8">
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
