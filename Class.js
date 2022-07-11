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
     
    exibirInfos(){
        const objUser = this.#montaObjUser();
        return `Nome: ${objUser.name}, Email: ${objUser.email}, Nascimento: ${objUser.nascimento}, Role: ${objUser.role}, Ativo: ${objUser.ativo}`;

}
}
