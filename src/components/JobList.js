import React from "react";
import appleimg from "../appleimg.png";

function JobList({ filteredJobs }) {
  return (
    <div className="bg-customDarkBlue p-2  rounded-lg flex-grow m-4">
      <div className="text-white">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="w-full rounded-3xl shadow-md mb-2 " key={job.title}>
              <div className="bg-customBlueGray text-white rounded-md flex items-center p-4">
                <div className="flex items-center flex-grow">
                  <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md mr-4">
                    <img src={appleimg} alt="" className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <h1 className="text-xl font-semibold">{job.title}</h1>
                    </div>
                    <div className="flex items-center mb-2">
                      <h2 className="text-sm">{job.company}</h2>
                    </div>
                    <div className="flex items-center">
                      <h3 className="text-sm">{job.location}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-600 p-2 flex justify-between align-middle">
                <p className="text-gray-400">
                  Posted 1 day ago • 10 applicants
                </p>
                <button className="bg-customBlue w-20 p-2 h-10 hover:bg-blue-600 text-white font-bold rounded-full">
                  Apply
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No jobs found</p>
        )}
      </div>
    </div>
  );
}

export default JobList;
