class Menu {
  #menu;

  #overlay;

  constructor(menuSelector, overlaySelector) {
    this.#menu = document.querySelector(menuSelector);
    this.#overlay = document.querySelector(overlaySelector);
    this.addMenuListener();
    this.addOverlayItemsListener();
  }

  get menu() {
    return this.#menu;
  }

  set menu(menu) {
    if (!(menu instanceof HTMLElement)) {
      throw new Error('Menu must be an HTML element');
    }
    this.#menu = menu;
  }

  get overlay() {
    return this.#overlay;
  }

  set overlay(overlay) {
    if (!(overlay instanceof HTMLElement)) {
      throw new Error('Overlay must be an HTML element');
    }
    this.#overlay = overlay;
  }

  addMenuListener = () => {
    this.menu.addEventListener('click', this.toggleMenu);
  };

  addOverlayItemsListener = () => {
    this.overlay.querySelectorAll('.overlay-item').forEach((item) => {
      item.addEventListener('click', this.hideMenu);
    });
  };

  toggleMenu = () => {
    const { menu, overlay } = this;
    menu.classList.toggle('is-active');
    const isMenuActive = menu.classList.contains('is-active');
    overlay.style.display = isMenuActive ? 'flex' : 'none';
    menu.style.position = isMenuActive ? 'absolute' : '';
    document.body.style.overflow = isMenuActive ? 'hidden' : '';
  };

  hideMenu = () => {
    this.menu.classList.remove('is-active');
    this.overlay.style.display = 'none';
    this.menu.style.removeProperty('position');
    document.body.style.removeProperty('overflow');
  };
}

export default Menu;