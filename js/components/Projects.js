class Projects {
  #data;

  constructor() {
    this.#data = [
      //   CARD 1
      {
        id: '1',
        image: 'img/firstMobileCard.svg',
        desktopImage: 'cardDesktopImg-1',
        title: 'Tonic',
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
      },
      //   CARD 2
      {
        id: '2',
        image: 'img/secondMobileCard.svg',
        desktopImage: 'cardDesktopImg-2',
        title: 'Multi-Post <br class="hide"> Stories',
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
      },
      //   CARD 3
      {
        id: '3',
        image: 'img/thirdMobileCard.svg',
        desktopImage: 'cardDesktopImg-3',
        title: 'Tonic',
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
      },
      //   CARD 4
      {
        id: '4',
        image: 'img/fourthMobileCard.svg',
        desktopImage: 'cardDesktopImg-4',
        title: 'Multi-Post <br class="hide"> Stories',
        badges: `
                    <li>CANOPI</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Back End Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
        `,
        description:
          'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
      },
    ];
    this.generateProjectsData();
  }

  generateProjectsData = () => {
    const root = document.querySelector('#projects');

    // eslint-disable-next-line no-restricted-syntax
    for (const data of this.#data) {
      const parentContainer = document.createElement('article');
      parentContainer.classList.add('card');

      const figure = document.createElement('figure');
      figure.classList.add('card-image');

      const img = document.createElement('img');
      img.classList.add(data.desktopImage);
      img.src = data.image;
      img.alt = 'project image';

      const cardContent = document.createElement('section');
      cardContent.classList.add('card-content');

      const cardText = document.createElement('div');
      cardText.classList.add('card-text');

      const h2 = document.createElement('h2');
      h2.innerHTML = data.title;

      const badges = document.createElement('ul');
      badges.classList.add('badges');
      badges.innerHTML = data.badges.trim();

      const p = document.createElement('p');
      p.textContent = data.description;

      const tags = document.createElement('ul');
      tags.classList.add('tags');
      tags.innerHTML = data.tags.trim();

      const button = document.createElement('button');
      button.classList.add('card-btn');
      button.type = 'button';
      button.tabIndex = 0;
      button.ariaLabel = 'See Project';
      button.textContent = 'See Project';
      button.setAttribute('data-project', data.id);

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
}

export default Projects;
