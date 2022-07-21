let weekDay = "quarta-feira"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}

else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU")
}

else {
    console.log("Favor insira um dia da semana valido. Valores aceitos: /segunda-feira/ /terça-feira/ /quarta-feira/ /quinta-feira/ /sexta-feira/ /sábado/ /domingo/; Obs: Os valores tem que ser escritos exatamente como descritos para serem validados. Todas letras tem que ser minusculas, e as barras (/) não acompanham.")
}