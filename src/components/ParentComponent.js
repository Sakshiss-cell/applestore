import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Sidebar from "./Sidebar";

function ParentComponent({ filteredJobs, handler }) {
  return (
    <div className="w-full flex">
      <Sidebar className="w-3/2" handler={handler} />
      <JobList filteredJobs={filteredJobs} />
    </div>
  );
}

export default ParentComponent;
