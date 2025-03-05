"use client"
import useJobs from "@/hooks/useJobs";
import useJobStore from "@/store/job.store";
import React from "react";
import JobCard from "./JobCard";

const JobContent = () => {
  const jobs = useJobs();
  const { setSelectedJob } = useJobStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
      ))}
    </div>
  );
};

export default JobContent;
