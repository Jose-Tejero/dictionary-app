export default function MeaningList({meaningsDefinitions}: any) {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl text-gray-400">Meaning</h3>
      <ol className="list-disc pl-8 text-gray-600">
        {meaningsDefinitions?.map((meaning: any, index: number) => (
          <li key={index} className="mb-2">
            {meaning.definition}
          </li>
        ))}
      </ol>
    </div>
  );
}
