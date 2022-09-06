import React,{useEffect,useState} from "react";
import * as S from "../BookmarkPage/index.styles";
import TextInput from "../../components/atoms/TextInput";
import SearchContainer from "../../components/molcules/SearchContainer";
import SearchRepoContainer from "../../components/organism/SearchRepoContainer";
import {searchApi} from "../../service/searchApi";
import {SearchRepoDto} from "../../types/repoTypes";
import {AxiosResponse} from "axios";


const SearchPage = () => {
  /**
   * searchApi로 레포 정보 가져오기
   * */

  return(
    <S.Container>
      <SearchRepoContainer/>
    </S.Container>
  )
};

export default SearchPage;
