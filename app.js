// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// se declara el array
let amigos=[];

//Funcion agregar amigos
function agregarAmigo() {
    let agregar = document.getElementById('amigo').value.trim(); 
    
    if (agregar === '') {
        alert('Agregue un nombre valido');
        return;
    }

    if (amigos.includes(agregar)) {
        alert('No repetir amigos');
        return;
    }

    amigos.push(agregar);
    actualizarLista();
    limpiar();
    console.log(agregar);
}

//funcion para limpiar el campo
function limpiar() {
    document.getElementById('amigo').value = '';
}

//funcion para desplegar amigos en lista con  numeracion
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        let item = document.createElement('li');
        // Asignamos la numeración y el nombre del amigo
        item.textContent = `${index + 1}. ${amigo}`; 
        item.setAttribute('data-id', index); 
        lista.appendChild(item); // Añadimos el elemento a la lista
    });
    document.getElementById('totalAmigos').innerHTML = `Total de amigos: ${amigos.length}`;
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

function ordenarAmigos() {
    if (amigos.length === 0) {
        alert('No hay amigos para ordenar.');
        return;
    }

    amigos.sort(); // Ordenamos alfabéticamente
    actualizarLista(); // Volver a actualizar la lista para reflejar el cambio
}