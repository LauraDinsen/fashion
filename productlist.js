const cat = new URLSearchParams(window.location.search).get("cat");
// console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const produktliste = document.querySelector(".produktliste");

document.querySelectorAll("#filter button").forEach((knap) => knap.addEventListener("click", filtrer));

let alledata, udsnit;

function filtrer(e) {
  console.log(e.target.textContent);
  console.log(alledata, udsnit);
  const valgt = e.target.textContent;
  if (valgt == "Alle") {
    visData(alledata);
  } else udsnit = alledata.filtrer;
  produkt = produkt.gender == valgt;
}

// const h2 = document.querySelector("h2");
// h2.textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    alleData = udsnit = data;
    visData(data);
  });

function visData(json) {
  produktliste.innerHTML = "";

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
