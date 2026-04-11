console.log("¡Clase 1!");
class User2{
    private readonly id: string;
    name: string;
    readonly email: string;
    private password: string;

    constructor(name: string, email: string, password: string){
        if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
            throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        }
        this.id = "1";
        this.name = name;
        this.email = email;
        this.password = password;
    }

    recoveryPassword(){
        console.log(" :: Recovery password :: ");
        console.log(this.password);
    }

    // debe ser inmutable
    // changeId(){
    //     this.id = "asdas";
    // }
}

const user2 = new User2("Leonardo", "test@gmail.com", "Leo@123456789");
// user2.id = "12312"; // debe ser inmutable
