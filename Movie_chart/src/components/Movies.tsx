import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Loading from "../assets/lotties/loading.json";
import { Movie } from "../types/movie";
import type { MovieResponse } from "../types/movie";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const path = location.pathname;
  let type = path.replace("/movies/", "");
  if (type === "/") type = "popular";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const handleClick = (id: number) => {
    navigate(`/movies/detail/${id}`);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get<MovieResponse>(
          `https://api.themoviedb.org/3/movie/${type}?language=ko-KR&page=${page}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNiNmEwMDRmZmMzYmJlNDdiMTk0NDM0ZTcyODIyMyIsIm5iZiI6MTc0NTM3MDY3Mi4zMjUsInN1YiI6IjY4MDgzZTMwNmUxYTc2OWU4MWVlY2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjR-TR-HmGdKEvU53BY-GtY_VjoNEXa6imFcf_A3IbY`,
            },
          }
        );
        setMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [type, page]);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-50 h-50 flex justify-center items-center">
        <Lottie animationData={Loading} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-1/2 text-red-600 text-5xl flex justify-center items-center">
        Error
      </div>
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center flex-wrap gap-3">
      {movies?.map(({ poster_path, original_title, overview, id }) => (
        <div className="cursor-pointer" onClick={() => handleClick(id)}>
          <MovieCard
            key={original_title}
            imgUrl={poster_path}
            title={original_title}
            description={overview}
          />
        </div>
      ))}
    </div>
  );
};

export default Movies;
