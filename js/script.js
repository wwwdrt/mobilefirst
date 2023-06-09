// eslint-disable-next-line import/extensions
import Projects from './components/Projects.js';
// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member,import/extensions
import Menu from './components/Menu.js';

// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member,import/extensions
import Popup from './components/Popup.js';

// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import Contact from './components/Contact.js';

// eslint-disable-next-line max-len
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member,import/no-unresolved
import Storage from './components/Storage.js';

// eslint-disable-next-line new-cap,no-new
new Projects();
// eslint-disable-next-line no-new,new-cap
new Menu('[data-menu]', '[data-overlay]');

// eslint-disable-next-line new-cap,no-new
new Popup();

// eslint-disable-next-line no-new
new Contact();

// eslint-disable-next-line no-new
new Storage();