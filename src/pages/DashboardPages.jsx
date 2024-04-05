import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/menu/DashboardMenu";

const DashboardPages = () => {
  return (
    <>
      <div className="lg:flex ">
        <div className="bg-[#F8F8F8] min-h-full">
          <DashboardMenu />
        </div>
        <div className="md:flex-1 bg-[#F8F8F8]">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardPages;
