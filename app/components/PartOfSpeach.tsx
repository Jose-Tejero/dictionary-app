import MeaningList from "@/app/components/MeaningList";
import Synonyms from "@/app/components/Synonyms";

const PartOfSpeach = ({ partOfSpeach, meaningsDefinitions, meaningsSynonyms }: any) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-xl mx-auto gap-4">
      <div className="flex items-center">
        <h3 className="text-2xl font-bold italic">
          {partOfSpeach}
        </h3>
        <div className="border-b border-gray-100 w-full mx-3"></div>
      </div>
      {meaningsDefinitions && <MeaningList meaningsDefinitions={meaningsDefinitions} />}
      {meaningsSynonyms.length != 0 && <Synonyms meaningsSynonyms={meaningsSynonyms} />}
    </div>
  );
}

export default PartOfSpeach;