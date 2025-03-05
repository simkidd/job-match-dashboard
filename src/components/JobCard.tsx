import { Job } from "@/interfaces/job.interface";
import MatchScore from "./MatchScore";

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
  const { title, company, location, salary, matchScore } = job;

  return (
    <div
      className="p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{company} - {location}</p>
      <p className="text-gray-700">{salary}</p>
      <MatchScore score={matchScore} />
    </div>
  );
};

export default JobCard;