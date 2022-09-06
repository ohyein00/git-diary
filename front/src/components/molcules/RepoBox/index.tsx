import React, {ReactNode} from "react";
import {SearchRepoDto} from "../../../types/repoTypes";
import * as S from './index.styles'
type RepoBoxProps = {
  name:string;
  content:string;
  title:string;
  children:ReactNode;
}
const RepoBox = (props: RepoBoxProps) => {
  const {name,title,content,children} = props
  return (
    <>
      <S.Container>
        {children}
        <S.ContentArea>
          <p>{title}</p>
        <p>{name}</p>
        <p>{content}</p>
        </S.ContentArea>
      </S.Container>
    </>
  )
};

export default React.memo(RepoBox);
