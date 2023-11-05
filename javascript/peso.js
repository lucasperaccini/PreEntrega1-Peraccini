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


//este todavia no esta finalizado porque estoy viendo de cambiar la forma, si me autorizas de intentar hacerlo con arrays desde el principio, pero creo que tenria que incluir temas y propiedades que creo que todavia no vimos
