let formulario = document.getElementById('formTaller5');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let operacion = document.getElementById('operacion').value;

    if(isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = 'Por favor, ingresa ambos números.';
        return;
    }
    if(operacion === '') {
        resultado.textContent = 'Por favor, selecciona una operación.';
        return;
    }
    switch(operacion) {
        case 'suma':
            resultado.textContent = `Resultado: ${numero1 + numero2}`;
            break;
        case 'resta':
            resultado.textContent = `Resultado: ${numero1 - numero2}`;
            break;
        case 'multiplicacion':
            resultado.textContent = `Resultado: ${numero1 * numero2}`;
            break;
        case 'division':
            if (numero2 === 0) {
                resultado.textContent = 'Error: No se puede dividir por cero.';
            } else {
                resultado.textContent = `Resultado: ${numero1 / numero2}`;
            }
            break;
    }
})