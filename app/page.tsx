'use client';
import SettingsBar from "@/app/components/SettingsBar";
import DefinitionHeader from "@/app/components/DefinitionHeader";
import PartOfSpeach from "@/app/components/PartOfSpeach";
import SearchBar from "@/app/components/SearchBar";
import SourceLink from "@/app/components/SourceLink";
import { Word } from "./types/Word";
import { useState } from "react";

const Home = () => {
  const [word, setWord] = useState(null);
  const [phonetic, setPhonetic] = useState(null);
  const [meaningsDefinitions, setMeaningsDefinitions] = useState(null);
  const [meaningsSynonyms, setMeaningsSynonyms] = useState(null);
  const [partOfSpeach, setPartOfSpeach] = useState(null);
  const [meanings, setMeanings] = useState<any[]>([]);
  const wordDatas = (data: any) => {
    console.log(data);
    setWord(data[0]?.word);
    setPhonetic(data[0]?.phonetic);
    setMeanings(data[0]?.meanings);
    setMeaningsDefinitions(data[0]?.meanings[0].definitions);
    setMeaningsSynonyms(data[0]?.meanings[0].synonyms);
    setPartOfSpeach(data[0]?.meanings[0].partOfSpeech);
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
        <SourceLink />
      </div>
    </main>
  );
}

export default Home;