import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  font-size:0.8rem;
  background:#efefef;
  color:#333;
  border-radius: 5em;
  max-width:150px;
  padding:0 10px;
  margin-left:20px;
  button{
    background:transparent;
    border:none;
  }
`
export const TagName = styled.button`
  flex:4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  cursor: pointer;
`
export const DeleteButton = styled.button`
  flex:1;
  padding:0;
  cursor: pointer;
`
