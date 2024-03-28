import Deluxe from "./images/Deluxe.jpg";
import Extravaganz from "./images/Extravaganz.jpg";
import Farmhouse from "./images/Farmhouse.jpg";
import Mexican from "./images/Mexican.jpg";
import Peppy from "./images/Peppy.jpg";
import Veggie from "./images/Veggie.jpg";

const createMenu = () => {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Farmhouse",
      " Apizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
      Farmhouse
    )
  );

  menu.appendChild(
    createMenuItem(
      "Peppy",
      "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
      Peppy
    )
  );

  menu.appendChild(
    createMenuItem(
      "Mexican",
      "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
      Mexican
    )
  );

  menu.appendChild(
    createMenuItem(
      "Deluxe",
      "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",
      Deluxe
    )
  );

  menu.appendChild(
    createMenuItem(
      "Extravaganz",
      "A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.",
      Extravaganz
    )
  );

  menu.appendChild(
    createMenuItem(
      "Veggie",
      "Goldern Corn, Black Olives, Capsicum & Red Paprika",
      Veggie
    )
  );

  content.appendChild(menu);
};

const createMenuItem = (name, description, imagesrc) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("item");

  const foodName = document.createElement("h3");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImg = document.createElement("img");
  foodImg.src = imagesrc;

  menuItem.appendChild(foodImg);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
};

export default createMenu;
