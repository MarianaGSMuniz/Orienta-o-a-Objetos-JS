import User from "./Class";
class Docente extends User{
    constructor(nome,email, nascimento, role = "docente", ativo = true){
       super (nome, email, nascimento, role, ativo);

    }
    aprovaEstudante(estudante, curso){
        return 'Estudante ${estudante} foi aprovado no curso ${curso}';
    }
}


const novoDocente = new Docente("Mari", "m@m.com", "01/01/2000");
    console.log(novoDocente.aprovaEstudante('João', 'JS'));
    console.log(novoDocente.exibirInfos());
    console.log(novoDocente);