interface Subject {
  name: string;
  topics: string[];
}

interface SubjectTableProps {
  subjects: Subject[];
}

export default function SubjectTable({ subjects }: SubjectTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 p-2 text-left">
              MBA Subject
            </th>
            <th className="border border-gray-300 p-2 text-left">
              Topics Covered
            </th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 p-2">{subject.name}</td>
              <td className="border border-gray-300 p-2">
                <ul className="list-disc pl-5">
                  {subject.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
