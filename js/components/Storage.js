class Storage {
  constructor() {
    // Check for localStorage & sessionStorage
    this.isLocalStorageAvailable();
    this.isSessionStorageAvailable();

    // Set and Get localStorage
    this.storeLocalData();
  }

  validateStorage = (type) => {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException
        // everything except Firefox
        && (e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        // acknowledge QuotaExceededError only if there's something already stored
        && storage
        && storage.length !== 0
      );
    }
  };

  isLocalStorageAvailable = () => {
    if (this.validateStorage('localStorage')) {
      // eslint-disable-next-line no-console
      console.log('Yippee! We can use localStorage awesomeness');
    } else {
      // eslint-disable-next-line no-console
      console.log('Too bad, no localStorage for us');
    }
  };

  isSessionStorageAvailable = () => {
    if (this.validateStorage('sessionStorage')) {
      // eslint-disable-next-line no-console
      console.log('Yippee! We can use sessionStorage awesomeness');
    } else {
      // eslint-disable-next-line no-console
      console.log('Too bad, no sessionStorage for us');
    }
  };

  storeLocalData = () => {
    const form = document.querySelector('form');
    const { name, email, message } = form.elements;
    form.addEventListener('input', () => {
      const data = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      localStorage.setItem('data', JSON.stringify(data));
    });

    const getData = localStorage.getItem('data');
    const data = JSON.parse(getData);
    if (data !== null) {
      name.value = data.name;
      email.value = data.email;
      message.value = data.message;
    }
  };
}

export default Storage;
