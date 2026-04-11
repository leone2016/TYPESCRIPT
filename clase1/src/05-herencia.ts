console.log("¡Clase 1!");
class MeseroBasico{
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    servirCafeAmericano(){
        console.log("servir cafe con leche");
    }

    servirCafeConLeche(){
        console.log("servir cafe con leche");
    }
}

class MeseroModerno extends MeseroBasico{
    lastName: string;
    constructor(name: string, lastName: string) {
        super(name);
        this.lastName = lastName;

    }
    servirCapuccino(){
        console.log("Servir Capuccino");
    }

    print(){
        console.log(` name: ${this.name}, lastName: ${this.lastName}`);
    }
}


class Barista extends MeseroBasico{
    lastName: string;
    constructor(name: string, lastName: string) {
        super(name);
        this.lastName = lastName;

    }
    servirCapuccino(){
        console.log("preparar cafe con leche");
    }

    print(){
        
        console.log(` name: ${this.name}, lastName: ${this.lastName}`);
    }
    
    
}

console.log("============ Mesero Basico ============")
const meseroBasico = new MeseroBasico("Carlo Antonio");
meseroBasico.servirCafeAmericano();
meseroBasico.servirCafeConLeche();
console.log(" :: "+ meseroBasico.name)
console.log("\n\n============ Mesero Moderno ============")

const meseroModerno = new MeseroModerno("Leonard", "Medina");
meseroModerno.servirCafeAmericano();
meseroModerno.servirCafeConLeche();
meseroModerno.servirCapuccino();
meseroModerno.print()