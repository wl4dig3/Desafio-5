const $ = document;

let inputTareas = $.getElementById("input-tarea")
let totalTareas = $.querySelector("#total-tareas");
let tareasRealizadas = $.querySelector("#tareas-realizadas");
const btnAgregar = $.querySelector("#btn-agregar");
let listadoTareas = $.querySelector("#listado")
let arregloTareas = [];
let nuevoElemento = "";

    function borrar(id) {
        const index = arregloTareas.findIndex((element) => element.id == id);
        arregloTareas.splice(index, 1);

        let html = ""
        for (let tarea of arregloTareas) {
            html += `<li>${tarea.id}<span class="span-line">${tarea.nombre}</span><input type="checkbox"></input><button class="btn-erase" onclick="borrar(${tarea.id})">X</button></li>`; 
        }
        listadoTareas.innerHTML = html;
        console.log(nuevoElemento);
    }

     function agregarTarea() {
        if (inputTareas.value === "") {
            alert('Por favor agrega una tarea')
        } else {
            const tareaNueva ={id:Math.random(), nombre: inputTareas.value}
            arregloTareas.push(tareaNueva);
            for (let tarea of arregloTareas) {
              nuevoElemento = `<li>${tarea.id}<span class="span-line">${tarea.nombre}</span><input type="checkbox"></input><button class="btn-erase" onclick="borrar(${tarea.id})">X</button></li>`;
            }
            listadoTareas.innerHTML += nuevoElemento;
            inputTareas.value = "";
        }
     };

