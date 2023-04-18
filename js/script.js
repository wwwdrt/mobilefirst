// eslint-disable-next-line import/extensions
import projectsData from './components/projectsData.js';
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member,import/extensions
import mobileMenu from './components/mobileMenu.js';

// eslint-disable-next-line new-cap,no-new
new projectsData();
// eslint-disable-next-line no-new,new-cap
new mobileMenu('[data-menu]', '[data-overlay]');
