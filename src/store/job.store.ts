import { Job } from "@/interfaces/job.interface";
import { User } from "@/interfaces/user.interface";
import { create } from "zustand";

interface StoreState {
  jobs: Job[];
  user: User;
  setJobs: (jobs: Job[]) => void;
  selectedJob: Job | null;
  setSelectedJob: (job: Job | null) => void;
}

const useJobStore = create<StoreState>((set) => ({
  jobs: [],
  user: { skills: ["React", "JavaScript", "CSS"] }, // Mock user skills
  setJobs: (jobs) => set({ jobs }),
  selectedJob: null,
  setSelectedJob: (job) => set({ selectedJob: job }),
}));

export default useJobStore;
