class User{
    constructor(name, email, nascimento, role, ativo = true){
        this.name = name;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    }
    exibirInfos(){
        return `Hi, I am ${this.name}`, `My email is ${this.email}`, `My birthdate is ${this.nascimento}`, `My role is ${this.role}`, `My status is ${this.ativo}`;
    }
}

    const novoUser = new User("Juan", "j@j.com", "01/01/1990", "estudante", true);  
    console.log(novoUser.exibirInfos());
    console.log (novoUser.name);

    console.log(User.prototype.isPrototypeOf(novoUser));