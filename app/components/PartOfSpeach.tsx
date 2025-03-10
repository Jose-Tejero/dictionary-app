import MeaningList from "./MeaningList";
import Synonyms from "./Synonyms";

export default function PartOfSpeach() {
  return (
    <div className="flex flex-col justify-center w-full max-w-xl mx-auto gap-4">
      <div className="flex items-center">
        <h3 className="text-2xl font-bold italic">noun</h3>
        <div className="border-b border-gray-100 w-full mx-3"></div>
      </div>
      <MeaningList />
      <Synonyms />
      <div className="flex items-center">
        <h3 className="text-2xl font-bold italic">verb</h3>
        <div className="border-b border-gray-100 w-full mx-3"></div>
      </div>
      <MeaningList />
    </div>
  );
}
