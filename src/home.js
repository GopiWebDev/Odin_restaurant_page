const createHome = () => {
  const content = document.querySelector("#content");

  const menu = document.querySelector(".menu");
  if (menu) {
    content.removeChild(menu);
  }

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");

  const h2 = document.createElement("h2");
  h2.textContent = "Happiness is a slice of pizza.";

  const para = document.createElement("p");
  para.textContent = "Life is all about discovering new tastes.";

  const img = document.createElement("img");
  img.src = "images/Peppy.jpg";

  const para2 = document.createElement("p");
  para2.textContent = "Order online or visit us!";

  homeDiv.appendChild(h2);
  homeDiv.appendChild(para);
  homeDiv.appendChild(img);
  homeDiv.appendChild(para2);
  content.appendChild(homeDiv);
};

export default createHome;
