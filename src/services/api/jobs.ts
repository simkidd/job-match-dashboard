import { Job } from "@/interfaces/job.interface";
import instance from "../axios";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await instance.get("/api/jobs.json");
  return response.data;
};
