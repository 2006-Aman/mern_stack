var btn = document.getElementById("submit");

btn.addEventListener("click", handleClick);

function handleClick() {

    var imageInput = document.getElementById("url");
    var titleInput = document.getElementById("title");
    var ratingInput = document.getElementById("rating");

    var image = imageInput.value;
    var title = titleInput.value;
    var rating = ratingInput.value;


    var card = document.getElementById("MovieCard");

    card.innerHTML += `
        <div class="card">
            <img src="${image}" alt="${title}">
            <h3>${title}</h3>
            <p> ${rating}</p>
        </div>
    `;

    imageInput.value = "";
    titleInput.value = "";
    ratingInput.value = "";

    imageInput.focus();
}