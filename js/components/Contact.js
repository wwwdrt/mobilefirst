class Contact {
  constructor() {
    //  Email validation
    this.form = document.querySelector('form');
    this.error = document.querySelector('[data-form-error]');
    this.email = document.querySelector('input[type="email"]');
    this.validateEmailInput();
  }

  validateEmailInput = () => {
    this.form.addEventListener('submit', (e) => {
      if (this.email.value !== this.email.value.toLowerCase()) {
        this.error.style.display = 'flex';
        e.preventDefault();
      }
    });
  };
}

export default Contact;