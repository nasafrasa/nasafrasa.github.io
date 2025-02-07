const filename = window.location.pathname.split("/").pop();

if (filename.includes("index")) {
    fetch("directories/indexsidebar.html")
    .then(response => response.text())
    .then(data => document.getElementById("sidebar-container").innerHTML = data)
    .catch(error => console.error("Error loading sidebar:", error));
} else {
    fetch("sidebar.html")
    .then(response => response.text())
    .then(data => document.getElementById("sidebar-container").innerHTML = data)
    .catch(error => console.error("Error loading sidebar:", error));
}
