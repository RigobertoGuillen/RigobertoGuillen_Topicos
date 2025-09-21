interface Usuario {
    nombre : string;
    edad : number;
    email? : string;
};

const usuario1 : Usuario = {
    nombre : "Luis",
    edad : 18
};

function imprimirUsario(usuario : Usuario){
    console.log("IMFORMACION DEL USUARIO");
    console.log(`nombre : ${usuario.nombre}`);
    console.log(`edad : ${usuario.edad}`);
    if (usuario.email) {
        console.log(`email : ${usuario.email}`);
    }
}

imprimirUsario(usuario1);



