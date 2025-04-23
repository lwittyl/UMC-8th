import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import routes from "./routes";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import TopRated from "../pages/TopRated";
import NowPlaying from "../pages/NowPlaying";
import Layout from "../layouts/layout";
import MovieDetail from "../pages/MovieDetail";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      { path: routes.home, element: <Home /> },
      {
        path: routes.movies,
        children: [
          { path: routes.popular, element: <Popular /> },
          { path: routes.upcoming, element: <Upcoming /> },
          { path: routes.topRated, element: <TopRated /> },
          { path: routes.nowPlaying, element: <NowPlaying /> },
          { path: routes.movieDetail, element: <MovieDetail /> },
        ],
      },
    ],
  },
]);
