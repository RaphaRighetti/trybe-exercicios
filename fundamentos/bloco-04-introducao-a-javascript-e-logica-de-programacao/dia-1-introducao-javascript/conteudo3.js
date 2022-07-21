let qualificacao = "aprovada";

switch (qualificacao) {
    case "aprovada":
        console.log('a pessoa está aprovada!');
        break;
    case "lista":
        console.log('a pessoa está na lista, podendo ser aprovada se vagas forem liberadas!');
        break;
    case "reprovada":
        console.log('a pessoa foi reprovada');
        break;
    default:
        console.log('não se aplica'); 
}