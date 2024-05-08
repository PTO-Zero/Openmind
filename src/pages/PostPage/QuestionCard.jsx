import React from 'react';
import thumbsButton from '../../assets/icon-thumbs-up.svg';
import thumbsDownButton from '../../assets/icon-thumbs-down.svg';
import Questions from './component/Questions';
import AnswersForm from './component/AnswersForm';

function QuestionCard({question}) {
  return (
    <div className='flex flex-col p-[32px] w-[684px] bg-[#FFFFFF] rounded-[16px] gap-[32px]'>
      {question.answer ? 
      <div className='w-[61px] h-[26px] p-[4px 12px] gap-[10px] rounded-lg border-2 border-indigo-600 border-solid border-[var(--Brown-40)]'>
        <div className='text-[14px] font-medium text-center text-[var(--Brown-40)]'>
          답변
        </div>
      </div>
        : 
      <div className='w-[61px] h-[26px] p-[4px 12px] gap-[10px] rounded-lg border-2 border-indigo-600 border-solid border-[var(--Grayscale-40)]'>
        <div className='text-[14px] font-medium text-center text-[var(--Grayscale-40)]'>
          미답변
        </div>
      </div>}
      <div>
        <span className='text-[14px] text-[500] text-[var(--Grayscale-40)]'>질문 * 기간</span>
        <Questions id={question.id} question={question} /> 
      </div>
      {!question.answer ? <div className='flex'>
        <img src="" alt="프로필 사진" />
        <div className='flex flex-col'>
          <h3>작성자 {question.answer && <span>기간</span>}</h3>
          <AnswersForm question={question} />
        </div> 
      </div> : <>
      <div className='flex'>
        <img src="" alt="프로필 사진" />
        <div className='flex flex-col'>
          <h3>작성자 <span className='text-[14px] text-[500] text-[var(--Grayscale-40)]'>기간</span></h3>
          {question.answer.content}
        </div> 
      </div>
      </>}
      <div className='flex items-center gap-[32px]'>
        <div className='flex gap-[6px]'>
          <img className='w-[24px] h-[24px] cursor-pointer' src={thumbsButton} alt="좋아요 버튼" />
          <span>좋아요</span>
        </div>
        <div className='flex gap-[6px]'>
          <img className='w-[24px] h-[24px] cursor-pointer' src={thumbsDownButton} alt="싫어요 버튼" />
          <span>싫어요</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;