import styled from "styled-components";

export const Container = styled.div<{bgColor?:string}>`
  display:flex;
  align-items: center;
  justify-content: space-between;
  font-size:0.7rem;
  background:${props => props.bgColor === 'dark' ? '#d969a7' : '#efefef'};
  color:${props => props.bgColor === 'dark' ? '#fff' : '#333'};
  border-radius: 5em;
  padding:0 15px;
  margin:0 15px;
  height:100%;
  
  button{
    background:transparent;
    border:none;
  }
`
export const TagName = styled.button`
  flex:4;
  color:inherit;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
export const DeleteButton = styled.button`
  flex:1;
  padding:0;
  cursor: pointer;
`
