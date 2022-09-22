import React, {useCallback, useEffect, useState} from "react";
import * as S from './index.styles'
import {SearchRepoDto} from "../../../types/repoTypes";
import RepoBox from "../../molcules/RepoBox";
import SearchContainer from "../../molcules/SearchContainer";
import {searchApi} from "../../../service/searchApi";
import {UseGetBookmark, UseCheckBookmark, UseAddBookmark} from "../../../hooks/UseBookmark";
import BookmarkList from "../../molcules/BookmarkList";
import {UseSetLocalStorage} from "../../../hooks/UseLocalStorage";
import BookmarkButton from "../../atoms/BookmarkButton";
import {useNavigate} from "react-router-dom";
import {bookmarkKey} from "../../../constants/localStorageKey";

import HashTag from "../../atoms/HashTag";
import {UsePageDivide} from "../../../hooks/UsePageDivide";

type RepoBoxContainerProps = {}
export type BookmarkStorageTypes = string[]


const SearchRepoContainer = (props: RepoBoxContainerProps) => {
  const [currentSearchWord, setCurrentSearchWord] = useState('')
  const [repoItems, setRepoItems] = useState<SearchRepoDto[][] | null>(null)
  const [bookmarkList, setBookmarkList] = useState<BookmarkStorageTypes | null>(null)
  const [curPage,setCurPage] = useState(0)
  const navigate = useNavigate()

  /* 검색결과 출력 */
  useEffect(() => {
    (async () => {
      try {
        if (currentSearchWord) {
          const searchResponse = await searchApi<{ items: SearchRepoDto[] }>({q: currentSearchWord})
          const divideItems = UsePageDivide<SearchRepoDto>(searchResponse.items,10)
          console.log(divideItems)
          setRepoItems(divideItems)
        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [currentSearchWord])

  useEffect(() => {
    const prevBookmark = UseGetBookmark(bookmarkKey)
    setBookmarkList(prevBookmark)
  }, [])
  const handleBookmark = useCallback((item: string) => {
    const prevBookmark = UseGetBookmark(bookmarkKey)
    if (prevBookmark && prevBookmark.length >= 4) {
      alert('4개 이상 등록할 수 없습니다')
      return
    }
    if (prevBookmark) {
      const bookmarkState = UseCheckBookmark(item, prevBookmark)
      console.log(bookmarkState)
      if (bookmarkState) {
        alert('이미 북마크 된 레포지토리입니다.')
        return
      }
    }
    const curBookmark = UseAddBookmark(bookmarkKey, item)
    UseSetLocalStorage(bookmarkKey, curBookmark)
    setBookmarkList(curBookmark)
  }, [])
  const paginationOnclick = useCallback((num:number)=>{
    setCurPage(num)
  },[])
  return (
    <S.Container>
      <S.TopWrapper>
        <SearchContainer setCurrentSearchWord={setCurrentSearchWord}/>

        <HashTag handleNavigate={() => navigate('/bookmark/all')}
                 name="이슈 모아보기" icon='📃'
                 bgColor='dark'/>
      </S.TopWrapper>
      <BookmarkList bookmarkList={bookmarkList}
                    setBookmarkList={setBookmarkList}
                    bookmarkKey={bookmarkKey}
      />
      <S.RepoBoxGroup>
        <>
        {repoItems && repoItems.length > 0 ?
          repoItems[curPage].map((item) =>
            <S.RepoBoxContainer key={item.id}>
              <RepoBox title={'레포지토리'} name={item.full_name}
                       content={item.description}
                       handleNavigate={() => navigate(`/bookmark/${item.full_name}`)}>
                <BookmarkButton handleOnClick={() => handleBookmark(item.full_name)}/>
              </RepoBox>
            </S.RepoBoxContainer>
          )
          : repoItems && repoItems.length === 0 && (
          <S.RepoBoxContainer>
            검색 결과가 없습니다
          </S.RepoBoxContainer>
        )
        }

        </>
      </S.RepoBoxGroup>
      <>
        {
          repoItems?.map((_,index)=>{
            return <button onClick={()=>paginationOnclick(index)}>{index + 1}</button>
          })
        }</>
    </S.Container>
  )
};

export default SearchRepoContainer;
