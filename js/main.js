let numero = Math.floor(Math.random()*100) + 1;
let numeroIngresado = document.getElementById(`numeroIngresado`);
let mensaje = document.getElementById(`mensaje`);
let prueba = document.getElementById(`prueba`);
let pruebas = 0;

function chequearNumero () {
    pruebas ++;
    prueba.textContent = pruebas;
    let numeroEntrada = parseInt(numeroIngresado.value);

    if (numeroEntrada < 1 || numeroEntrada > 100 || isNaN(numeroEntrada)) {
        mensaje.textContent = `Los datos ingresados no son validos. Vuelva a ingresar un numero entre el 1 y el 100`
        mensaje.style.color = `red`;
        return
    };

    if(numeroEntrada === numero) {
        mensaje.textContent = `FELICIDADES!! ADIVINASTE EL NUMERO.`;
        mensaje.style.color = `red`;
        mensaje.style.fontWeight = `bold`;
        numeroIngresado.disable = true;

    }else if (numeroEntrada > numero) {
        mensaje.textContent = `¨Prueba con otro numero mas bajo`;
        mensaje.style.color = `red`;

    }else {
        mensaje.textContent = `Prueba con otro numero mas alto`;
        mensaje.style.color = `red`;
    }
}