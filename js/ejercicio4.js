let formularioDividir = document.getElementById('formularioDividir');

formularioDividir.addEventListener('submit', dividir);

function dividir(event) {
    event.preventDefault();

    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    if(numero2 === 0){
        alert('No es posible dividir entre 0');
        return;
    } else if(isNaN(numero1) || isNaN(numero2)){
        alert('Escribe ambos números');
        return;
    } else{
        alert(`Division: ${numero1 / numero2}`);
    }
}