// console.log("hul igennem");

// const endpoint = "https://kea-alt-del.dk/t7/api/products";

// function getData() {
//   fetch(endpoint)
//     .then((res) => res.json())
//     .then(showProducts);
// }

// function showProducts(products) {
//   console.log(products);
// }
// getData();

console.log("hul igennem");

// Her er adressen til vores API
const endpoint = "https://kea-alt-del.dk/t7/api/products";

// Her finder vi vores HTML-container
const container = document.querySelector("#productlistcontainer");

// Denne funktion henter vores produkter
function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showProducts);
}

// Denne funktion viser vores produkter
function showProducts(products) {
  console.log(products);

  // Vi opretter en tom tekststreng
  let markup = "";

  // Vi gennemgår hvert produkt
  products.slice(0, 10).forEach((product) => {
    markup += `
      <article class="productCard">

        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="${product.productdisplayname}"
        />

        <h3>${product.productdisplayname}</h3>

        <p>${product.price} DKK</p>

        <a href="productdetails.html?id=${product.id}">
          Se produkt
        </a>

      </article>
    `;
  });

  // Her indsætter vi produkterne i vores HTML
  container.innerHTML = markup;
}

// Vi starter programmet
getData();
