//una funcion que reciba un nombre y un numero de veces y devuelva un array

function repetirNombre(nombre: string, veces: number): string[] {
    let resultado: string[] = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(nombre);
    }
    return resultado;
}

console.log(repetirNombre("Jose", 6));