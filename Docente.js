import User from "./Class";
export default class Docente extends User{
    constructor(nome,email, nascimento, role = "docente", ativo = true){
       super (nome, email, nascimento, role, ativo);

    }
    aprovaEstudante(estudante, curso){
        return 'Estudante ${estudante} foi aprovado no curso ${curso}';
    }
}

