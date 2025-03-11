import BaselinePlayArrowIcon from "@/app/icons/BaselinePlayArrowIcon";
import { Word } from "@/app/types/Word";

interface DefinitionHeaderProps {
  word: Word | null;
}

const DefinitionHeader = ({ word, phonetic }: any) => {
  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold">
          {word ? word : "..."}
        </h1>
        <h3 className="text-purple-500">
          {phonetic ? phonetic : "..."}
        </h3>
      </div>
      <button className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center text-purple-500 text-sm cursor-pointer">
        <BaselinePlayArrowIcon />
      </button>
    </div>
  );
}

export default DefinitionHeader;