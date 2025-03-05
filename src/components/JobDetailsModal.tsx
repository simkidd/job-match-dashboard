"use client"
import useJobStore from "@/store/job.store";

const JobDetailsModal = () => {
  const { selectedJob, setSelectedJob } = useJobStore();
  const userSkills = useJobStore((state) => state.user.skills);

  if (!selectedJob) return null;

  const missingSkills = selectedJob.requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  const handleApply = () => {
    if (missingSkills.length > 0) {
      alert(`You need to learn: ${missingSkills.join(", ")}`);
    } else {
      alert("Application submitted!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
        <p className="text-gray-600">
          {selectedJob.company} - {selectedJob.location}
        </p>
        <p className="text-gray-700">{selectedJob.salary}</p>
        <div className="mt-4">
          <h3 className="font-bold">Required Skills:</h3>
          <ul className="list-disc list-inside">
            {selectedJob.requiredSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleApply}
        >
          Apply Now
        </button>
        <button
          className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => setSelectedJob(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
