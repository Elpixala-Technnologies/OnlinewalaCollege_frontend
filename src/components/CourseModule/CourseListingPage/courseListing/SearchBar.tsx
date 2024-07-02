export default function SearchBar() {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Search a course"
        className="flex-grow p-2 border rounded-l w-full"
      />
      <button className="bg-blue-500 text-white px-4 rounded-r">Sort</button>
    </div>
  );
}
