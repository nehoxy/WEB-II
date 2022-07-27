var promedio = 0;
var indice = 0;
var total = 0;
/*
function sumador(num, tipo){
    let total = parseInt(document.getElementById("totalizador").textContent);
    total = total + num;
    document.getElementById("totalizador").textContent = total;

    const lista = document.getElementById("lista-dinamica");
    const li = document.createElement('li');
    li.textContent = tipo + " $"+num;
    li.classList.add("list-group-item");
    lista.appendChild(li);
}
*/
function mandarNombre(){
    document.getElementById("nombre-out").textContent = document.getElementById("nombre").value;
    document.getElementById("apellido-out").textContent = document.getElementById("apellido").value;
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
}

function armartabla(){
    indice++;

    const tabla = document.getElementById("tabla-dinamica");
    const tr = document.createElement("tr");
    tr.id = "fila"+indice;
    tabla.appendChild(tr);

    const tr1 = document.getElementById("fila"+indice);
    
    const th = document.createElement("th");
    th.textContent = indice
    tr1.appendChild(th);

    const td1 = document.createElement("td")
    td1.textContent = document.getElementById("materia").value;
    tr1.appendChild(td1);

    
    const td2 = document.createElement("td");
    td2.textContent = document.getElementById("calificacion").value;
    tr1.appendChild(td2);

    document.getElementById("materia").value = "";
    document.getElementById("calificacion").value = "";

    
    total = total + parseInt(td2.textContent);
    /*
    promedio = total / indice;
    document.getElementById("promedio").textContent = promedio.toFixed(1)
    */
    
}

function calcularPromedio(){
    let promedio = 0;
    promedio = total / indice;
    document.getElementById("promedio").textContent = promedio.toFixed(1);
    
}
