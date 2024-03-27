import "./styles/main.css";
import initialLoad from "./website";

initialLoad();

const clear = () => {
  const content = document.querySelector("#content");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");
  const about = document.querySelector(".about");

  if (home) {
    content.removeChild(home);
  } else if (menu) {
    content.removeChild(menu);
  } else if (about) {
    content.removeChild(about);
  }
};

export default clear;
