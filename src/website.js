import clear from ".";
import createAbout from "./about";
import createHome from "./home";
import createMenu from "./menu";

const createHeader = () => {
  const heading = document.querySelector("#heading");

  const h1 = document.createElement("h1");
  h1.textContent = "Pizza Corner";

  const header = document.createElement("header");
  const home = document.createElement("nav");
  const menu = document.createElement("nav");
  const about = document.createElement("nav");

  home.textContent = "Home";
  menu.textContent = "Menu";
  about.textContent = "About";

  home.addEventListener("click", () => {
    clear();
    createHome();
  });

  menu.addEventListener("click", () => {
    clear();
    createMenu();
  });

  about.addEventListener("click", () => {
    clear();
    createAbout();
  });

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(about);

  heading.appendChild(h1);
  heading.appendChild(header);
};

const initialLoad = () => {
  createHeader();
  createHome();
};

export default initialLoad;
