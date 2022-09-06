import React, {SetStateAction,useState} from "react";
import * as S from './index.styles'
import TextInput from "../../atoms/TextInput";

type SearchContainerProps = {
  setCurrentSearchWord: React.Dispatch<SetStateAction<string>>;
}
const SearchContainer = (props: SearchContainerProps) => {
  const {setCurrentSearchWord} = props
  const [searchWord,setSearchWord] = useState('')
  const handleSubmit = (e:any) => {
    //TODO : localStorage에 내북마크 저장
    //TODO : currentSearchRepo 변경
    e.preventDefault()
    setCurrentSearchWord(searchWord)
  }
  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.InputArea>
          <TextInput setInputState={setSearchWord}/>
          <S.SubmitButton type='submit'>검색</S.SubmitButton>
        </S.InputArea>
      </form>
    </S.Container>
  )
};

export default SearchContainer;
