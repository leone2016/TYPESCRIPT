class Animal{
    raza: string;
    color: string;
    esMamifero: boolean;
    edad: number;

    constructor(raza: string, color: string, esMamifero: boolean, edad: number){
        this.raza = raza;
        this.color = color;
        this.esMamifero = esMamifero;
        this.edad = edad;
    }

    describirAnimal(){
        console.log(`El animal es de raza ${this.raza}, color ${this.color}, es mamifero ${this.esMamifero} y tiene ${this.edad} años`);
    }
    
}

const animal1 = new Animal("Perro", "Negro", true, 5);
console.log(animal1);
console.log(animal1.raza);
console.log(animal1.color);
