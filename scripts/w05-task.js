/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templesList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.innerHTML = temple.templeName;
    console.log("temple name: ", temple.templeName);

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templesList = await response.json();
  displayTemples(templesList);
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();

  const filter = document.getElementById("filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "nonutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      console.log(
        "adesoji",
        temples.filter(
          (temple) => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)
        )
      );
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
    default:
      displayTemples(temples);
  }
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templesList);
});
