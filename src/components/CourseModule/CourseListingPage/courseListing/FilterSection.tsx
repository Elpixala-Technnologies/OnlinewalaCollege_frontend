interface FilterProps {
  filters: {
    duration: string;
    mode: string;
  };
  setFilters: (filters: any) => void;
}

export default function FilterSection({ filters, setFilters }: FilterProps) {
  const durations = ["2 Years", "3 Years", "4 Years", "5 Years", "6 Years"];
  const modes = [
    "None",
    "Regular",
    "Regular/online",
    "Online",
    "Distance",
    "Others",
  ];

  return (
    <>
      <div className="bg-white p-5 rounded-lg border border-blue-300">
        <h2 className="font-bold mb-2">Duration</h2>
        {durations.map((duration) => (
          <div key={duration} className="mb-2">
            <input
              type="radio"
              id={duration}
              name="duration"
              checked={filters.duration === duration}
              onChange={() => setFilters({ ...filters, duration })}
            />
            <label htmlFor={duration} className="ml-2">
              {duration}
            </label>
          </div>
        ))}
      </div>
      <div className="bg-white p-5 rounded-lg border border-blue-300 mt-5">
        <h2 className="font-bold mt-4 mb-2">Mode</h2>
        {modes.map((mode) => (
          <div key={mode} className="mb-2">
            <input
              type="radio"
              id={mode}
              name="mode"
              checked={filters.mode === mode}
              onChange={() => setFilters({ ...filters, mode })}
            />
            <label htmlFor={mode} className="ml-2">
              {mode}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
