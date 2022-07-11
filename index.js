import User from "./Class";
import Docente from "./Docente";
import Admin from "./Admin";


//const novoUser= new User("Mariana", "m@m.com", "01/01/2000");
//console.log(novoUser.exibirInfos());

//const novoAdmin= new Admin("Thiago", "t@t.com", "01/01/2000");
//console.log(novoAdmin.name);
//novoAdmin.name = "";
//console.log(novoAdmin.name);

const newDocente = new Docente("Maria", "m@.com", "01/01/2000");
console.log(newDocente.exibirInfos());