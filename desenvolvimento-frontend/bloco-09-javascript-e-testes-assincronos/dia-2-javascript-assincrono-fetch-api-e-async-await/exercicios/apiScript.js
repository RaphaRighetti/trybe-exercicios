// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then(response => response.json());
};

console.log(fetchJoke());

function printJoke() {
  const jokeDiv = document.getElementById('jokeContainer');
  fetchJoke().then(data => jokeDiv.innerHTML = data.joke);
}

window.onload = () => {
  fetchJoke();
  printJoke();
};