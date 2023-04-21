/* eslint-disable */

class Storage {
  constructor() {
    this.isLocalStorageAvailable();
    this.isSessionStorageAvailable();
  }

  validateStorage = (type) => {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  };

  isLocalStorageAvailable = () => {
    if (this.validateStorage("localStorage")) {
      console.log("Yippee! We can use localStorage awesomeness");
    } else {
      console.log("Too bad, no localStorage for us");
    }
  };

  isSessionStorageAvailable = () => {
    if (this.validateStorage("sessionStorage")) {
      console.log("Yippee! We can use sessionStorage awesomeness");
    } else {
      console.log("Too bad, no sessionStorage for us");
    }
  };
}

export default Storage;
