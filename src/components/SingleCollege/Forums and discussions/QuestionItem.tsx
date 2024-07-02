import React from "react";

interface QuestionItemProps {
  question: {
    id: number;
    question: string;
    askedBy: string;
    answers: {
      id: number;
      author: string;
      content: string;
      postedOn: string;
    }[];
  };
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">{question.question}</h3>
      <p className="text-sm text-gray-600 mb-4">Asked by {question.askedBy}</p>
      <div className="bg-white p-4 rounded-lg">
        <input
          type="text"
          placeholder="Type your answer here"
          className="w-full p-2 border rounded mb-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Post answer
        </button>
      </div>
      {question.answers.map((answer) => (
        <div key={answer.id} className="mt-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
              {answer.author[0]}
            </div>
            <span className="font-semibold">{answer.author}</span>
          </div>
          <p className="text-gray-700">{answer.content}</p>
          <p className="text-sm text-gray-500 mt-2">
            Posted On: {answer.postedOn}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuestionItem;
