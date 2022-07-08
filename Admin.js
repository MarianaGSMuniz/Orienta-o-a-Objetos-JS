import User from "./Class";

class Admin extends User{
    constructor(nome,email, nascimento, role = "admin", ativo = true){
       super (nome, email, nascimento, role, ativo);


    }
    criarCurso(nomeDoCurso,vagas){
        return 'Curso  ${nomeDoCurso} criado com sucesso';
    }
}
 const novoAdmin = new Admin("João", "j@j.com", "01/01/2000");
    console.log(novoAdmin.criarCurso('JS,20 vagas'));