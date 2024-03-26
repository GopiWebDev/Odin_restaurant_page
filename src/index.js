import "./styles/main.css";
import initialLoad from "./website";

initialLoad();

const clear = () => {
  const content = document.querySelector("#content");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu");

  if (home) {
    content.removeChild(home);
  }

  if (menu) {
    content.removeChild(menu);
  }
};

export default clear;
