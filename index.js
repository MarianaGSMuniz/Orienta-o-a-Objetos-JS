import User from "./Class";
import Docente from "./Docente";
import Admin from "./Admin";


const novoUser= new User("Mariana", "m@m.com", "01/01/2000");
console.log(novoUser.exibirInfos());

const novoAdmin= new Admin("Thiago", "t@t.com", "01/01/2000");
console.log (novoAdmin.nome);
