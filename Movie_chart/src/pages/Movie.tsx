import { useState, useEffect } from "react";
import { Movie } from "../types/movie";
import type { MovieResponse } from "../types/movie";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      // 응답에 대한 타입을 정의해줍니다.
      const { data } = await axios.get<MovieResponse>(
        `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNiNmEwMDRmZmMzYmJlNDdiMTk0NDM0ZTcyODIyMyIsIm5iZiI6MTc0NTM3MDY3Mi4zMjUsInN1YiI6IjY4MDgzZTMwNmUxYTc2OWU4MWVlY2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjR-TR-HmGdKEvU53BY-GtY_VjoNEXa6imFcf_A3IbY`,
          },
        }
      );

      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center flex-wrap gap-3">
      {movies?.map(({ poster_path, original_title, overview }) => (
        <MovieCard
          imgUrl={poster_path}
          title={original_title}
          description={overview}
        />
      ))}
    </div>
  );
};

export default MoviesPage;
