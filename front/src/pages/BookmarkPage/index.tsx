import React, {useEffect, useState} from "react";
import * as S from './index.styles'
import {useParams} from "react-router-dom";
import {getRepoIssueApi} from "../../service/repoApi";
import RepoBox from "../../components/molcules/RepoBox";
import {IssuesRepoDto} from "../../types/repoTypes";
import {UseGetBookmark} from "../../hooks/UseBookmark";
import {bookmarkKey} from "../../constants/localStorageKey";
import RepoIssueList from "../../components/organism/RepoIssueList";

type RepoIssuesType = {
  name: string;
  issues: IssuesRepoDto[]
}
const BookmarkPage = () => {
  const {id, repoName} = useParams();
  const bookmarkList = UseGetBookmark(bookmarkKey)

  return (
    <S.Container>
      <S.Title>
        {repoName && id ?
          `${id}의 ${repoName} 이슈`
          : `이슈 모아보기`
        }
      </S.Title>
      {repoName ? <RepoIssueList repoName={`${id}/${repoName}`}/> :
        bookmarkList.length > 0 ? (
          bookmarkList.map((repoName) => (
            <RepoIssueList repoName={repoName}/>
          ))
        )
        : '북마크가 없습니다.'
      }
    </S.Container>
  )
};

export default BookmarkPage;
