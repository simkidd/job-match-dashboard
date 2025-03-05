interface MatchScoreProps {
  score: number;
}

const MatchScore = ({ score }: MatchScoreProps) => {
  const color =
    score >= 80 ? 'bg-green-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${score}%` }}
      ></div>
    </div>
  );
};

export default MatchScore;