const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//pois a class tech está com o valor 'transform: translateY(-20px)'

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener('click', function () {
  firstLi.className = 'tech';
  secondLi.className = '';
  thirdLi.className = '';
  input.value = '';
  input.placeholder = 'Alterar a primeira tecnologia';
});

secondLi.addEventListener('click', function () {
  secondLi.className = 'tech';
  firstLi.className = '';
  thirdLi.className = ';'
  input.value = '';
  input.placeholder = 'Alterar a segunda tecnologia';
});

thirdLi.addEventListener('click', function () {
  thirdLi.className = 'tech';
  secondLi.className = '';
  firstLi.className = '';
  input.value = '';
  input.placeholder = 'Alterar a terceira tecnologia';
});

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keyup', function () {
  document.querySelector('.tech').innerHTML = input.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', function () {
  window.open("http://rapharighetti.github.io");
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function () {
  myWebpage.style.transition = 'all 0.25s ease';
  myWebpage.style.color = '#2fc18c';
  myWebpage.style.cursor = 'crosshair';
});

myWebpage.addEventListener('mouseleave', function () {
  myWebpage.style.transition = 'all 0.25s ease';
  myWebpage.style.color = 'white';
});

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.