import React, {useEffect, useState} from "react";
import * as S from './index.styles'
import {useParams} from "react-router-dom";
import {getRepoIssueApi} from "../../service/repoApi";
import RepoBox from "../../components/molcules/RepoBox";
import BookmarkButton from "../../components/atoms/BookmarkButton";
import {IssuesRepoDto} from "../../types/repoTypes";
import {UseGetBookmark} from "../../hooks/UseBookmark";

const BookmarkPage = () => {
  const {id, repoName} = useParams();
  const [repoIssues, setRepoIssues] = useState<IssuesRepoDto[]>()
  // repository name이 넘어올 경우 패칭
  useEffect(() => {
      (async () => {
        try {
          let data
          if (id || repoName) {
            data = await getRepoIssueApi<IssuesRepoDto[]>(`${id}/${repoName}`)
          }else{
            const bookmarkList = UseGetBookmark('my')
          }
          setRepoIssues(data)

        } catch (e) {
          console.log(e)
        }
      })()
  }, [id, repoName])
  return (
    <S.Container>
      <S.Title>
        {repoName && id ?
          `${id}의 ${repoName} 이슈`
          : `이슈 모아보기`
        }
        </S.Title>
      {repoIssues && repoIssues.length > 0 ?
        repoIssues.map((item) =>
          <S.RepoIssuesBoxContainer key={item.id}>
            <a href={item.html_url}>
              <RepoBox title={'이슈 내용'} content={item.title}/>
            </a>
          </S.RepoIssuesBoxContainer>
        )
        : repoIssues && repoIssues.length === 0 && (
        '생성된 이슈가 없습니다.'
      )
      }
    </S.Container>
  )
};

export default BookmarkPage;
