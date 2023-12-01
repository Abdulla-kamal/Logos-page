let container = document.querySelector(".container");

fetch("./images.json")
.then(res=>res.json())
.then(images=> {
    images.forEach(image => {
        let img = document.createElement("img");
        img.src = image.name;
        img.style.width = image.width;
        img.style.height = image.height;
        container.appendChild(img);
    });
})