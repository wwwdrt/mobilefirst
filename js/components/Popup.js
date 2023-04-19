/* eslint-disable */
class Popup {
  #data;

  constructor() {
    this.#data = [
      // PROJECT 1
      {
        id: "1",
        image: "/img/firstMobileCard.svg",
        desktopImage: "cardDesktopImg-1",
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
        liveVersion: "https://wwwdrt.github.io/mobilefirst/",
        sourceCode: "https://github.com/wwwdrt/mobilefirst/tree/popup-window",
      },

      // PROJECT 2
      {
        id: "2",
        image: "/img/secondMobileCard.svg",
        desktopImage: "cardDesktopImg-2",
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
                <li><a href="#" class="card-badge">Ruby on Rails</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://wwwdrt.github.io/mobilefirst/",
        sourceCode: "https://github.com/wwwdrt/mobilefirst/tree/popup-window",
      },

      // PROJECT 3
      {
        id: "3",
        image: "/img/thirdMobileCard.svg",
        desktopImage: "cardDesktopImg-3",
        title: "Facebook 360",
        badges: `
                    <li>FACEBOOK</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Full Stack Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">Ruby on Rails</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://wwwdrt.github.io/mobilefirst/",
        sourceCode: "https://github.com/wwwdrt/mobilefirst/tree/popup-window",
      },

      // PROJECT 4
      {
        id: "4",
        image: "/img/fourthMobileCard.svg",
        desktopImage: "cardDesktopImg-4",
        title: "Uber Navigation",
        badges: `
                    <li>Uber</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Lead Developer</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2018</li>
        `,
        description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">Ruby on Rails</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        liveVersion: "https://wwwdrt.github.io/mobilefirst/",
        sourceCode: "https://github.com/wwwdrt/mobilefirst/tree/popup-window",
      },
    ];
    this.addButtonsListener();
  }

  generatePopupData = (
    {
      image,
      desktopImage,
      title,
      badges: popupBadges,
      description,
      tags: popupTags,
      liveVersion,
      sourceCode,
    } = this
  ) => {
    const popup = document.querySelector("[data-popup]");

    const overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");

    const containerA = document.createElement("div");
    containerA.classList.add("popup-container-a");

    const popupHeading = document.createElement("div");
    popupHeading.classList.add("popup-heading");

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const i = document.createElement("i");
    i.classList.add("bx", "bx-x");
    i.setAttribute("data-popup-hide", "");

    const badges = document.createElement("ul");
    badges.classList.add("popup-badges");
    badges.innerHTML = popupBadges;

    const figure = document.createElement("figure");
    figure.classList.add("popup-img");

    const img = document.createElement("img");
    img.classList.add(desktopImage);
    img.src = image;
    img.alt = "project image";

    const containerB = document.createElement("div");
    containerB.classList.add("popup-container-b");

    const p = document.createElement("p");
    p.classList.add("popup-description");
    p.textContent = description;

    const childrenB = document.createElement("div");
    childrenB.classList.add("popup-children-b");

    const tags = document.createElement("ul");
    tags.classList.add("popup-tags");
    tags.innerHTML = popupTags;

    const hr = document.createElement("hr");

    const buttons = document.createElement("div");
    buttons.classList.add("popup-buttons");

    const firstButton = document.createElement("button");
    firstButton.textContent = "See Live";
    firstButton.classList.add("card-btn");
    firstButton.type = "submit";
    firstButton.tabIndex = 0;
    firstButton.ariaLabel = "See Live";

    const linkIcon = document.createElement("i");
    linkIcon.classList.add("bx", "bx-link-external");

    const secondButton = document.createElement("button");
    secondButton.textContent = "See Source";
    secondButton.classList.add("card-btn");
    secondButton.type = "submit";
    secondButton.tabIndex = 0;
    secondButton.ariaLabel = "See Source";

    firstButton.addEventListener("click", () =>
      firstButton ? window.open(liveVersion, "_blank") : ""
    );

    secondButton.addEventListener("click", () =>
      secondButton ? window.open(sourceCode, "_blank") : ""
    );

    const github = document.createElement("i");
    github.classList.add("bx", "bxl-github");

    popup.appendChild(overlay);
    overlay.appendChild(containerA);
    containerA.appendChild(popupHeading);
    popupHeading.appendChild(h2);
    popupHeading.appendChild(i);
    containerA.appendChild(badges);
    containerA.appendChild(figure);
    figure.appendChild(img);
    overlay.appendChild(containerB);
    containerB.appendChild(p);
    containerB.appendChild(childrenB);
    childrenB.appendChild(tags);
    childrenB.appendChild(hr);
    childrenB.appendChild(buttons);
    buttons.appendChild(firstButton);
    buttons.appendChild(secondButton);
    firstButton.appendChild(linkIcon);
    secondButton.appendChild(github);
  };

  addButtonsListener = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".card-btn");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const projectId = button.dataset.project;
          const popupData = this.#data.find((popup) => popup.id === projectId);
          if (
            popupData &&
            popupData.image &&
            popupData.desktopImage &&
            popupData.title &&
            popupData.badges &&
            popupData.description &&
            popupData.tags &&
            popupData.liveVersion &&
            popupData.sourceCode
          ) {
            console.log(popupData);
            this.generatePopupData(popupData);
            document.querySelector("[data-popup]").style.display = "flex";
            document.querySelector("body").style.overflow = "hidden";
            this.hidePopup();
          } else {
            console.log(`Missing data for project with id ${projectId}`);
          }
        });
      });
    });
  };

  hidePopup = () => {
    const popup = document.querySelector(".popup-overlay");
    const close = document.querySelector("[data-popup-hide]");
    close.addEventListener("click", () => {
      document.querySelector("[data-popup]").style.display = "none";
      document.querySelector("body").style.overflow = "auto";
      popup.remove();
    });
  };
}
export default Popup;
