function modeloDesc(modelo){
    let descuento;
    if (modelo.toLowerCase() == "ford fiesta"){
        descuento = "5%";
    }else if(modelo.toLowerCase() == "ford focus" ){
        descuento = "10%";
    }else if ( modelo.toLowerCase() == "ford escape"){
        descuento = "20%";
    }else{ 
        descuento = "Modelo no disponible"
    }
    console.log(descuento);

    let ModeloCell = document.querySelector(".ModeloCell" );
    let DescuentoCell = document.querySelector(".DescuentoCell");

    ModeloCell.innerHTML = modelo;
    DescuentoCell.innerHTML = descuento;
};

modeloDesc("FORD fiesta");