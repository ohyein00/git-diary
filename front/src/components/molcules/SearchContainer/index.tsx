import React, {SetStateAction, useCallback} from "react";
import * as S from './index.styles'
import TextInput from "../../atoms/TextInput";

type SearchContainerProps = {
  setCurrentSearchWord: React.Dispatch<SetStateAction<string>>;
}
const SearchContainer = (props: SearchContainerProps) => {
  const {setCurrentSearchWord} = props
  const onSubmit = useCallback(() => {
    //TODO : localStorage에 내북마크 저장
    //TODO : currentSearchRepo 변경
  }, [])
  return (
    <S.Container>
      <form onSubmit={onSubmit}>
        <TextInput setInputState={setCurrentSearchWord}/>
        <button type='submit'/>
      </form>
    </S.Container>
  )
};

export default SearchContainer;
