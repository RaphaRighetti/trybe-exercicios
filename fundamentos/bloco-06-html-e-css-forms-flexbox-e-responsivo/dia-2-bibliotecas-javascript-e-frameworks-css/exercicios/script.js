let form = {
  nome: '',
  email: '',
  local: '',
  pq: '',
  data: '',
  agree: ''
}

function tirarPadrao(e) {
  e.preventDefault();
  form['nome'] = document.getElementsByName('name')[0].value;
  let local = document.getElementsByName('localidade');
  for (let valor of local) {
    if (valor.checked) {
      form['local'] = valor.id;
    }
  }
  form['email'] = document.getElementsByName('email')[0].value
  form['pq'] = document.getElementsByTagName('textarea')[0].value
  form['data'] = document.getElementById('dataTrip').value
  let agree = document.getElementsByName('agree');
  form['agree'] = '';
  for (let valor of agree) {
    if (valor.checked) {
      form['agree'] += valor.id + ' ';
    }
  }
  console.log(form);
  localStorage.setItem('form', JSON.stringify(form));
  console.log(localStorage);
}

const submitButtom = document.getElementById('submitButtom');
submitButtom.addEventListener('click', tirarPadrao);

const nomeForm = document.getElementById('nomeInput');
const emailForm = document.getElementById('emailInput');
const descricao = document.getElementsByTagName('textarea')[0];
const imagens = document.getElementById('imageAgree');

submitButtom.addEventListener('click', function () {
  if (nomeForm.value.length < 10 || emailForm.value.length < 10 || imagens.checked === false) {
    window.alert('Dados Inválidos');
  }
  else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});
