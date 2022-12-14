import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display:inline-block;
`;
export const SubmitButton = styled.button`
  display:flex;
  height:100%;
  align-items: center;
  padding:0px 25px;
  background:#efefef;
  text-align:center;
  font-size:0.9rem;
  border:1px solid #ddd;
  cursor: pointer;
`
export const InputArea = styled.div`
  display:flex;
  align-items: center;
  height:2.2rem;

  input{
    flex:1;
    max-width:250px;
    margin-right:10px;
    border:1px solid #ddd;
    flex-basis:150px;
  }
`
