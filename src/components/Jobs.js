import React, { useEffect, useState } from "react";
import appleimg from "../appleimg.png";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://demo7220488.mockable.io/")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.jobs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <div className=" text-white border-red-400 border-2">
        {jobs.map((e) => {
          return (
            <div className=" w-full  m-2 rounded-3xl">
              <div className="bg-gray-700 text-white border-blue-950 border-2  h-44 flex items-center p-4  m-2  pb-0 mb-0 shadow-md ">
                <div className="flex items-center flex-grow">
                  <div className="bg-white w-12 h-12 flex items-center justify-center rounded-md mr-4">
                    <img src={appleimg} alt="" className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <h1 className="text-xl font-semibold">{e.title}</h1>
                    </div>
                    <div className="flex items-center mb-2">
                      <h2 className="text-sm">{e.company}</h2>
                    </div>
                    <div className="flex items-center">
                      <h3 className="text-sm">{e.location}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-600 p-4 m-2 mt-0  h-14  flex justify-between align-middle">
                <p class="text-gray-400">Posted 1 day ago • 10 applicants</p>
                <button class="bg-blue-500 w-1/6 h-8 hover:bg-blue-600 text-white font-bold rounded-full">
                  Apply Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobList;
