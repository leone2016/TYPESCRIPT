console.log("¡Clase 1!");


let userName: String = "Leonardo";
userName = "Patricio";

let ageOfPatient: Number = 25;
let isUserLogged: boolean;

let ListNamesofUserRegistered: Array<string> = ["Martha", "Jose", "Robert", "Lore"];

ListNamesofUserRegistered.push("Leonardo");

console.log(ListNamesofUserRegistered);
console.log("---------------------------------------------------------")
let listStudentsEnrolled : Array<{name: string, age: number, address: Array<string>}> = [
    {name: "Leonardo", age: 25, address: ["Calle 1", "Calle 2"]},
    {name: "Patricio", age: 26, address: ["Calle 3", "Calle 4"]},
    {name: "Martha", age: 27, address: ["Calle 5", "Calle 6"]},
    {name: "Jose", age: 28, address: ["Calle 7", "Calle 8"]},
    {name: "Robert", age: 29, address: ["Calle 9", "Calle 10"]},
    {name: "Lore", age: 30, address: ["Calle 11", "Calle 12"]},
];

console.log(listStudentsEnrolled);
