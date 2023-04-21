class Storage {
  constructor() {
    // Set and Get localStorage
    this.storeLocalData();
  }

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
