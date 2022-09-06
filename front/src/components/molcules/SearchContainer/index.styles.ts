import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  width:100%;
  padding:0 20px;
  margin:0px auto;
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
`
export const InputArea = styled.div`
  display:flex;
  align-items: center;
  height:3rem;
  input{
    width:30%;
    max-width:250px;
    margin-right:10px;
    border:1px solid #ddd;
  }
`
