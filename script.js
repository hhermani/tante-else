'use strict';
const form = document.querySelector('#request-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  status.textContent = 'Demo erfolgreich getestet. Es wurde keine Anfrage versendet und nichts gespeichert.';
});
