import projectsData from "./components/projectsData.js";
import mobileMenu from "./components/mobileMenu.js";

// eslint-disable-next-lin
const data = new projectsData();
const menu = new mobileMenu("[data-menu]", "[data-overlay]");
