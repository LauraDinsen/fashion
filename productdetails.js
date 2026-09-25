console.log("test");

const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const produkt = document.querySelector("#produkt");

const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());
// console.log(produktliste);

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  console.log(produkt);

  produkt.innerHTML = `<a class="link" href=productdetails.html?id=${element.id}>
        <article class="productCard">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede" />
          <h2>${element.productdisplayname}</h2>
          <h3>${element.articletype}</h3>
          <p>${element.category}</p>
          <p>${element.price} DKK</p>
        </article>
      </a>`;
}
