import React from "react";
import Navbaritem from "./Navbaritem";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center lg:text-lg p-4">
      <Navbaritem title={"Trending"} para="fetchTrending" />
      <Navbaritem title={"Top Rated"} para="fetchTopRated" />
    </div>
  );
};

export default Navbar;
