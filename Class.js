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

    get name(){
        return this.#name;
    }
    get email(){
        return this.#email;
    }
    get nascimento(){
        return this.#nascimento;
    }
    get role(){
        return this.#role;
    }
    get ativo(){
        return this.#ativo;
    }
    set name (newName){
        if (newName === ''){
            throw new Error('Nome não pode ser vazio');
        }
            this.#name = newName;
    }
     
    exibirInfos(){
        return `Nome: ${this.name}, Email: ${this.email}, Nascimento: ${this.nascimento}, Role: ${this.role}, Ativo: ${this.ativo}`;

}
}
