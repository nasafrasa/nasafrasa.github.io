const filename = window.location.pathname.split("/").pop();

document.addEventListener("DOMContentLoaded", () => {
    console.log(filename)
    if (filename.includes("index")) {
        fetch("https://nasafrasa.github.io/directories/indexsidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data)
        .catch(error => console.error("Error loading sidebar:", error));
    } else {
        fetch("https://nasafrasa.github.io/directories/sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data)
        .catch(error => console.error("Error loading sidebar:", error));
    }
})
