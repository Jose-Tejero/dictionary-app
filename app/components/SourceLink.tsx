import ExternalLinkIcon from "@/app/icons/ExternalLinkIcon";

const SourceLink = ({sourceLink}: any) => {
  return (
    <div className="flex items-center w-full max-w-xl mx-auto gap-4 text-gray-500">
      Source
      <a href={sourceLink} target="_blank" className="text-purple-500 underline">
        {sourceLink}
      </a>
      <ExternalLinkIcon />
    </div>
  );
}

export default SourceLink;