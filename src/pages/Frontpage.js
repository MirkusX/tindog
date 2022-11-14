import { useState } from "react";
import {
  Chat,
  Cross,
  Heart,
  Paw,
  PawContainer,
  StyledButton,
  StyledButtonDiv,
  StyledH1,
  StyledImg,
  StyledImgDiv,
  StyledNav,
  StyledP,
  StyledSection,
  TextDiv,
  User,
} from "../components/StyledComponents";
import { dogs, LikeorNope } from "./FrontpageFiles/Dogs";

export const Frontpage = () => {
  const [anim, setAnim] = useState(false);
  const [img, setImg] = useState("");
  const [state, setState] = useState(0);
  const Change = () => {
    setState((state) => state + 1);
  };

  const SetImgNone = () => {
    setImg((img) => (img = ""));
  };

  const ClickEvent = (or) => {
    console.log(anim);
    if (or === "good") {
      setImg((img) => (img = "good"));
      setTimeout(() => {
        Change();
      }, 1000);
      setTimeout(() => {
        SetImgNone();
      }, 500);
    } else if (or === "bad") {
      setImg((img) => (img = "bad"));
      setTimeout(() => {
        Change();
      }, 1000);
      setTimeout(() => {
        SetImgNone();
      }, 500);
    }
  };
  if (state === 3) {
    setState((state) => (state = 0));
  }
  return (
    <StyledSection>
      <StyledNav>
        <User />
        <PawContainer>
          <Paw />
        </PawContainer>
        <Chat />
      </StyledNav>
      {dogs.map((item, index) => {
        if (index === state)
          return (
            <StyledImgDiv
              anim={anim}
              key={index}
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%), url(${item.avatar})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
              }}
            >
              <StyledImg src={LikeorNope.Or[img]} />
              <TextDiv>
                <StyledH1>
                  {item.name} {item.age}
                </StyledH1>
                <StyledP>{item.bio}</StyledP>
              </TextDiv>
            </StyledImgDiv>
          );
      })}
      <StyledButtonDiv>
        <StyledButton onClick={() => ClickEvent("bad")} cross id="bad">
          <Cross />
        </StyledButton>
        <StyledButton onClick={() => ClickEvent("good")} id="good">
          <Heart />
        </StyledButton>
      </StyledButtonDiv>
    </StyledSection>
  );
};
