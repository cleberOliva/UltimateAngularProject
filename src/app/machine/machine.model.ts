export class Machine {
    id: number;
    year: string;
    description: string;
    person;

    constructor(
        _year: string,
        _description: string,
        _person: number
    ){
        this.year = _year;
        this.description = _description;
        this.person = {
            id : _person
        };
    }
}