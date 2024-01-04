import React from "react";
import JobList from "./Jobs";
import SideNav from "./SideNav";

const Body = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-1/4">
        <SideNav />
      </div>
      <div className="w-3/4 m-4">
        <JobList />
      </div>
    </div>
  );
};

export default Body;
