const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const CatListContainer = document.querySelector("#CatListContainer");

// console.log(produktliste);

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  //console.log(json);

  json.forEach((element) => {
    CatListContainer.innerHTML += `
      <a class="link" href=productlist.html?cat=${element.category}>${element.category}</a>
    `;
  });
}
