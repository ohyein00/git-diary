import React, {useCallback} from "react";
import {SearchRepoDto} from "../../../types/repoTypes";
import * as S from './index.styles'
type RepoBoxProps = {
  repoData : SearchRepoDto
}
const RepoBox = (props: RepoBoxProps) => {
  const {repoData} = props
  return (
    <>
      <S.Container>
        <p>name:{repoData.name}</p>
        <p>description:{repoData.description}</p>
        <a href={repoData.url}>github link</a>
      </S.Container>
    </>
  )
};

export default RepoBox;
