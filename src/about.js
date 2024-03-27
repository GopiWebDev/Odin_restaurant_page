const createAbout = () => {
  const content = document.querySelector("#content");
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  const h2 = document.createElement("h2");
  h2.textContent = "PIZZA CORNER";

  const p1 = document.createElement("p");
  p1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magni, ullam aperiam dolorum, consequuntur minima dolores dicta nemo provident iste explicabo eveniet totam nostrum. Officiis, cumque. Fuga libero illum quas repellendus voluptatem fugiat id, tempore maxime adipisci ab modi reprehenderit veritatis esse minima sint eaque  blanditiis, dicta error eum quam.";

  const p2 = document.createElement("p");
  p2.textContent = "Contact : 123-456-789";

  aboutDiv.appendChild(h2);
  aboutDiv.appendChild(p1);
  aboutDiv.appendChild(p2);

  content.appendChild(aboutDiv);
};

export default createAbout;
