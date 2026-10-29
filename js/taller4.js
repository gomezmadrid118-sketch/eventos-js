let formulario = document.getElementById('formTaller4');

formulario.addEventListener('submit', function (event){
  event.preventDefault();

  let nombre = (document.getElementById('nombre').value).trim();
  let edad = document.getElementById('edad').value;
  let correo = document.getElementById('correo').value;
  let contrasena = document.getElementById('contrasena').value;
  let cContrasena = document.getElementById('contrasena2').value;

  if(nombre == '') {
    alert('Escribe por favor un nombre válido');
    return;
  }
  if(isNaN(edad) || (edad < 18 && edad > 100)) {
    alert('Escribe una edad válida');
    return;
  }
  if(!(correo.includes('@') && correo.includes('.'))){
    alert('El correo debe incluir un @ y un .');
    return;
  }
  if(!(cContrasena == contrasena)) {
    alert('La confirmación de la contraseña no es igual a la anterior');
    return;
  }
  document.getElementById('resultado').innerText = `Registro exitoso, bienveni@ al sistema ${nombre}`;
})