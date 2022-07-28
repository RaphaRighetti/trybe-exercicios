const header = document.querySelector("#header-container");

header.style.backgroundColor = "rgb(67, 212, 140)";

const secDivs = document.querySelectorAll("section div");
const title = document.querySelectorAll("section div h3");
const footer = document.querySelector("#footer-container");

console.log(secDivs);

for (let i = 0; i <= 1; i += 1) {
  secDivs[i].style.backgroundColor = "darksalmon";
  title[i].style.backgroundColor = "indigo";
}

for (let i = 2; i <= 3; i += 1) {
  secDivs[i].style.backgroundColor = "rgb(233, 230, 64)";
  title[i].style.backgroundColor = "black";
}

footer.style.backgroundColor = "darkgreen";
