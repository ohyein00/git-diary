import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width:100%;
  height:100%;
  padding:20px;
  border:1px solid #ddd;
  margin-bottom:30px;
  overflow:hidden;
`;

export const ContentArea = styled.div`
  width:100%;
  height:100%;
  >p{
    margin-bottom:10px;
    font-size:0.9rem;
    line-height:1.2;
    word-break: break-all;
    &:first-child{
      padding-right:50px;
    }
  }
`
