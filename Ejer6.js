function viajeDesc(destino){
    let descuento;
    if (destino.toLowerCase() == "la costa de sol"){
        descuento = "5%";
        console.log("El viaje desde la cuidad de Palma hacia " + destino + ", tiene un descuento de " + descuento);
    }else if( destino.toLowerCase() == "panchimalco"){
        descuento = "10%";
        console.log("El viaje desde la cuidad de Palma hacia " + destino + ", tiene un descuento de " + descuento);
    }else if( destino.toLowerCase() == "puerto el triunfo"){
        descuento = "15%";
        console.log("El viaje desde la cuidad de Palma hacia " + destino + ", tiene un descuento de " + descuento);
    }else{ 
        console.log ("Destino no disponible");
    }
    
};

viajeDesc("panchimalco");