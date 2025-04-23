import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Loading from "../assets/lotties/loading.json";
import type { CreditData, MovieDetail } from "../types/movie";
import axios from "axios";
const MovieDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [creditData, setCreditData] = useState<CreditData>();
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get<MovieDetail>(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNiNmEwMDRmZmMzYmJlNDdiMTk0NDM0ZTcyODIyMyIsIm5iZiI6MTc0NTM3MDY3Mi4zMjUsInN1YiI6IjY4MDgzZTMwNmUxYTc2OWU4MWVlY2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjR-TR-HmGdKEvU53BY-GtY_VjoNEXa6imFcf_A3IbY`,
            },
          }
        );
        setMovieDetail(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchCredit = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data: credit } = await axios.get<CreditData>(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjNiNmEwMDRmZmMzYmJlNDdiMTk0NDM0ZTcyODIyMyIsIm5iZiI6MTc0NTM3MDY3Mi4zMjUsInN1YiI6IjY4MDgzZTMwNmUxYTc2OWU4MWVlY2MyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjR-TR-HmGdKEvU53BY-GtY_VjoNEXa6imFcf_A3IbY`,
            },
          }
        );
        setCreditData(credit);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    fetchCredit();
  }, [id]);

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
    <div className="bg-black min-h-screen p-4">
      <div className="relative w-full h-100 bg-white rounded-xl overflow-hidden">
        <img
          src={baseUrl + movieDetail?.poster_path}
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black">
          <div className="h-full w-180 flex flex-col gap-4 p-4 text-white border-b-2 border-b-white">
            <p className=" text-3xl font-medium">{movieDetail?.title}</p>
            <p>
              평점: {Math.round(Number(movieDetail?.vote_average) * 100) / 100}
            </p>
            <p>{movieDetail?.release_date.slice(0, 4)}</p>
            <p>{movieDetail?.runtime}분</p>
            <p className=" text-xl font-medium italic line-clamp-5">
              {movieDetail?.tagline}
            </p>
            <p>{movieDetail?.overview}</p>
          </div>
        </div>
      </div>
      <div className="h-full w-full p-4">
        <p className="text-white text-3xl font-semibold mb-8">감독/출연</p>
        <div className="flex justify-center flex-wrap gap-10">
          {creditData?.cast.map(({ name, character, profile_path }) => {
            return (
              <div className="flex flex-col justify-start items-center gap-4 text-white">
                <div className="w-40 h-40 rounded-full self-center overflow-hidden border border-white">
                  <img
                    src={baseUrl + profile_path}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="w-40 text-center">{name}</p>
                <p className="w-40 text-center text-gray-500">{character}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
