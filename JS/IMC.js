let botonCalcular = document.getElementById(btn_calcular);
function calculandoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = document.getElementById("resultado")
    if(altura !== "" && peso !==""){
        let imc = (peso / (altura*altura)).toFixed(2);
        let message = "";
        if(imc < 18.5){
            message = "Bajo peso!"
        }else if(imc < 25){
            message = "Estás en tu peso ideal!"
        }else if(imc < 30){
            message = "Tienes un ligero sobrepeso!"
        }else if(imc < 35){
            message = "Obesidad grado I"
        }else if(imc < 40){
            message = "Obesidad grado II"
        }else {
            message = "Obesidad grado III"
        }
        resultado.textContent = `Su IMC es ${imc}! ${message}`;      
    }else{
        resultado.textContent = "Complete todos los campos!!!"
    }
}
btn_calcular.addEventListener('click', calculandoIMC);
