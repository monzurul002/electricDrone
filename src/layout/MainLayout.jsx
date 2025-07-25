import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="px-10">
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
