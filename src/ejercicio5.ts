enum diaSemana {
    lunes = "lunes",
    martes = "martes",
    miercoles = "miercoles",
    jueves = "jueves",
    viernes = "viernes",
    sabado = "sabado",
    domingo = "domingo"
}

function esFinDeSemana(dia: diaSemana): boolean {
    switch (dia) {
        case diaSemana.sabado:
        case diaSemana.domingo:
            return true;
        default:
            return false;
    }
}

console.log(esFinDeSemana(diaSemana.lunes)); 
console.log(esFinDeSemana(diaSemana.sabado));

