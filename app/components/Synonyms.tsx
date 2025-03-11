export default function Synonyms({ meaningsSynonyms }: any) {
  return (
    <div className="flex">
      <span className="text-xl text-gray-400">Synonyms</span>
      {meaningsSynonyms?.map((meaning: any, index: number) => (
        <span key={index} className="text-xl text-purple-500 mx-4 font-bold">
          {meaning}
        </span>
      ))}
    </div>
  );
}