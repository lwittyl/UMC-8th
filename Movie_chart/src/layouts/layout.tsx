import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageBar from "../components/PageBar";
import routes from "../routes/routes";
const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === routes.home;
  const isDetail = location.pathname.includes("detail");
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      {!isHome && !isDetail && <PageBar />}
      <div className={isHome ? "mt-8" : ""}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
