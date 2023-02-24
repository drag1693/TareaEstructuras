function myfunction() {
  let nota1 = document.querySelector(".nota1Cell").value;
  let nota2= document.querySelector(".nota2Cell").value;
  let vpon1 = document.querySelector(".vpon1Cell").value;
  let vpon2 = document.querySelector(".vpon2Cell").value;
  let prueba = document.querySelector(".prueba");

  let notamedipon= (nota1*vpon1) + (nota2*vpon2);
  
  prueba.innerHTML = notamedipon;
  console.log(nota1,nota2);
  console.log(vpon1,vpon2);
};


