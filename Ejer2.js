function noFinal (exam, tareas, asis, inv, nombre, carnet){
    let notafinal;
    

    notafinal= exam + tareas + asis + inv;

    console.log( nombre + " Con número de carnet: " + carnet + " Obtuvo una nota de: "+ notafinal + " puntos" );

};


noFinal(20,40,10,30,"Juan", 20225672);
