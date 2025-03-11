'use client';
import SettingsBar from "@/app/components/SettingsBar";
import DefinitionHeader from "@/app/components/DefinitionHeader";
import PartOfSpeach from "@/app/components/PartOfSpeach";
import SearchBar from "@/app/components/SearchBar";
import SourceLink from "@/app/components/SourceLink";
import { useState } from "react";

const Home = () => {
  const [word, setWord] = useState(null);
  const [phonetic, setPhonetic] = useState(null);
  const [meanings, setMeanings] = useState<any[]>([]);
  const [sourceLink, setSourceLink] = useState(null);
  const wordDatas = (data: any) => {
    console.log(data);
    setWord(data[0]?.word);
    setPhonetic(data[0]?.phonetic);
    setMeanings(data[0]?.meanings);
    setSourceLink(data[0]?.sourceUrls[0]);
  };

  return (
    <main className="bg-white dark:bg-slate-950 text-black dark:text-white transition">
      <div className="flex flex-col items-center h-content mx-auto p-4 gap-6">
        <SettingsBar />
        <SearchBar wordDatas={wordDatas} />
        <DefinitionHeader word={word} phonetic={phonetic} />
        {meanings &&
          meanings.map((meaning: any, index: number) => (
            <PartOfSpeach key={index} partOfSpeach={meaning.partOfSpeech} meaningsDefinitions={meaning.definitions} meaningsSynonyms={meaning.synonyms} />
          ))}
        <SourceLink sourceLink={sourceLink} />
      </div>
    </main>
  );
}

export default Home;