export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg shadow-lg p-2 w-1/2 placeholder:text-gray-400 dark:placeholder:text-gray-400"
      />
      <button className="rounded-lg shadow-lg p-2 bg-blue-500 text-white ml-2">
        Search
      </button>
    </div>
  );
}