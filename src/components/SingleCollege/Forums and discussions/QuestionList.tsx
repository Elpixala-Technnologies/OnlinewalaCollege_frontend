import React from "react";
import QuestionItem from "./QuestionItem";

interface Question {
  id: number;
  question: string;
  askedBy: string;
  answers: {
    id: number;
    author: string;
    content: string;
    postedOn: string;
  }[];
}

interface QuestionListProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
