import RepoBox from "../../molcules/RepoBox";
import * as S from './index.styles'
import React, {useEffect, useState} from "react";
import {IssuesRepoDto} from "../../../types/repoTypes";
import {UseGetBookmark} from "../../../hooks/UseBookmark";
import {bookmarkKey} from "../../../constants/localStorageKey";
import {getRepoIssueApi} from "../../../service/repoApi";

type RepoIssueListProps = {
  repoName: string;
}
const RepoIssueList = (props: RepoIssueListProps) => {
  const {repoName} = props
  const [repoIssues, setRepoIssues] = useState<IssuesRepoDto[]>([])
  useEffect(() => {
    (async () => {
      try {
        const data = await getRepoIssueApi<IssuesRepoDto[]>(`${repoName}`)
        setRepoIssues([...data])
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])
  return (
    <S.Container>
      <S.Title>{`${repoName}의 이슈`}</S.Title>
      {repoIssues.length>0 ?
        repoIssues.map((issue) =>
          <S.RepoIssuesBoxContainer key={issue.id}>
            <a href={issue.html_url}>
              <RepoBox title={repoName} content={issue.title}/>
            </a>
          </S.RepoIssuesBoxContainer>
        ) : '이슈가 없습니다.'
      }
    </S.Container>
  )
}

export default RepoIssueList
