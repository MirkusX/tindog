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
  //Tracks how many items user have gone through
  const Change = () => {
    setState((state) => state + 1);
  };
  //Sets like/nope image to nothing
  const SetImgNone = () => {
    setImg((img) => (img = ""));
  };
  //Changes image to like should user click like and does the same for nope, changes item after one second and makes like/nope disappear after 0.5 seconds
  const ClickEvent = (or) => {
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
  //If state is 3 sets state to 0 so items go around like a carousel
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
      {/* Displays items from item array */}
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
        {/* Makes like image appear on click and changes item */}
        <StyledButton onClick={() => ClickEvent("bad")} cross id="bad">
          <Cross />
        </StyledButton>
        {/* Makes nope image appear on click and changes item */}
        <StyledButton onClick={() => ClickEvent("good")} id="good">
          <Heart />
        </StyledButton>
      </StyledButtonDiv>
    </StyledSection>
  );
};
