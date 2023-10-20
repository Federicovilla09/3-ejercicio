let completarFormulario = document.getElementById("formulario");

let labelnombre = document.createElement("label");
labelnombre.setAttribute('for', 'txtNombre');
labelnombre.innerText = "Nombre:";
completarFormulario.appendChild(labelnombre);
let inputnombre = document.createElement("input");
inputnombre.type="text";
inputnombre.id='txtNombre'; 
inputnombre.name='txtNombre';
inputnombre.placeholder="Ingrese su nombre"
completarFormulario.appendChild(inputnombre);

let labelApellido = document.createElement("label");
labelApellido.setAttribute("for", "txtApellido");
labelApellido.innerText = "Apellido:";
completarFormulario.appendChild(labelApellido);
let inputApellido = document.createElement("input");
inputApellido.type = "text";
inputApellido.id = "txtApellido";
inputApellido.name = "txtApellido";
inputApellido.placeholder = "Ingrese su apellido";
completarFormulario.appendChild(inputApellido);

let labelEdad = document.createElement("label");
labelEdad.setAttribute("for", "textEdad");
labelEdad.innerText = "Edad:";
completarFormulario.appendChild(labelEdad);
let inputEdad = document.createElement("input");
inputEdad.type = "number";
inputEdad.id = "textEdad";
inputEdad.name = "textEdad";
inputEdad.placeholder = "Ingrese su edad";
completarFormulario.appendChild(inputEdad);

let botonEnviar = document.createElement("button");
botonEnviar.textContent = "Enviar formulario";
completarFormulario.appendChild(botonEnviar);
botonEnviar.addEventListener("click", function(){
  alert(`Se envió el formulario con los siguientes datos: Nombre: ${inputnombre.value} - Apellido: ${inputApellido.value} - Edad: ${inputEdad.value}`
  );
  });
