type IPositionSummary = {
  summary?: string;
  highlights?: string[];
};

export function PositionSummary({ summary, highlights }: IPositionSummary) {
  return (
    <div className="mb-4">
      {summary && (
        <div>
          <h2 className="font-normal block border-b border-b-red-100 mb-2 pb-0">
            Responsibilities
          </h2>
          <p>{summary}</p>
        </div>
      )}

      {highlights && (
        <div className="py-6">
          <div>Highlights: </div>
          <ul>
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
