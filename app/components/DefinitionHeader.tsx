export default function DefinitionHeader() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Dictionary</h1>
        <h3>Pronunciacion de la palabra</h3>
      </div>
      <button className="rounded-lg shadow-lg p-2 bg-blue-500 text-white ml-2">
        Play
      </button>
    </div>
  );
}
