export class Patient {
    id: string;
    active: boolean;
    name: Name;
    adresse: Adresse;
    gender: string;

    constructor(id: string, active: boolean, name: Name, adresse: Adresse, gender: string) {
        this.id = id;
        this.active = active;
        this.name = name;
        this.adresse = adresse;
        this.gender = gender;
    }
}

class Name {
    family: string;
    given: string[];

    constructor(family: string, given: string[]) {
        this.family = family;
        this.given = given;
    }
}

class Adresse {
    line: string[];
    city: string;

    constructor(line:string[], city:string){
        this.line = line;
        this.city = city;
    }
}   