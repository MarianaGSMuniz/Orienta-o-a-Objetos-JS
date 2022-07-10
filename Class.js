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

    #montaObjUser () {
        return ({
            name:this.#name,
            email:this.#email,
            nascimento:this.#nascimento,
            role:this.#role,
            ativo:this.#ativo


        })
    }
    exibirInfos(){
        const objUser = this.#montaObjUser();
        return `Nome: ${objUser.name}, Email: ${objUser.email}, Nascimento: ${objUser.nascimento}, Role: ${objUser.role}, Ativo: ${objUser.ativo}`;

}
}
