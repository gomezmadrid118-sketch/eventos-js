let formulario = document.getElementById('formTaller2');
let resultado = document.getElementById('resultado');

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
 let estado = 'Aprobado';
 if(nota >= 4.5) {
  desempeno = 'Excelente';
} else if(nota >= 4.0) {
  desempeno = 'Bueno';
} else if(nota >= 3.0) {
  desempeno = 'Aceptable'
} else {
  desempeno = 'Insuficiente';
  estado = 'No aprobado';
}
resultado.innerText = `Tu nota es ${nota} - ${desempeno}: ${estado}`;
})