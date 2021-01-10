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

//------------- executing functions

const discoveringTree = elem => {
  if (elem.className.includes("treasure")) {
    elem.innerText = images.treasure;
    treasure.dispatchEvent(new CustomEvent("info", { once: true }));
  } else if (elem.className.includes("tree")) {
    elem.innerText = images.leafs;
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

treasure.addEventListener("info", () => setCongratulations(), {
  once: true
});
