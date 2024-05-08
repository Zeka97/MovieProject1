import { MovieDescription } from "../Interfaces/Interfaces";
import axios from "./axios";

export const topRatedMovies = () => {
  const data = axios
    .get("/movie/top_rated", {
      params: { language: "en-US", page: "1" },
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZjYTRhMTJiNmY4YzY5YTE5NjZlM2RhMGM1NWNlMiIsInN1YiI6IjY2MzRlZWRlYzA0NDI5MDEyNjhmMTg0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKSoqpW2Ks79mm3vQOufbvpeCaqq9n6RYlH5nFSbz3w",
      },
    })
    .then(({ data }) => data)
    .catch((err) => console.log(err));

  return data;
};

export const topRatedSeries = () => {
  const data = axios
    .get("/tv/top_rated", {
      params: { language: "en-US", page: "1" },
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZjYTRhMTJiNmY4YzY5YTE5NjZlM2RhMGM1NWNlMiIsInN1YiI6IjY2MzRlZWRlYzA0NDI5MDEyNjhmMTg0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKSoqpW2Ks79mm3vQOufbvpeCaqq9n6RYlH5nFSbz3w",
      },
    })
    .then(({ data }) => data)
    .catch((err) => console.log(err));

  return data;
};

export const movieDescription = (location: string | undefined) => {
  const data = axios
    .get(`${location}`, {
      params: { language: "en-US", page: "1" },
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZjYTRhMTJiNmY4YzY5YTE5NjZlM2RhMGM1NWNlMiIsInN1YiI6IjY2MzRlZWRlYzA0NDI5MDEyNjhmMTg0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKSoqpW2Ks79mm3vQOufbvpeCaqq9n6RYlH5nFSbz3w",
      },
    })
    .then(({ data }) => data)
    .catch((err) => console.log(err));

  return data;
};

export const getMovieCast = (location: String | undefined) => {
  const data = axios
    .get(`${location}/credits`, {
      params: { language: "en-US" },
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZjYTRhMTJiNmY4YzY5YTE5NjZlM2RhMGM1NWNlMiIsInN1YiI6IjY2MzRlZWRlYzA0NDI5MDEyNjhmMTg0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKSoqpW2Ks79mm3vQOufbvpeCaqq9n6RYlH5nFSbz3w",
      },
    })
    .then(({ data }) => data?.cast)
    .catch((err) => console.log(err));

  return data;
};

export const searchMovieTVshow = (query: string) => {
  const data = axios
    .get(`/search/multi`, {
      params: { query, language: "en-US", page: "1" },
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTZjYTRhMTJiNmY4YzY5YTE5NjZlM2RhMGM1NWNlMiIsInN1YiI6IjY2MzRlZWRlYzA0NDI5MDEyNjhmMTg0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKSoqpW2Ks79mm3vQOufbvpeCaqq9n6RYlH5nFSbz3w",
      },
    })
    .then(({ data }) => data)
    .catch((err) => console.log(err));

  return data;
};
