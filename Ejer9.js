function valoresT(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
    let array = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];
    let arrNeg = [];
    let arrPos = [];
    let mult15 = [];
    let arrPares = [];

    for( let i = 0; i<10; i++){
        if(array[i] < 0 ){
            arrNeg.push(array[i])
        }else if(array[i] >= 0){
            arrPos.push(array[i])
        }
    };

    for( let i = 0; i<10; i++){
        if(array[i] %15 == 0){
            mult15.push(array[i])
        }
    };

    for( let i = 0; i<10; i++){
        if(array[i] %2 == 0 ){
            arrPares.push(array[i])
        }
    };

    let acumulado = 0;
    for( let i = 0; i<= arrPares; i++){
        acumulado += arrPares[i];
    }
    

    console.log('La cantidad de valores negativos es: '+ arrNeg.length);
    console.log('La cantidad de valores positivos es: '+ arrPos.length);
    console.log('La cantidad de multiplos de 15 es: '+ mult15.length);
    console.log('La suma de numeros pares es: '+ acumulado );
};


valoresT(1,2,3,4,5,6,30,-5,-8,-1);
