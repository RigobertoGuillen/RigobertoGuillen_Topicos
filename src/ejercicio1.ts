enum EstadoProducto {
    Disponible = "Disponible",
    Agotado = "Agotado",
    Descontinuado = "Descontinuado"
}

type IDProducto = number | string;

interface Producto {
    id : IDProducto;
    nombre : string;
    precio : number;
    estado : EstadoProducto;
    descripcion? : string;
}

function mostrarDetallesProducto(producto: Producto): void {
    console.log("Detalles del Producto:");
    console.log(`ID: ${producto.id}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Estado: ${producto.estado}`);
    if (producto.descripcion) {
        console.log(`Descripción: ${producto.descripcion}`);
    }
}

const producto1: Producto = {
    id: 101,
    nombre: "Laptop",
    precio: 24000,
    estado: EstadoProducto.Disponible,
    descripcion: "Laptop de alta gama con 16GB RAM y 512GB SSD"
};

const producto2: Producto = {
    id: "Abc",
    nombre: "Smartphone",
    precio: 8000,
    estado: EstadoProducto.Agotado
};

mostrarDetallesProducto(producto1);
mostrarDetallesProducto(producto2);
