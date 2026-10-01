// const { a } = require("shiki/dist/langs-bundle-full-B4n9xYHw.mjs");

const cat = new URLSearchParams(window.location.search).get("cat");
// console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}&limit=30`;

const produktliste = document.querySelector(".produktliste");

const visantal = document.querySelector("#filter span");

document.querySelectorAll("#filter button").forEach((knap) => knap.addEventListener("click", filtrer));
document.querySelectorAll("#sortering button").forEach((knap) => knap.addEventListener("click", sorter));

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

function sorter(e) {
  const valgt = e.target.textContent; // gem det der står i knappen der blev klikket på

  if (valgt == "Pris lav-høj") {
    udsnit.sort((a, b) => a.price - b.price); // sorter efter pris
  } else if (valgt == "Pris høj-lav") {
    udsnit.sort((a, b) => b.price - a.price);
  } else if (valgt == "A-Z") {
    udsnit.sort((a, b) => a.productdisplayname.localeCompare(b.productdisplayname)); // sorter efter navn
  } else if (valgt == "Z-A") {
    udsnit.sort((a, b) => b.productdisplayname.localeCompare(a.productdisplayname));
  }

  visData(udsnit);
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
  visantal.textContent = json.length;
  produktliste.innerHTML = "";

  json.forEach((element) => {
    const tilbudspris = Math.round(element.price - (element.price * element.discount) / 100);
    produktliste.innerHTML += `<a class="productCard ${element.soldout ? "udsolgt" : ""}"   href=productdetails.html?id=${element.id}>

        <article class="productCard">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede" />
          <h2>${element.productdisplayname}</h2>
          <h3>${element.articletype}</h3>
          <p>${element.category}</p>
          ${
            element.discount
              ? `<p class="tilbudslabel">-${element.discount}%</p>
          <p><span class="førpris"> før DKK ${element.price},-</span> Nu DKK ${tilbudspris},-</p>`
              : `<p>DKK ${element.price},-</p>`
          }
         
        </article>
      </a>`;
  });
}

const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());
