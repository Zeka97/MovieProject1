import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { searchMovieTVshow, topRatedMovies, topRatedSeries } from "../api";
import MovieBox from "../components/MovieBox/MovieBox";
import { useSearchContext } from "../components/Context/SearchContext";
import MovieOrSeriesDisplayList from "../MovieOrSeriesDisplayList/MovieOrSeriesDisplayList";

const Home = () => {
  const { isMoviesSelected, search } = useSearchContext();

  const { data: movies } = useQuery({
    queryKey: ["movies", isMoviesSelected && search.length <= 3],
    queryFn: () => topRatedMovies(),
    enabled: !!isMoviesSelected && search.length < 3,
  });

  console.log(movies);

  const { data: series } = useQuery({
    queryKey: ["series", !isMoviesSelected && search.length <= 3],
    queryFn: () => topRatedSeries(),
    enabled: !!!isMoviesSelected && search.length < 3,
  });

  const { data: searchResult, refetch } = useQuery({
    queryKey: ["search", search.length >= 3],
    queryFn: () => searchMovieTVshow(search),
    enabled: search.length >= 3,
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (search.length >= 3) {
      timeout = setTimeout(() => refetch(), 3000);
    }

    return () => clearTimeout(timeout);
  }, [search.length]);

  return (
    <>
      {isMoviesSelected && search.length < 3 && (
        <MovieOrSeriesDisplayList
          title="Top Rated Movies"
          movies={movies}
          isMovieSelected={isMoviesSelected}
        />
      )}
      {!isMoviesSelected && search.length < 3 && (
        <MovieOrSeriesDisplayList
          title="Top Rated Series"
          movies={series}
          isMovieSelected={isMoviesSelected}
        />
      )}
      {search.length >= 3 && (
        <MovieOrSeriesDisplayList
          title="Result of search"
          movies={searchResult}
          isMovieSelected={isMoviesSelected}
        />
      )}
    </>
  );
};

export default Home;
