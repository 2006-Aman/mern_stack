let container = document.getElementById("container");

fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        let cards = "";

        data.products.forEach((item) => {
            cards += `
                <div class="card">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p>Brand: ${item.brand}</p>
                    <h4>$${item.price}</h4>
                </div>
            `;
        });

        container.innerHTML = cards;
    })
    .catch((err) => {
        console.log(err);
    });

let obj = {
    name: "iPhone 13",
    price: 1000,
    brand: "Apple"
};