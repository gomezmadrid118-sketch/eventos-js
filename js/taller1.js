let formulario = document.getElementById('formTaller1');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event){
event.preventDefault();

let num = Number(document.getElementById('numero').value);

  if(num === 0 || isNaN(num)) {
    resultado.innerText = 'Escribe un número.';
    return;
  }
  if(!Number.isInteger(num)) {
    resultado.innerText = 'El número debe ser entero.';
    return;
  }
  if(num % 2 == 0) {
    resultado.innerText = 'El número es par.';
    return;
  } else {
    resultado.innerText = 'El número es impar.';
  }

  }
)
