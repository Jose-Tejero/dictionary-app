import BaselinePlayArrowIcon from "../icons/BaselinePlayArrowIcon";

export default function DefinitionHeader() {
  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold">keyboard</h1>
        <h3 className="text-purple-500">/ki-bo/</h3>
      </div>
      <button className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center text-purple-500 text-sm cursor-pointer">
        <BaselinePlayArrowIcon />
      </button>
    </div>
  );
}
