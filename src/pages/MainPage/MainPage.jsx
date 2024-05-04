<<<<<<< HEAD
import React, { useState } from 'react';
import logoImage from '../../assets/img-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { createCard } from '../../api/api';
import { setLocalStorage } from '../../util/localStorage';
=======
import React, { useState } from "react";
import logoImage from "../../assets/img-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { createQuestionCard } from "../../api/api";
import { setLocalStorage } from "../../util/localStorage";
>>>>>>> dev

function MainPage() {
  const [nickName, setNickName] = useState(null);

  const nav = useNavigate();

  const checkIsNickName = () => {
    return nickName;
  };

  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onMovePost = () => {
    const isNickName = checkIsNickName();
    if (isNickName) {
<<<<<<< HEAD
      createCard(nickName).then(result => {
        setLocalStorage(result.id, result.name);
        nav('/list');
      })
=======
      createQuestionCard(nickName).then((result) => {
        setLocalStorage(result.id, result.name);
        nav(`/post/${result.id}/answer`);
      });
>>>>>>> dev
    } else {
      alert("닉네임을 입력해주세요.");
    }
  };

  return (
<<<<<<< HEAD
    <div className='h-[100vh] flex justify-center items-center bg-[#F5F1EE]'>
      <div className='w-[100%] bg-main2 h-[75%]'>
        <div className='flex flex-col items-center mx-auto w-[1200px] h-full bg-main2 bg-cover gap-[15px]'>
          <img src={logoImage} alt="로고 이미지" />
          <Link to='/list'>
            <button className='absolute flex justify-center items-center w-[161px] h-[46px] rounded-[8px] py-[24px] px-[12px] border-[1px] border-[#542F1A] text-[16px] text-[#542F1A] font-[600] bg-[#F5F1EE] top-[5%] right-[10%]'>질문하러 가기 →</button>
=======
    <div className="flex flex-col">
      <div className="w-[1200px] h-[627px] bg-main2 bg-cover pt-[3%]">
        <div className="flex flex-col mt-[60px] mx-auto w-[456px] gap-[15px]">
          <img src={logoImage} alt="로고 이미지" />
          <Link to="/list?page=1&sort=createdAt">
            <button className="absolute w-[161px] h-[46px] rounded-[8px] py-[24px] px-[12px] border-[1px] text-[16px] text-[#542F1A] justify-center items-center font-[400] bg-[#F5F1EE] top-[25px] left-[909px]">
              질문하러 가기 →
            </button>
>>>>>>> dev
          </Link>
          <form className="flex flex-col items-center gap-y-[16px] w-[440px] rounded-[16px] p-[32px] bg-[#FFFFFF]">
            <input
              className="w-[336px] h-[46px] rounded-[8px] py-[12px] px-[16px] border-[1px] border-[#818181] text-[16px] text-[#818181] font-[400]"
              onChange={handleChangeNickName}
              type="text"
              placeholder="이름을 입력하세요"
            />
            <button
              className="w-[336px] h-[46px] rounded-[8px] py-[12px] px-[24px] bg-[#542F1A] text-[16px] text-[#FFFFFF] font-[400]"
              onClick={onMovePost}
              type="submit"
            >
              질문 받기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainPage;