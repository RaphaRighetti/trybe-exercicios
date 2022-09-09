async function getApi() {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json`;
  const api = await fetch(url);
  const apiObj = await api.json();
  return apiObj;
}

const botao = document.getElementsByTagName('button')[0];

botao.addEventListener('click', async ()  => {
  const printReal = document.getElementById('real');
  const input = document.getElementsByTagName('input')[0];
  const { brl } = await getApi();
  const valorBrl = input.value * brl;
  printReal.innerHTML = `R$ ${valorBrl.toFixed(2)}`;
});
