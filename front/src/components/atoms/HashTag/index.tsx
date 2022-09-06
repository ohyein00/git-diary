import React, {useCallback} from "react";
import * as S from './index.styles'
import {useNavigate} from "react-router-dom";
type HashTagProps = {
  handleOnClick?:()=>void;
  name:string;
  icon?:string;
  bgColor?:string;
  handleNavigate?:()=>void;
}

const HashTag = (props: HashTagProps) => {
  const {handleOnClick,handleNavigate,name,icon,bgColor} = props
  return (
    <>
      <S.Container bgColor={bgColor}>
        <S.TagName onClick={handleNavigate}>
          {name}
        </S.TagName>
        <S.DeleteButton onClick={handleOnClick}>
          {icon}
        </S.DeleteButton>
      </S.Container>
    </>
  )
};

export default HashTag;
