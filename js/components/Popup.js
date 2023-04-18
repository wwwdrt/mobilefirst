/* eslint-disable */
class Popup {

    #data;

    constructor() {
        this.#data = [
            {
                id: '1',
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
                liveVersion: "https://www.bing.com",
                sourceCode: "https://github.com",
            },
        ]
    }
}