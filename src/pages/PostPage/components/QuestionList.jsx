import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

function QuestionList({ questionData }) {
  // 질문 필터 (all, answered, unanswered)
  const [displayMode, setDisplayMode] = useState('all');

  if (!questionData || !questionData.length === 0) {
    return <div>No questions to display</div>; // 질문이 없는 경우 메시지를 출력하거나 아무것도 렌더링하지 않습니다.
  }
  return (
    <>
      <div className="flex justify-end gap-[20px] mr-[20px] mb-[20px] ">
        <button
          onClick={() => setDisplayMode('all')}
          className={` ${displayMode === 'all' ? 'text-[#1877f2]' : 'text-[#000000]'}`}
        >
          모든 질문
        </button>
        <button
          onClick={() => setDisplayMode('answered')}
          className={` ${displayMode === 'answered' ? 'text-[#1877f2]' : 'text-[#000000]'}`}
        >
          답변
        </button>
        <button
          onClick={() => setDisplayMode('unanswered')}
          className={` ${displayMode === 'unanswered' ? 'text-[#1877f2]' : 'text-[#000000]'}`}
        >
          미답변
        </button>
      </div>
      <div>
        {displayMode === 'all' && (
          <ul>
            {questionData.map((question) => (
              <li key={question.id}>
                <QuestionCard question={question} />
              </li>
            ))}
          </ul>
        )}
        {displayMode === 'answered' && (
          <ul>
            {questionData.map((question) => (
              <li key={question.id}>
                {question.answer && <QuestionCard question={question} />}
              </li>
            ))}
          </ul>
        )}
        {displayMode === 'unanswered' && (
          <ul>
            {questionData.map((question) => (
              <li key={question.id}>
                {!question.answer && <QuestionCard question={question} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default QuestionList;
