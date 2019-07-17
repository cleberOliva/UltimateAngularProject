export class Soil {
    id: number;
    description: string;
    descriptionPT: string;
    descriptionES: string;
    createdAt: string;
    person;

    constructor(
        _description: string,
        _descriptionPT: string,
        _descriptionES: string,
        _createdAt: string,
        _person: number = 59
    ){
        this.description = _description;
        this.descriptionPT = _descriptionPT;
        this.descriptionES = _descriptionES;
        this.createdAt = _createdAt;
        this.person = {
            id: _person
        };
    }
}