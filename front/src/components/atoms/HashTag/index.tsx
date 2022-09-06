import React, {useCallback} from "react";
import * as S from './index.styles'
import {useNavigate} from "react-router-dom";
type HashTagProps = {
  handleOnClick:()=>void;
  name:string;
}

const HashTag = (props: HashTagProps) => {
  const {handleOnClick,name} = props
  const navigate = useNavigate()
  return (
    <>
      <S.Container>
        <S.TagName onClick={()=>navigate(`bookmark/${name}`)}>
          {name}
        </S.TagName>
        <S.DeleteButton onClick={handleOnClick}>
          ❌
        </S.DeleteButton>
      </S.Container>
    </>
  )
};

export default HashTag;
