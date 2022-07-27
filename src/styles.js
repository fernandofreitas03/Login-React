import styled from "styled-components";
import Background2 from "./assets/background2.svg";

export const Container = styled.div`
  background: url("${Background2}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const Image = styled.img`
  margin-top: 30px;
`;

export const Div = styled.div`
  width: 414px;
  height: 845px;

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

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;

  padding-left: 25px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  outline: none;
  margin-bottom: 34px;
  padding-left: 25px;
`;

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
`;

export const Users = styled.li`
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
