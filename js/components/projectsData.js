class projectsData {
  constructor() {
    this.projects = [
      {
        // CARD 2
        description:
          'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">Ruby on rails</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        badges: `
                <ul class="badges" data-badges-card2>
                    <li>FACEBOOK</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Full Stack Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
                </ul>
        `,
        cardText: document.querySelector('[data-text-card2]'),
        cardTags: document.querySelector('[data-tags-card2]'),
        cardBadges: document.querySelector('[data-badges-card2]'),
      },
      {
        // CARD 3
        title: 'Facebook 360',
        description:
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">Ruby on rails</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        badges: `
                <ul class="badges" data-badges-card3>
                    <li>FACEBOOK</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Full Stack Dev</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2015</li>
                </ul>
        `,
        cardTitle: document.querySelector('[data-title-card3]'),
        cardText: document.querySelector('[data-text-card3]'),
        cardTags: document.querySelector('[data-tags-card3]'),
        cardBadges: document.querySelector('[data-badges-card3]'),
      },
      {
        // CARD 4
        title: 'Uber Navigation',
        description:
          'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        tags: `
                <li><a href="#" class="card-badge">HTML</a></li>
                <li><a href="#" class="card-badge">Ruby on rails</a></li>
                <li><a href="#" class="card-badge">CSS</a></li>
                <li><a href="#" class="card-badge">JavaScript</a></li>
        `,
        badges: `
                <ul class="badges" data-badges-card3>
                    <li>Uber</li>
                    <li><i class="bx bx-star"></i></li>
                    <li>Lead Developer</li>
                    <li><i class="bx bx-meteor"></i></li>
                    <li>2018</li>
                </ul>
        `,
        cardTitle: document.querySelector('[data-title-card4]'),
        cardText: document.querySelector('[data-text-card4]'),
        cardTags: document.querySelector('[data-tags-card4]'),
        cardBadges: document.querySelector('[data-badges-card4]'),
      },
    ];
    this.window = window.matchMedia('(min-width: 768px)');
    this.window.addEventListener('change', () => this.updateProjects());
    this.updateProjects();
  }

  setProjectElements(index) {
    this.projects.forEach(
      (
        {
          cardTitle,
          cardText,
          cardTags,
          cardBadges,
          title,
          description,
          tags,
          badges,
        } = this.projects[index],
      ) => {
        cardText.textContent = description;
        cardTags.innerHTML = tags;
        cardBadges.innerHTML = badges;
        if (title) {
          cardTitle.textContent = title;
        }
      },
    );
  }

  updateProjects() {
    if (this.window.matches) {
      this.projects = this.projects.slice(0, 3);
      this.setProjectElements(0);
      this.setProjectElements(1);
      this.setProjectElements(2);
    }
  }
}

export default projectsData;
