

function repetirNombre(nombre: string, veces: number): string[] {
    let resultado: string[] = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(nombre);
    }
    return resultado;
}

console.log(repetirNombre("Jose", 6));