import React from "react";
import * as S from './index.styles'
import {useParams} from "react-router-dom";
const BookmarkPage = () => {

  const { repoName } = useParams();
  return(
    <S.Container>

    </S.Container>
  )
};

export default BookmarkPage;
