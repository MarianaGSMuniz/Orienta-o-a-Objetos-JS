const user ={
    name: "Juan",
    email: "juan@j.com",
    nascimento: "01/01/1990",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(`Nome: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}

const admin ={
    name: "Mariana",
    email: "ma@m.com",
    nascimento: "01/01/1991",
    role: "admin",
    cfriarCuso(){
        console.log("Criando um novo curso");
    }
}
Object.setPrototypeOf(admin, user);
admin.cfriarCuso();
admin.exibirInfos();






