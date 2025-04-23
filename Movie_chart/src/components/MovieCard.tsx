type TMovieCard = {
  imgUrl: string;
  title: string;
  description: string;
};
const baseUrl = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ imgUrl, title, description }: TMovieCard) => {
  return (
    <div className="group relative w-50 h-80 overflow-hidden rounded-2xl">
      <img
        src={baseUrl + imgUrl}
        className=" w-full h-full object-cover group-hover:blur-sm"
      />
      <div className="absolute w-full top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:block p-4">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="mt-3 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
