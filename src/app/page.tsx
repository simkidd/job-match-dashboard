import JobContent from "@/components/JobContent";
import JobDetailsModal from "@/components/JobDetailsModal";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Job Match Dashboard</h1>
      <JobContent />
      <JobDetailsModal />
    </div>
  );
}
