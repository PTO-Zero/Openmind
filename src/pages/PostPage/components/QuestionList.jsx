import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

function QuestionList({ questionData }) {
  // 질문 필터 (all, answered, unanswered)
  const [displayMode, setDisplayMode] = useState('all');

  return (
    <>
      {questionData.length !== 0 && (
        <div className="w-[275px] md:w-[652px] flex justify-end gap-3 mr-3 mb-3 md:gap-5 md:mr-5 md:mb-5">
          <button
            onClick={() => setDisplayMode('all')}
            className={`text-base font-normal ${displayMode === 'all' ? 'text-[var(--Blue-50)]' : 'text-[var(--Brown-40)]'}`}
          >
            모든 질문
          </button>
          <button
            onClick={() => setDisplayMode('answered')}
            className={`text-base font-normal ${displayMode === 'answered' ? 'text-[var(--Blue-50)]' : 'text-[var(--Brown-40)]'}`}
          >
            답변 완료
          </button>
          <button
            onClick={() => setDisplayMode('unanswered')}
            className={`text-base font-normal ${displayMode === 'unanswered' ? 'text-[var(--Blue-50)]' : 'text-[var(--Brown-40)]'}`}
          >
            미답변
          </button>
        </div>
      )}

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
