import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Container = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Container;
