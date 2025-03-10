import SearchIcon from "../icons/SearchIcon";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center w-full max-w-xl mx-auto">
      <div className="bg-gray-100 dark:bg-slate-800 flex items-center rounded-xl pl-3 -outline-offset-1 outline-purple-200 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-purple-200 transition-all w-full">
        <input
          type="text"
          placeholder="Search"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base bg-transparent p-2 w-full placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none"
        />
        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
          <div className="flex items-center justify-center w-8 h-8 text-purple-400">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
