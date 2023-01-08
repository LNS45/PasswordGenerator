/* Programa desarrollado por Lorenzo Chavez */
/* Generador de Claves */

/******************************Logica****************************************************/

numeros = ["1","2","3","4","5","6","7","8","9","0"];
minusculas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","X"];
caracteres = ["!","@","#","*","<",">","=","%","&","/"];
var clave = [];
var complejidad = 15;
var clavefinal;

function crearclave(){
    for(i = 1; i <= complejidad; i++){

        let seleccion = Math.round(Math.random()*3);

        if(seleccion == 0){
            let item = Math.round(Math.random()*numeros.length);
            clave.push(numeros[item]);
        }
        if(seleccion == 1){
            let item = Math.round(Math.random()*minusculas.length);
            clave.push(minusculas[item]);
        }
        if(seleccion == 2){
            let item = Math.round(Math.random()*mayusculas.length);
            clave.push(mayusculas[item]);
        }
        if(seleccion == 3){
            let item = Math.round(Math.random()*caracteres.length);
            clave.push(caracteres[item]);
        }
    }
    clavefinal = clave.join("");
}
function eliminarClave(){
    for(i = 0; i <= clave.length; i++){
        clave.splice(0,i);    
    }
}

/**********Funcionalidad HTML************************************************************/

function activarGenerar(){
    crearclave();
    escribirClave();
    eliminarClave();
}
function escribirClave(){
    document.getElementById("text").innerHTML = clavefinal;
}
function botoncopiar(){
    var contenido = document.getElementById("text");
    contenido.select();
    document.execCommand('copy');
}