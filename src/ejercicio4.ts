class cuentaBancaria {
    titular : string ;
    saldo : number ;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }


depositar(monto : number): void {
    if (monto > 0) {
        this.saldo += monto;
        console.log(`Se han depositado ${monto}. Nuevo saldo: ${this.saldo}`);
    } else {
        console.log("El monto a depositar debe ser positivo.");
    }
}

retirar(monto : number): void {
    if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Se han retirado ${monto}. Nuevo saldo: ${this.saldo}`);
    } else {
        console.log("El monto a retirar debe ser positivo y no puede exceder el saldo.");
    }
}
consultarSaldo(): number {
    return this.saldo;
}

}

const cuenta1 = new cuentaBancaria("Juan Perez", 1000);
cuenta1.depositar(500);
cuenta1.retirar(200);
console.log(`Saldo actual: ${cuenta1.consultarSaldo()}`);
