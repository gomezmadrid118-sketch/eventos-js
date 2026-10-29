let formulario = document.getElementById('formTaller2');

formulario.addEventListener('submit', function (event){
 event.preventDefault();
 let nota = parseFloat(document.getElementById('nota').value);

 if(isNaN(nota)){
  resultado.innerText = 'Escribe una nota';
  return;
 }
 if(nota < 0 || nota > 5) {
  resultado.innerText = 'La nota debe estar entre 0.0 y 5.0';
  return;
 }
 let desempeno;
 let resultado = 'aprovado';
 if(nota >= 4.5) {
  desempeno = 'Excelente';
} else if(nota >= 4.0) {
  desempeno = 'Bueno';
} else if(nota >= 3.0) {
  desempeno = 'Aceptable'
} else {
  desempeno = 'Insuficiente';
  resultado = 'No aprovado';
}
document.getElementById('resultado').innerText = `Tu nota es ${nota} - ${desempeno}: ${resultado}`;
})