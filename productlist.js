const cat = new URLSearchParams(window.location.search).get("cat");
// console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const produktliste = document.querySelector(".produktliste");

// console.log(produktliste);

const h2 = document.querySelector("h2");
h2.textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  //   console.log(produktliste);

  json.forEach((element) => {
    produktliste.innerHTML += `
      <a class="link" href=productdetails.html?id=${element.id}>
        <article class="productCard">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede" />
          <h2>${element.productdisplayname}</h2>
          <h3>${element.articletype}</h3>
          <p>${element.category}</p>
          <p>${element.price} DKK</p>
        </article>
      </a>
    `;
  });
}

const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());
