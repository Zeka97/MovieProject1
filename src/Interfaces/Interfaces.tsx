export interface MovieDescription {
  id: string | undefined;
  location: string | undefined;
}

export interface Genre {
  id: string | number | undefined;
  name: string;
}

export interface Languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Actor {
  adult: boolean;
  character: string;
  credit_id: string;
  gender: number | string;
  id: number | string;
  known_for_department: string;
  name: string;
  order: number | string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | undefined;
  genre_ids: Genre[];
  id: number | string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string | number;
  poster_path: string | undefined;
  release_date: string;
  title: string;
  video: false;
  vote_average: number | string;
  vote_count: number | string;
}

export interface MovieOrSeriesProps {
  movies: {
    page: number;
    results: Movie[];
    total_pages: number | string;
    total_results: number | string;
  };
  title: string;
  isMovieSelected: boolean;
}

export interface MovieBoxProps {
  movie: Movie;
  id: string;
  isMoviesSelected: boolean;
}
