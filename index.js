import "./style.css";
import { Howl } from "howler";

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

const setInfo = () => {
  alert("wygrałeś  💪 ");
  sound.play();
};

const discoveringTree = elem => {
  if (elem.className.includes("treasure")) {
    elem.innerText = images.treasure;
    treasure.dispatchEvent(new CustomEvent("info", { once: true }));
  } else if (elem.className.includes("tree")) {
    elem.innerText = images.leafs;
  }
};

//------------- events

treasure.addEventListener("info", () => setInfo(), {
  once: true
});

entry.addEventListener(
  "mouseenter",
  ({ fromElement: elem }) => {
    discoveringTree(elem);
  },
  { capture: true }
);
