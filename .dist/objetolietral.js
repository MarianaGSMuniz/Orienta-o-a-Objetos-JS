const user ={
    name: "Juan",
    email: "juan@j.com",
    nascimento: "01/01/1990",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(`Nome: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}

