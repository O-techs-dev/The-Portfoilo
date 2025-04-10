 function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }
        function hideSidebar (){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }


        const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle the theme when button is clicked
themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save the user's theme preference in local storage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



