import React, {useEffect, useState} from "react";
import * as S from './index.styles'
import {SearchRepoDto} from "../../../types/repoTypes";
import RepoBox from "../../atoms/RepoBox";
import SearchContainer from "../../molcules/SearchContainer";
import {searchApi} from "../../../service/searchApi";
import {RepoBoxContainer, RepoBoxGroup} from "./index.styles";

type RepoBoxContainerProps = {}
const SearchRepoContainer = (props: RepoBoxContainerProps) => {
  const [currentSearchWord, setCurrentSearchWord] = useState('')
  const [repoItems, setRepoItems] = useState<SearchRepoDto[] | undefined>()
  useEffect(() => {
    (async () => {
      try {
        const searchResponse = await searchApi<{ items: SearchRepoDto[] }>({q: currentSearchWord})
        setRepoItems(searchResponse.items)
      } catch (e) {
        console.log(e)
      }
    })()
    console.log(currentSearchWord)
  }, [currentSearchWord])
  return (
    <S.Container>
      <SearchContainer setCurrentSearchWord={setCurrentSearchWord}/>
      <S.RepoBoxGroup>
        {repoItems &&
          repoItems?.map((item) =>
            <S.RepoBoxContainer>
              <RepoBox repoData={item} key={item.id}/>
            </S.RepoBoxContainer>
          )
        }
      </S.RepoBoxGroup>
    </S.Container>
  )
};

export default SearchRepoContainer;
