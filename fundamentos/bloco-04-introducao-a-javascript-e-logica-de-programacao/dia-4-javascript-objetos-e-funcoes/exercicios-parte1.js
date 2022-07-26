//ex1

console.log("ex1");

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda,", info['personagem']);
  console.log(" ");

  //ex2

  console.log("ex2");

  info['recorrente'] = 'sim';

  console.log(info);
  console.log(" ");

  //ex3

  console.log("ex3");

  for (let key in info) {
    console.log(key);
  }
  console.log(" ");

  //ex4

  console.log("ex4");

  for (let key in info) {
    console.log(info[key]);
  }
  console.log(" ");

  //ex5

  console.log("ex5");

  let infoDois = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente : 'sim',
  };

  for (let key in info) {
    if (info[key] === infoDois[key] && key === 'recorrente') {
      console.log("Ambos recorrentes");
    }
    else {
    console.log(info[key], "e", infoDois[key]);
  }
}
  
  console.log(" ");

  //ex6

  console.log("ex6");

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de", leitor['nome'], leitor['sobrenome'], "se chama '" +  leitor['livrosFavoritos'][0]['titulo'] + "'");

  console.log(" ");

  //ex7

  leitor['livrosFavoritos'].push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

  //ex8

  console.log("ex8");

  console.log(leitor['nome'], "tem", leitor['livrosFavoritos'].length, "livros favoritos.");
  
  console.log(" ");