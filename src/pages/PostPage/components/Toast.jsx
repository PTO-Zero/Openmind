import React from 'react';

function Toast({ show }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      {show && 
        <span className='fixed bg-[#000000] rounded-[8px] py-[12px] px-[20px] text-[14px] text-[#FFFFFF] font-[500]'>URL이 복사되었습니다.</span>}
    </div>
  )
};

export default Toast;