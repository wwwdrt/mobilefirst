class projectData {
  #projects;
  #window;
  constructor() {
    this.#projects = [
      //   CARD 1
      {
        image: "/img/firstMobileCard.svg",
        imageVersion: "cardDesktopImg-1",
        title: "Tonic",
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://www.bing.com",
        sourceCode: "https://github.com",
      },
      //   CARD 2
      {
        image: "/img/secondMobileCard.svg",
        imageVersion: "cardDesktopImg-2",
        title: `Multi-Post <br class="hide"> Stories`,
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://www.bing.com",
        sourceCode: "https://github.com",
      },
      //   CARD 3
      {
        image: "/img/thirdMobileCard.svg",
        imageVersion: "cardDesktopImg-3",
        title: "Tonic",
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://www.bing.com",
        sourceCode: "https://github.com",
      },
      //   CARD 4
      {
        image: "/img/fourthMobileCard.svg",
        imageVersion: "cardDesktopImg-4",
        title: `Multi-Post <br class="hide"> Stories`,
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://www.bing.com",
        sourceCode: "https://github.com",
      },
    ];
    this.#window = window.matchMedia("(min-width: 768px)");
    this.#window.addEventListener("change", this.updateProjectsData);
    this.generatePopupData();
    this.updateProjectsData();
    this.addPopupListener();
    this.addOverlayPopupListener();
  }

  addPopupListener = () => {};

  addOverlayPopupListener = () => {};

  generatePopupData = () => {
    const root = document.querySelector("#projects");

    for (const project of this.#projects) {
      const parentContainer = document.createElement("article");
      parentContainer.classList.add("card");

      const figure = document.createElement("figure");
      figure.classList.add("card-image");

      const img = document.createElement("img");
      img.classList.add(project.imageVersion);
      img.src = project.image;
      img.alt = "project image";

      const cardContent = document.createElement("section");
      cardContent.classList.add("card-content");

      const cardText = document.createElement("div");
      cardText.classList.add("card-text");

      const h2 = document.createElement("h2");
      h2.innerHTML = project.title;

      const badges = document.createElement("ul");
      badges.classList.add("badges");
      badges.innerHTML = project.badges.trim();

      const p = document.createElement("p");
      p.textContent = project.description;

      const tags = document.createElement("ul");
      tags.classList.add("tags");
      tags.innerHTML = project.tags.trim();

      const button = document.createElement("button");
      button.classList.add("card-btn");
      button.type = "button";
      button.tabIndex = 0;
      button.ariaLabel = "See Project";
      button.textContent = "See Project";

      root.appendChild(parentContainer);
      parentContainer.appendChild(figure);
      figure.appendChild(img);
      parentContainer.appendChild(cardContent);
      cardContent.appendChild(cardText);
      cardText.appendChild(h2);
      cardText.appendChild(badges);
      cardText.appendChild(p);
      cardText.appendChild(tags);
      cardContent.appendChild(button);
    }
  };

  updateProjectsData = () => {};

  hidePopup = () => {};
}

export default projectData;
