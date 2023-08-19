const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);

  //actual email address
  const emailTo = 'abdulazeez.md6789@gmail.com';
  
  const subject = 'New contact form submission';
  let body = '';
  formData.forEach((value, key) => {
    body += `${key}: ${value}\n`;
  });

  window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
