const createHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector("div");
  pageContent.classList.add("page-content");

  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  image.height = "300";
  pageContent.appendChild(image);

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our restaurant";
  pageContent.appendChild(headline);

  const para = document.createElement("p");
  para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dicta adipisci voluptatem quasi, dignissimos quis!";
  pageContent.appendChild(para);

  content.appendChild(pageContent);
};

export default createHomePage;
