import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageBar from "../components/PageBar";
import routes from "../routes/routes";
const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === routes.home;

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <NavBar />
      {!isHome && <PageBar />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
