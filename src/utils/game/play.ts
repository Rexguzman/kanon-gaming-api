import random from "./random";

const play = () => {
  const reel1 = [
    "cherry",
    "lemon",
    "apple",
    "lemon",
    "banana",
    "banana",
    "lemon",
    "lemon",
  ];
  const reel2 = [
    "lemon",
    "apple",
    "lemon",
    "lemon",
    "cherry",
    "apple",
    "banana",
    "lemon",
  ];
  const reel3 = [
    "lemon",
    "apple",
    "lemon",
    "apple",
    "cherry",
    "lemon",
    "banana",
    "lemon",
  ];

  const fruit1 = random(reel1);
  const fruit2 = random(reel2);
  const fruit3 = random(reel3);

  let coinsEarned = 0;

  if (fruit1 === fruit2 && fruit2 === fruit3) {
    if (fruit1 === "cherry") {
      coinsEarned = 50;
    }
    if (fruit1 === "apple") {
      coinsEarned = 20;
    }
    if (fruit1 === "banana") {
      coinsEarned = 15;
    }
    if (fruit1 === "lemon") {
      coinsEarned = 3;
    }
  } else if (fruit1 === fruit2) {
    if (fruit1 === "cherry") {
      coinsEarned = 40;
    }
    if (fruit1 === "apple") {
      coinsEarned = 10;
    }
    if (fruit1 === "banana") {
      coinsEarned = 5;
    }
    if (fruit1 === "lemon") {
      coinsEarned = 0;
    }
  } else {
    coinsEarned = 0;
  }

  return { result: [fruit1, fruit2, fruit3], coinsEarned };
};

export default play;
