import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Sidebar from "./Sidebar";

function ParentComponent({ filteredJobs }) {
  return (
    <div className="w-full flex">
      <Sidebar className="w-3/2" />
      <JobList filteredJobs={filteredJobs} />
    </div>
  );
}

export default ParentComponent;
