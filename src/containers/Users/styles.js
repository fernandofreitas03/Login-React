import styled from "styled-components";
import Background1 from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;
backdrop-filter: blur(45px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const Image = styled.img`
  margin-top: 30px;
`;

export const Div = styled.div`
   height: 100%;
   min-height: calc(100vh - 170px);

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;

  text-align: center;
  margin-bottom: 80px;

  color: #ffffff;
`;



export const Button = styled.button`
  width: 342px;
  height: 74px;

  margin-top: 130px;

  background: transparent;
  border-radius: 14px;
  border: 1px solid #FFFFFFFF;
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

 img{
  transform: rotateY(180deg);
 }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    opacity: 0.6;
  
  }
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
