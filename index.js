import { Howl } from "howler";
import "./style.css";

const images = {
  treasure: "💰",
  leafs: "🍃"
};

const sound = new Howl({
  src: [
    "http://res.cloudinary.com/fadhilyudho/video/upload/v1515565927/879601-128_tqagvn.mp3"
  ]
});

const entry = document.querySelector(".entry");
const treasure = document.querySelector(".treasure");

const findTreasure = elem => {
  elem.innerText = images.treasure;
  treasure.dispatchEvent(new CustomEvent("treasureFound", { once: true }));
};

const findLeaf = elem => {
  elem.innerText = images.leafs;
};

//------------- executing functions

const discoveringTree = elem => {
  if (elem.className.includes("treasure")) {
    findTreasure(elem);
  } else if (elem.className.includes("tree")) {
    findLeaf(elem);
  }
};

const setCongratulations = () => {
  alert("wygrałeś  💪 ");
  sound.play();
};

//------------- events

entry.addEventListener(
  "mouseenter",
  ({ fromElement: elem }) => {
    if (elem != null) {
      discoveringTree(elem);
    }
  },
  { capture: true }
);

const treasureFound = treasure.addEventListener(
  "treasureFound",
  () => setCongratulations(),
  {
    once: true
  }
);
