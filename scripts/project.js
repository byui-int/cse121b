const requestURL =
  "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

async function getData(requestURL) {
  const response = await fetch(requestURL);
  const result = await response.json();
  return result["prophets"];
}

async function display(requestURL) {
  const prophets = await getData(requestURL);
  console.log(prophets);
  for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let dob = document.createElement("p");
    let pob = document.createElement("p");
    let image = document.createElement("img");

    h2.textContent = prophets[i].name + " " + prophets[i].lastname;
    dob.textContent = prophets[i].birthdate;
    pob.textContent = prophets[i].birthplace;
    image.setAttribute("src", prophets[i].imageurl);
    image.setAttribute(
      "alt",
      prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order
    );

    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(image);

    document.querySelector("div.cards").appendChild(card);
  }
}

display(requestURL);
async function searchProphet(value) {
  const reg = new RegExp(value);
  const prophets = await getData(requestURL);
}

document.getElementById("search").addEventListener("input", (value) => {
  const input = document.getElementById("search");
});
