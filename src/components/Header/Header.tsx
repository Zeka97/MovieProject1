import React, { useState } from "react";
import { searchMovieTVshow } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useSearchContext } from "../Context/SearchContext";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { isMoviesSelected, setIsMovieSelected, search, setSearch } =
    useSearchContext();

  const { data, error, isError, isSuccess, isFetching, isLoading, refetch } =
    useQuery({
      queryKey: ["searchMovies"],
      queryFn: () => searchMovieTVshow(search),
    });

  return (
    <div className="flex w-full h-120 items-center justify-between">
      <img
        src="/logo.png"
        alt="logo"
        className="w-[199px] h-[60px]"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-10 bg-[#0f0f0f] rounded-12 border-4 border-[#1f1f1f] px-8 py-8">
        <button
          className={classNames("rounded-8 text-white border px-24 py-14", {
            "border-[#1A1A1A] bg-[#1A1A1A]": isMoviesSelected,
            "bg-transparent border-none": !isMoviesSelected,
          })}
          onClick={() => setIsMovieSelected(true)}
        >
          Top Rated Movies
        </button>
        <button
          className={classNames("rounded-8 text-white border px-24 py-14", {
            "border-[#1A1A1A] bg-[#1A1A1A]": !isMoviesSelected,
            "bg-transparent border-none": isMoviesSelected,
          })}
          onClick={() => setIsMovieSelected(false)}
        >
          Top rated TV Shows
        </button>
      </div>
      <div className="flex justify-center gap-8 text-[#757474]">
        <img className="w-[34px] h-[34px]" src="/icon.png" alt="searchicon" />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="border-b bg-transparent border-[#505050] outline-none w-[240px]"
        ></input>
      </div>
    </div>
  );
};

export default Header;
