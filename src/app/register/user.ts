export class User{
    id: string;
    name: string;
    mail: string;
    phone: string;
    password: string;
    birth: string;
    country;
    phoneCode;

    constructor(
        _name: string,
        _mail: string,
        _phone: string,
        _password: string,
        _birth: string,
        _country: number = 1,
        _phoneCode: number = 1
    ){
        this.name = _name;
        this.mail = _mail;
        this.phone = _phone;
        this.password = _password;
        this.birth = _birth;
        this.country = {
            id: _country
        };
        this.phoneCode = {
            id: _phoneCode
        };
    }
}