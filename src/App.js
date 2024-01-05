import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import ParentComponent from "./components/ParentComponent";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetch("http://demo7220488.mockable.io/")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.jobs);
        setFilteredJobs(data.jobs); // Initially set filtered jobs to all jobs
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleSearch = (input) => {
    const filteredData = jobs.filter(job =>
      job.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredJobs(filteredData);
  };


  return (
    <div className="bg-customDarkBlue">
      <Navbar onSearch={handleSearch} />
      <ParentComponent filteredJobs={filteredJobs} />
    </div>
  );
};

export default App;
