import React, {SetStateAction, useCallback} from "react";
import * as S from './index.styles'
import HashTag from "../../atoms/HashTag";
import {UseDeleteBookmark} from "../../../hooks/UseBookmark";
import {UseSetLocalStorage} from "../../../hooks/UseLocalStorage";
import {BookmarkStorageTypes} from "../../organism/SearchRepoContainer";

type BookmarkListProps = {
  bookmarkList:BookmarkStorageTypes|null
  setBookmarkList: React.Dispatch<SetStateAction<BookmarkStorageTypes|null>>;
  bookmarkKey:string;
}

const BookmarkList = (props: BookmarkListProps) => {
  const {bookmarkList,setBookmarkList,bookmarkKey} = props
  // 북마크 삭제
  const deleteBookmark = useCallback((item:string)=>{
    const curBookmark = UseDeleteBookmark(bookmarkKey, item)
    UseSetLocalStorage(bookmarkKey,curBookmark)
    setBookmarkList(curBookmark)
  },[])
  return (
    <>
      {
        bookmarkList?.map((item)=>
          <HashTag handleOnClick={()=>deleteBookmark(item)} name={item} key={item}/>
        )
      }
    </>
  )
};

export default BookmarkList;
