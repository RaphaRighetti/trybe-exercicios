let currentHour = 3;
let message = "";

if (22 <= currentHour && currentHour < 24) {
    message = "Não deveríamos comer nada, é hora de dormir";
      }

else if (18 <= currentHour && currentHour < 22) {
message = "Rango da noite, vamos jantar :D";
}

else if (14 <= currentHour && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
        }

    else if (11 <= currentHour && currentHour < 14) {
        message = "Hora do almoço!!!";
        }

        else if (4 <= currentHour && currentHour < 11) {
            message = "Hmmm, cheiro de café recém passado";
            }    
            
            else if (0 <= currentHour && currentHour < 4) {
                message = "Vai dormir vagabundo kkkk!";
                }

                else if (currentHour < 0 || currentHour >= 24) {
                    message = "Insira um horário valido";
                    }

                    console.log(message);