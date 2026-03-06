
function calcularIMC(){

let altura = document.getElementById("altura").value;
let peso = document.getElementById("peso").value;

altura = altura / 100;

let imc = peso / (altura * altura);

imc = imc.toFixed(2);

let resultado = "";

if(imc < 18.5){
resultado = "Abaixo do peso";
}
else if(imc < 25){
resultado = "Peso normal";
}
else if(imc < 30){
resultado = "Sobrepeso";
}
else{
resultado = "Obesidade";
}

document.getElementById("resultado").innerHTML =
"Seu IMC é " + imc + " (" + resultado + ")";

}