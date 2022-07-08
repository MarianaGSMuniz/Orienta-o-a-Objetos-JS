class User {
    constructor(name, email, nascimento, role,ativo = true) {
        this.name = name;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }
    exibirInfos() {
        return `Hi, I'm ${this.name}`, `I'm ${this.email}`;

    }
}

const newUser = new User('João', 'j@j.com', '01/01/2000', );
console.log(newUser.exibirInfos());
console.log(newUser);
console.log(User.prototype.isPrototypeOf(newUser));