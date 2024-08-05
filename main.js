document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.getElementById("navbar-container");

  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      navbarContainer.innerHTML = data;

      const darkModeToggle = document.getElementById("dark-mode-toggle");
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          document.body.classList.add("dark-mode");
          if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          }
      } else {
          if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          }
      }

      if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function() {
          document.body.classList.toggle("dark-mode");

          if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          }
        });
      }
    })
    .catch(error => console.error('Error al cargar la navbar:', error));
});
