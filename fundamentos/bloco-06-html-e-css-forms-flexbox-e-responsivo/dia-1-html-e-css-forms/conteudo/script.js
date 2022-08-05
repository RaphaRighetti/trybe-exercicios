// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#hrefi");

console.log(HREF_LINK);

HREF_LINK.addEventListener('click', function(e) {
  e.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', function(e) {
  x = e.key;
  if (x !== 'a') {
    e.preventDefault();
  }
});

INPUT_CHECKBOX.addEventListener('click', function(e) {
  e.preventDefault();
});
