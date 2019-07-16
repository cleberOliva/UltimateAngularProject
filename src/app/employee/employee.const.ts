export class Employee {
    name: string;
    person;

    constructor(_name: string, _person: number){
        this.name = _name;
        this.person = {
            id : _person
        };
    };
}