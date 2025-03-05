"use client"
import { fetchJobs } from "@/services/api/jobs";
import useJobStore from "@/store/job.store";
import { useEffect } from "react";

const useJobs = () => {
  const { jobs, setJobs } = useJobStore();

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, [setJobs]);

  return jobs;
};

export default useJobs;
