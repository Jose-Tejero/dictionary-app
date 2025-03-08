import MeaningList from "./MeaningList";
import Synonyms from "./Synonyms";

export default function PartOfSpeach() {
  return (
    <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">Titulo de la parte del discurso</h3>
        <MeaningList />
        <Synonyms />
        <h3 className="text-2xl font-bold">Ejemplos de uso (si aplica)</h3>
    </div>
  );
}