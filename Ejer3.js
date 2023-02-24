function aumentoTrabajador(nombre,salario,categoria,aumento){
let NombreCell= document.querySelector(".NombreCell");
let SalarioCell= document.querySelector(".SalarioCell");
let CategoriaCell= document.querySelector(".CategoriaCell");
let AumentoCell= document.querySelector(".AumentoCell");
let AumentoSalarialCell = document.querySelector('.AumentoSalarialCell');

let aumentoSalarial=  (salario * aumento/100) + salario;

NombreCell.innerHTML = nombre;
SalarioCell.innerHTML = salario;
CategoriaCell.innerHTML = categoria;
AumentoCell.innerHTML = aumento;
AumentoSalarialCell.innerHTML = aumentoSalarial;
};

aumentoTrabajador('Juan', 200, 'A', 15 );