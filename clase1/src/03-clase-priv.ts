class User{
    name: string;
    email: string;
    private password: string;
    
    constructor(name: string, email: string, password: string){
        if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
            throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        }
        this.name = name;
        this.email = email;
        this.password = password;
    }

    recoveryPassword(){
        console.log(" :: Recovery password :: ");
        console.log(this.password);
    }
}

const user1 = new User("Leonardo", "test@gmail.com", "Leo@123456789");
console.log(user1);
//user1.password = "123456789"; // error has to be immutable
console.log(user1);
console.log(user1.recoveryPassword());
