import React from "react";

interface DocumentsListProps {
  documents: string[];
}

const DocumentsList: React.FC<DocumentsListProps> = ({ documents }) => {
  return (
    <div>
      <h2 className="sm:text-xl font-bold mb-4">Documents Required</h2>
      <ul className="list-disc pl-6">
        {documents.map((doc, index) => (
          <li key={index} className="mb-2 sm:text-base text-sm">
            {doc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;
