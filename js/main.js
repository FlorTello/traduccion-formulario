function translate(){
	var title = document.getElementById('form-signin-heading');//.value = "";
	var email = document.getElementById('inputEmail');//"Correo Electrónico";
	var password = document.getElementById('inputPassword');//"Contraseña";
	var remember = document.getElementsByTagName('span')[0];
	var button = document.getElementsByClassName('btn')[0];
	
	title.innerHTML = "Por favor Inicia sección";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = 'Recordar datos';
	button.innerHTML = 'Iniciar Sesión';

	var cadena = "<h3>Datos del Formulario </h3><br />"+
											  "El correo Electrónico ingresado es: <br />"+email.value+
											  "<br />La Clave ingresada es : <br />"+password.value;
	document.getElementById('result').innerHTML = cadena;
}

function imprimir(){
	translate();	
}

