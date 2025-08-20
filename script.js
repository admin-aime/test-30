document.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('form');
      const themeToggle = document.getElementById('theme-toggle');
      
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      // Form submission handler
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (Note: This is a sample page)');
        form.reset();
      });

      // Theme toggle handler
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });

      // System theme change listener
      window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        
        // Only change if no user preference is saved
        if (!localStorage.getItem('theme')) {
          document.documentElement.setAttribute('data-theme', systemTheme);
        }
      });
    });
  </aimeArtifact>

  <aimeAction type="shell">
    npm install && npm run dev
