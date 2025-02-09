
document.addEventListener("DOMContentLoaded", () => {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-container").innerHTML = data)
        .catch(error => console.error("Error loading sidebar:", error));


    const filename = window.location.pathname.split("/").pop().split(".html")[0];
    const gallery = document.querySelector(".gallery");

    const imageFolder = "../images/" + filename + "/";
    let imageList

    if (filename == "cats") {
        imageList = [
            ["image1.png", "Cat: Tribble (Left), Lithium (Right)<br>Date: 07/27/2017<br><br>Lithium was one of our first foster kittens. She very much enjoyed the company of Tribble, maybe a bit too much..."],
            ["image2.png", "Cat: Nasa<br>Date: 08/01/2023<br><br>Nasa! Our now only cat."],
            ["image3.png", "Cat: Nasa<br>Date: 08/26/2023<br><br>She really does love rolling and sprawling out on the floor!"],
            ["image4.png", "Cat: Tribble<br>Date: 03/18/2019<br><br>Tribble! Our former cat to us whom which we had for a long time. May he rest in peace."],
            ["image5.png", "Cat: Nasa<br>Date: 09/02/2019<br><br>Nasa as a kitten. This picture was probably taken on the first day we got her."],
            ["image6.png", "Cat: Nasa<br>Date: 08/26/2023<br><br>I told you she loves rolling on her back!"],
            ["image7.png", "Cat: Gallifrey<br>Date: 06/21/2018<br><br>Gallifrey, chilling in a flowerbed."],
            ["image8.png", "Cat: Nasa<br>Date: 07/06/2024<br><br>Nasa relaxing on the pavement."],
            ["image9.png", "Cat: Tribble<br>Date: 03/08/2019<br><br>Tribble just chilling."],
            ["image10.png", "Cat: Nasa<br>Date: 02/11/2024<br><br>I think Nasa might be very hyper in this photo."],
            ["image11.png", "Cat: Gallifrey (Left), Tribble (Right)<br>Date: 08/28/2017<br><br>Best friends! The original duo of cats we had."],
            ["image12.png", "Cat: Nasa<br>Date: 12/28/2023<br><br>No way, it's Nasa, again!"],
            ["image13.png", "Cat: Gallifrey<br>Date: 03/08/2019<br><br>Gallifrey, the oldest cat out of all the ones here. He adandonded us at some point for neighbours down the road, I think he's still chilling though."],
            ["image14.png", "Cat: Nasa<br>Date: 07/10/2021<br><br>More Nasa!!!"],
            ["image15.png", "Cat: Nasa<br>Date: 01/25/2021<br><br>what the"],
            ["image16.png", "Cat: Nasa<br>Date: 12/16/2020<br><br>Peacedully sitting Nasa."],
            ["image17.png", "Cat: Phosphorus<br>Date: 09/28/2023<br><br>Phosphorus, one of our foster kittens! Him and Sulfur were a entertaining pair."],
            ["image18.png", "Cat: Tribble<br>Date: 11/14/2021<br><br>Tribble is very much enjoying his playtime."],
            ["image19.png", "Cat: Tribble<br>Date: 12/25/2018<br><br>I tried to take a picture of Tribble, but I messed up my camera settings, so half of him is fading out of existence."],
            ["image20.png", "Cat: Nasa<br>Date: 06/07/2023<br><br>Nasa being adorable again. I used this picture for my interview in EXSII!"],
            ["image21.png", "Cat: Nasa<br>Date: 03/05/2023<br><br>'Car' - Skyza"],
            ["image22.png", "Cat: Nasa<br>Date: 07/26/2024<br><br>She just does this sometimes, I don't know why."],
            ["image23.png", "Cat: Sulfur<br>Date: 10/07/2023<br><br>Sulfur, another foster kitten! Her and Phosphorus were a fun bunch."]
        ];
    }

    imageList.forEach(image => {
        const img = document.createElement("img");
        img.src = imageFolder + image[0];
        img.onclick = (event) => openModal(event, img, image[1]);
        img.loading = "lazy"
        img.className = "skeleton"
        img.onload = "this.previousElementSibling.style.display='none'"
        gallery.appendChild(img);
    });
})

let scrollPosition = 0;

function openModal(event, img, text) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const imageText = document.getElementById("image-text")
    
    modalImage.src = img.src;
    imageText.innerHTML = text;
    modalImage.style.opacity = "100";
    modal.style.display = "flex";

    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
}
