let formulario = document.getElementById('formTaller3');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event){
  event.preventDefault();

  let n1 = parseInt(document.getElementById('nota1').value);
  let n2 = parseInt(document.getElementById('nota2').value);
  let n3 = parseInt(document.getElementById('nota3').value);

  if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultado.innerText = 'Por favor complete los números.';
    return;
  }
  if(n1 == n2 && n1 == n3){
    resultado.innerText = 'Los tres números son iguales';
    return;
  } 
  if(n1 > n2 && n1 > n3){
    resultado.innerText = `El mayor es ${n1}`;
  } else if(n2 > n1 && n2 > n3){
    resultado.innerText = `El mayor es ${n2}`;
  }else {
    resultado.innerText = `El mayor es ${n3}`;
  }
})