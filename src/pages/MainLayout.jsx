import { Outlet } from "react-router-dom";
import Footer from "../shared/Header/Footer/Footer";
import Header from "../shared/Header/Header";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
