import React, {useCallback} from "react";
import * as S from './index.styles'

type BookmarkProps = {
  handleOnClick:()=>void
}

const BookmarkButton = (props: BookmarkProps) => {
  const {handleOnClick} = props
  return (
    <>
      <S.BookmarkArea>
        <button onClick={handleOnClick}>{'❤'
        }</button>
      </S.BookmarkArea>
    </>
  )
};

export default BookmarkButton;
