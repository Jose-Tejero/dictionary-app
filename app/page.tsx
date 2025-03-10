import SettingsBar from "@/app/components/SettingsBar";
import DefinitionHeader from "@/app/components/DefinitionHeader";
import PartOfSpeach from "@/app/components/PartOfSpeach";
import SearchBar from "@/app/components/SearchBar";
import SourceLink from "@/app/components/SourceLink";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 text-black dark:text-white transition">
      <div className="flex flex-col items-center h-content mx-auto p-4 gap-6">
        <SettingsBar />
        <SearchBar />
        <DefinitionHeader />
        <PartOfSpeach />
        <SourceLink />
      </div>
    </main>
  );
}
