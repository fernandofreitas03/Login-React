import styled from "styled-components";
import Background1 from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  border: none;
  outline: none;

  color: #ffffff;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

button{
   width: 24px;
   height: 28px;
   
   background: none;
   border: none;
   outline: none;

   cursor: pointer;
}

`;
