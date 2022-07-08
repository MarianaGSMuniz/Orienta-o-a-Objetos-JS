function User (nome,email){
    this.nome=nome;
    this.email=email;

    this.exibirInfos = function(){
   return `Nome: ${this.nome}`; `Email: ${this.email}`;
    }

}

const novoUser = new User("Juan"," j@j.com");
console.log(novoUser.exibirInfos());

