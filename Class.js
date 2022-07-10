export default class User{
    #name;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(name, email, nascimento, role, ativo = true){
        this.#name = name;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }
    exibirInfos(){
        return `Hi, I am ${this.#name}`, `My email is ${this.#email}`, `My birthdate is ${this.nascimento}`, `My role is ${this.role}`, `My status is ${this.ativo}`;
    }
}

