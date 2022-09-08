const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const printTemperature = (temperature) => console.log(`A temperatura de Marte é: ${temperature} graus celsius`);

const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    const temperature = callback();
    printTemperature(temperature);
  }, messageDelay());
};

sendMarsTemperature(getMarsTemperature); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo