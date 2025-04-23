import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

type NavType = {
  isActive: boolean;
};
const getNavLinkClass = ({ isActive }: NavType) =>
  `decoration-0 ${isActive ? "text-white font-bold text-xl" : "text-white"}`;
const firstPage = "?page=1";
const NavBar = () => {
  return (
    <nav className="w-full h-15 bg-black flex items-center p-4">
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to={routes.home} className={getNavLinkClass}>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.popularLink + firstPage}
            className={getNavLinkClass}
          >
            인기영화
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.nowPlayingLink + firstPage}
            className={getNavLinkClass}
          >
            상영 중
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.topRatedLink + firstPage}
            className={getNavLinkClass}
          >
            평점 높은
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.upcomingLink + firstPage}
            className={getNavLinkClass}
          >
            개봉 예정
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
