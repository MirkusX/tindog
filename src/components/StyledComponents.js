import styled, { css, keyframes } from "styled-components";
import { AiFillHeart, AiOutlineUser } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaPaw } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
//Stylings
export const StyledSection = styled.section`
  max-width: 428px;
  margin: 0 auto;
`;

export const StyledImg = styled.img`
  width: 30%;
  transform: rotate(-30deg);
  margin: 3em 2em;
`;

export const StyledH1 = styled.h1`
  margin: 0;
`;

export const StyledP = styled.p`
  color: #b7b7b7;
  margin-top: 0;
`;

export const StyledImgDiv = styled.div`
  min-height: 40em;
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TextDiv = styled.div`
  margin: 0 1em;
  color: white;
  width: 100%;
  text-align: left;
`;

export const Heart = styled(AiFillHeart)`
  color: green;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const Cross = styled(ImCross)`
  color: red;
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: block;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 4em;
  background-color: white;
  box-shadow: 1px 1px 3px black;
  &:active {
    background-color: lightgreen;
  }
  ${(props) => {
    if (props.cross)
      return `
      &:active{
        background-color: #FF7376;
      }`;
  }}
`;

export const StyledButtonDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  justify-content: center;
  margin: 1em 0;
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

export const User = styled(AiOutlineUser)`
  fill: gray;
  transform: scale(1.5);
`;

export const Paw = styled(FaPaw)`
  fill: white;
`;

export const PawContainer = styled.div`
  background: linear-gradient(270deg, #fa695a 0%, #f83375 100%);
  width: 15%;
  border-radius: 30px;
`;

export const Chat = styled(BsFillChatFill)`
  fill: gray;
  transform: scale(1.5);
`;
