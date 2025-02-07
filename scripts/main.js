
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://nasafrasa.github.io/directories/sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data)
        .catch(error => console.error("Error loading sidebar:", error));
})
