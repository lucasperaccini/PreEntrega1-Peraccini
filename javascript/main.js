let valor = document.getElementById("valor");
valor.addEventListener('keyup',convertir);
txtResultado = document.getElementById("resultado");
//hasta aca solo entiende que ocurre una accion y llama a la funcion convertir
unidad0 = document.getElementById("unidad0");
unidad0.addEventListener('change', convertir);
unidad1 = document.getElementById("unidad1");
unidad1.addEventListener('change', convertir);

//variable de resultado

let resultado;

//funcion

function convertir(){
    if(valor.value==''){
        return;
    }
    numero = valor.value;
    numero = parseFloat(numero);

    if(unidad0.value=="Kilometro" && unidad1.value=="Kilometro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero < "Kilometro/s es igual a " + resultado + "Kilometro/s"
    }
    if(unidad0.value=="Kilometro" && unidad1.value=="Metro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero < "Kilometro/s es igual a " + resultado + "Metro/s"
    }
    if(unidad0.value=="Kilometro" && unidad1.value=="Centimetro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero < "Kilometro/s es igual a " + resultado + "Centimetro/s"
    }
    if(unidad0.value=="Kilometro" && unidad1.value=="Milimetro"){
        resultado = numero * 100000;
        txtResultado.innerHTML = numero < "Kilometro/s es igual a " + resultado + "Milimetro/s"
    }
    if(unidad0.value=="Metro" && unidad1.value=="Kilometro"){
        resultado = numero / 1;
        txtResultado.innerHTML = numero < "Metro/s es igual a " + resultado + "Kilometro/s"
    }
    if(unidad0.value=="Metro" && unidad1.value=="Metro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero < "Metro/s es igual a " + resultado + "Metro/s"
    }
    if(unidad0.value=="Metro" && unidad1.value=="Centimetro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero < "Metro/s es igual a " + resultado + "Centimetro/s"
    }
    if(unidad0.value=="Metro" && unidad1.value=="Milimetro"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero < "Metro/s es igual a " + resultado + "Milimetro/s"
    }
    if(unidad0.value=="Centimetros" && unidad1.value=="Kilometro"){
        resultado = numero / 100000;
        txtResultado.innerHTML = numero < "Centimetro/s es igual a " + resultado + "Kilometro/s"
    }
    if(unidad0.value=="Centimetros" && unidad1.value=="Metro"){
        resultado = numero / 100;
        txtResultado.innerHTML = numero < "Centimetros/s es igual a " + resultado + "Metro/s"
    }
    if(unidad0.value=="Centimetros" && unidad1.value=="Centimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero < "Centimetro/s es igual a " + resultado + "Centimetro/s"
    }
    if(unidad0.value=="Centimetros" && unidad1.value=="Milimetro"){
        resultado = numero / 10;
        txtResultado.innerHTML = numero < "Centimetro/s es igual a " + resultado + "Milimetro/s"
    }
    if(unidad0.value=="Milimetro" && unidad1.value=="Kilometro"){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero < "Milimetro/s es igual a " + resultado + "Kilometro/s"
    }
    if(unidad0.value=="Milimetro" && unidad1.value=="Metro"){
        resultado = numero * 100;
        txtResultado.innerHTML = numero < "Milimetro/s es igual a " + resultado + "Metro/s"
    }
    if(unidad0.value=="Milimetro" && unidad1.value=="Centimetro"){
        resultado = numero * 10;
        txtResultado.innerHTML = numero < "Milimetro/s es igual a " + resultado + "Centimetro/s"
    }
    if(unidad0.value=="Milimetro" && unidad1.value=="Milimetro"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero < "Milimetro/s es igual a " + resultado + "Milimetro/s"
    }

}


