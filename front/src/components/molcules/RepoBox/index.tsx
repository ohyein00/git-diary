import React, {ReactNode} from "react";
import {SearchRepoDto} from "../../../types/repoTypes";
import {Navigate, useNavigate} from "react-router-dom";
import * as S from './index.styles'

type RepoBoxProps = {
  name?: string;
  content: string;
  title: string;
  children?: ReactNode;
  handleNavigate?:()=>void
}
const RepoBox = (props: RepoBoxProps) => {
  const {name, title, content, children,handleNavigate} = props
  return (
    <>
      <S.Container>
        {children}
          <S.ContentArea onClick={handleNavigate}>
            <p>{title}</p>
            {name && <p>{name}</p>}
            <p>{content}</p>
          </S.ContentArea>
      </S.Container>
    </>
  )
};

export default React.memo(RepoBox);
