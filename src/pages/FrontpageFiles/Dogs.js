import dog1 from "../../images/dog1.jpg";
import dog2 from "../../images/dog2.jpg";
import dog3 from "../../images/dog3.jpg";
import like from "../../images/like.png";
import nope from "../../images/nope.png";
//Array for items
export const dogs = [
  {
    name: "Rex",
    avatar: dog1,
    age: 25,
    bio: "Art. Literature. Natural wine. Yoga.",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Bella",
    avatar: dog2,
    age: 43,
    bio: "Yup, that's my owner. U can meet him if you want",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Teddy",
    avatar: dog3,
    age: 30,
    bio: "How you doin?",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
];
//Object for yes or no
export const LikeorNope = {
  Or: {
    good: like,
    bad: nope,
  },
};
