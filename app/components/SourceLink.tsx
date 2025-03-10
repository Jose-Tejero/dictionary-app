import ExternalLinkIcon from "../icons/ExternalLinkIcon";

export default function SourceLink() {
  return (
    <div className="flex items-center w-full max-w-xl mx-auto gap-4 text-gray-500">
      Source
      <a href="" target="_blank" className="text-purple-500 underline">
        Link here
      </a>
      <ExternalLinkIcon />
    </div>
  );
}
