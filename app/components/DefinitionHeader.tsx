import BaselinePlayArrowIcon from "@/app/icons/BaselinePlayArrowIcon";
import { Word, Phonetic } from "@/app/types/Word";
import { useEffect, useState } from "react";

interface DefinitionHeaderProps {
  word: string | null;
  phonetic: string | null;
  phonetics: Phonetic[];
}

const DefinitionHeader = ({ word, phonetic, phonetics }: DefinitionHeaderProps) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  useEffect(() => {
    if (phonetics && phonetics.length > 0 && phonetics[0].audio) {
      setAudioUrl(phonetics[0].audio);
    }
  }, [phonetics]);

  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold">{word ? word : "..."}</h1>
        <h3 className="text-purple-500">{phonetic ? phonetic : "..."}</h3>
      </div>
      <button
        className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center text-purple-500 text-sm cursor-pointer"
        onClick={playAudio}
        disabled={phonetics[0].audio ? false : true}
      >
        <BaselinePlayArrowIcon />
      </button>
    </div>
  );
};

export default DefinitionHeader;