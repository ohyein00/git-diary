import React, {useCallback,SetStateAction,ChangeEvent} from "react";
import * as S from "./index.styles";
import {Input} from "./index.styles";

type TextInputProps = {
  setInputState: React.Dispatch<SetStateAction<string>>;
}
const TextInput = ({setInputState}:TextInputProps) => {
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    setInputState(e.target.value)
  },[])
  return(
    <>
      <S.Input onChange={onChange} type="text" name="repo-q" id="search-repo-input" placeholder="레포지터리 이름을 입력해주세요"/>
    </>
  )
};

export default TextInput;
