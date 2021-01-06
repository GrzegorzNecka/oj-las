import "./style.css";

const images = {
  treasure: "💰",
  leafs: "🍃"
};

const entry = document.querySelector(".entry");
const treasure = document.querySelector(".treasure");

treasure.addEventListener("cat", () => alert("wygrałeś  💪 "), {
  once: true
});

entry.addEventListener(
  "mouseenter",
  ({ fromElement: elem }) => {
    if (elem.className.includes("treasure")) {
      elem.innerText = images.treasure;
      treasure.dispatchEvent(new CustomEvent("cat", { once: true }));
    } else if (elem.className.includes("tree")) {
      elem.innerText = images.leafs;
    }
  },
  { capture: true }
);
