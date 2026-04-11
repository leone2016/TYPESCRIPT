console.log("¡Clase 1!");
interface Engine{
    start():void;
}

class Gas implements Engine {

    start(): void {
        console.log("Car motor started with roar sound");
    }

}

class Electric implements Engine {

    start(): void {
        console.log("Electric motor started silently");
    }
}

class Vehicle{
    name: string;
    private engine: Engine;
    constructor(name:string, engine: Engine) {
        this.name = name;
        this.engine = engine;
    }

    public startVehicle():void{
        this.engine.start();
        console.log(this.name+" is now ready to drive === OK");
    }

    public setEngine(engine: Engine){
        this.engine = engine;
    }
}

class Main{
    constructor() {
        const gas  = new Gas();
        const electric = new Electric();

        const toyota = new Vehicle("toyota",gas);
        const tesla = new Vehicle("tesla",electric);

        toyota.startVehicle();
        console.log("----------------------------")
        tesla.startVehicle();
        console.log("----------------------------")
        toyota.setEngine(electric);
        toyota.startVehicle();
    }
}

new Main();
