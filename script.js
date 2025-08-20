document.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('form');
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (Note: This is a sample page)');
        form.reset();
      });
    });
