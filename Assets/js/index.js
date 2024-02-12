let $ = document;

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
        totalTareas.innerHTML = arregloTareas.length;
    }

     function agregarTarea() {
        if (inputTareas.value === "") {
            alert('Por favor agrega una tarea')
        } else {
            const tareaNueva ={id:Math.random(), nombre: inputTareas.value}
            arregloTareas.push(tareaNueva);
            for (let tarea of arregloTareas) {
              nuevoElemento = `<li>${tarea.id}<span class="span-line">${tarea.nombre}</span><input id="input-checked" type="checkbox"></input><button class="btn-erase" onclick="borrar(${tarea.id})">X</button></li>`;
            }
            listadoTareas.innerHTML += nuevoElemento;
            inputTareas.value = "";
            totalTareas.innerHTML = arregloTareas.length;
            let inputChecked = $.querySelector("#input-checked");
            console.log(inputChecked.value);
        }
     };
     setTimeout( ()=> {
        let inputChecked = $.querySelector("#input-checked");
            console.dir(inputChecked);
            console.log(nuevoElemento);
        inputChecked.addEventListener('click', ()=> {
            if (inputChecked.checked == true) {
                let html = ""
                for (let tarea of arregloTareas) {
                    html += `<li>${tarea.id}<span class="span-line">${tarea.nombre}</span><input type="checkbox"></input><button class="btn-erase" onclick="borrar(${tarea.id})">X</button></li>`; 
                }
                listadoTareas.innerHTML = html;
                html.style.textDecoration = 'line-through'
            }
        })
     },10000)


