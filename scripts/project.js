const requestURL =
  "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

async function getData(requestURL) {
  const response = await fetch(requestURL);
  const result = await response.json();
  return result["prophets"];
}

async function loadProphet(requestURL) {
  const prophets = await getData(requestURL);
  display(prophets);
}

async function display(prophets) {
  document.querySelector("div.cards").innerHTML = "";
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

loadProphet(requestURL);
async function searchProphet(value) {
  const reg = new RegExp(value, "i");
  const prophets = await getData(requestURL);
  const result = prophets.filter((data) => {
    if (reg.test(`${data.name} ${data.lastname}`)) {
      return data;
    }
  });

  await display(result);
}

document.getElementById("search").addEventListener("input", (value) => {
  const input = document.getElementById("search");
  searchProphet(input.value);
});
