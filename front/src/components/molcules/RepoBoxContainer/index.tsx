import React, {useEffect, useState} from "react";
import * as S from './index.styles'
import {RepoBoxData} from "../../../types/repoTypes";
import RepoBox from "../../atoms/RepoBox";
import SearchContainer from "../SearchContainer";
import {searchApi} from "../../../service/searchApi";
import {AxiosResponse} from "axios";

type RepoBoxContainerProps = {
}
const RepoBoxContainer = (props: RepoBoxContainerProps) => {
  const [currentSearchWord,setCurrentSearchWord] = useState('')
  const [repoItems,setRepoItems] = useState<RepoBoxData[]>()
  useEffect(()=>{
    (async ()=>{
      try{
        const searchResponse = await searchApi<RepoBoxData[]>({q:'ddd'})
        setRepoItems(searchResponse)
      }catch(e){
        console.log(e)
      }
    })()
  },[currentSearchWord])
  return (
    <S.Container>
      <SearchContainer setCurrentSearchWord={setCurrentSearchWord}/>
      {
        repoItems?.map((item) =>
          <RepoBox repoData={item}/>)
      }
    </S.Container>
  )
};

export default RepoBoxContainer;
