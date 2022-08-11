import styled from "styled-components";


export const Button = styled.button`
  width: 342px;
  height: 74px;

  margin-top: 132px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;

  line-height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  color: #eeeeee;

  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    opacity: 0.6;
  
  }


  ${props => props.IsBack && `
  background: transparent;
  border: 1px solid #FFFFFFFF;
  img{
  transform: rotateY(180deg);
 }

  `}



`;
