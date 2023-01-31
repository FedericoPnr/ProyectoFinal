const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

	const campos = {
		usuario: false,
		nombre: false,
		password: false,
		correo: false,
		telefono: false,
	}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');

		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo' );
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono' );
		break;
	}
}

const validarCampo = (expresion, input, campo ) =>{
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos[campo] = true;
	} else{
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos[campo] = false;
	}
	
}

const validarPassword2 = () =>{
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
		campos['password'] = false;
	} else{
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
		campos['password'] = true;
	}
}
//La declaración switch evalúa una expresión, comparando el valor de esa expresión
//con una instancia case , y ejecuta declaraciones asociadas a ese case , así como las
// declaraciones en los case que siguen.
//(e.target.name) mostrame el valor del atributo name


inputs.forEach((input) => {
//quiero que por cada imput me ejecutes un codigo (el codigo que va en el parentesis(funcion de tipo flecha))
//funncion que se va a ejecutar por cada uno de los inputs 
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
		//escucha cuando se levanta el dedo de la tecla y en ese momento ejecuta esta función.
		//escucha si el usuario hace click dentro del campo y valida.
})


formulario.addEventListener('submit', (e) =>{
	//del formulario, escuchar al button tipo submit y ejecutar una función del tipo flecha.
	// la funcion de tipo flecha sirve para enviar al usuario a otra pagina.
	//en este caso al hacer click se envia al parametro "e" que lo  que hace es reconocer el evento
	//por defecto la pagina envia todo asi como esta y cambia la url. para evitar eso colocamos:
	e.preventDefault();// cuando se preciona el boton no hace nada, que es en este caso lo eperado

	const terminos = document.getElementById('terminos')
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset() ;
		document.getElementById("formulario__mensaje-exito").classList.add('formulario__mensaje-exito-activo')
		setTimeout(() => {
			document.getElementById("formulario__mensaje-exito").classList.remove('formulario__mensaje-exito-activo')
		}, 5000);
		//prestar atencion a la coma y 5000 son cinco segundos, este valor va entre la llave y el parentesis.
	
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else{
		document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo")
	}

})