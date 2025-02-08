
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://nasafrasa.github.io/directories/sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data)
        .catch(error => console.error("Error loading sidebar:", error));


    const filename = window.location.pathname.split("/").pop().split(".html")[0];
    const gallery = document.querySelector(".gallery");

    const imageFolder = "../images/" + filename + "/";
    let imageList

    if (filename == "cats") {
        imageList = [
            ["image1.png", ""],
            ["image2.png", ""],
            ["image3.png", ""],
            ["image4.png", ""],
            ["image5.png", ""],
            ["image6.png", ""],
            ["image7.png", ""],
            ["image8.png", ""],
            ["image9.png", ""],
            ["image10.png", ""],
            ["image11.png", ""],
            ["image12.png", ""],
            ["image13.png", ""],
            ["image14.png", ""],
            ["image15.png", ""],
            ["image16.png", ""],
            ["image17.png", ""],
            ["image18.png", ""],
            ["image19.png", ""],
            ["image20.png", ""],
            ["image21.png", ""],
            ["image22.png", ""],
            ["image23.png", ""]
        ];
    }

    imageList.forEach(image => {
        const img = document.createElement("img");
        img.src = imageFolder + image[0];
        gallery.appendChild(img);
    });
})
