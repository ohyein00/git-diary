import React, {ReactNode, SetStateAction, useCallback} from "react";
import * as S from './index.styles'
import HashTag from "../../atoms/HashTag";
import {UseDeleteBookmark} from "../../../hooks/UseBookmark";
import {UseSetLocalStorage} from "../../../hooks/UseLocalStorage";
import {BookmarkStorageTypes} from "../../organism/SearchRepoContainer";
import {useNavigate} from "react-router-dom";

type BookmarkListProps = {
  bookmarkList:BookmarkStorageTypes|null
  setBookmarkList: React.Dispatch<SetStateAction<BookmarkStorageTypes|null>>;
  bookmarkKey:string;
  children?:ReactNode;
}

const BookmarkList = (props: BookmarkListProps) => {
  const {bookmarkList,children,setBookmarkList,bookmarkKey} = props
  const navigate = useNavigate()
  // 북마크 삭제
  const deleteBookmark = useCallback((item:string)=>{
    const curBookmark = UseDeleteBookmark(bookmarkKey, item)
    UseSetLocalStorage(bookmarkKey,curBookmark)
    setBookmarkList(curBookmark)
  },[])
  return (
    <S.Container>
      {
        bookmarkList?.map((item)=>
          <HashTag handleNavigate={()=>navigate(`bookmark/${item}`)}
                   handleOnClick={()=>deleteBookmark(item)} name={item} key={item} icon="❌"/>
        )
      }
    </S.Container>
  )
};

export default BookmarkList;
