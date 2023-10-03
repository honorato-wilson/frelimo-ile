const scriptURL = 'https://script.google.com/macros/s/AKfycbw7FraUhLd7Tn_ND9LQpIKmKJiV8grouRSJ6ydyK8a8wTYaBd3b6WFhOtZCcOAGJwQk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
