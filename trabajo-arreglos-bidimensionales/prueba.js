var contador = 0;
var pacientes = new Array();

function cargarDatosPaciente(){
    
    pacientes[contador] = new Array(5);

    let legajo = document.getElementById("legajo").value;
    let apellido = document.getElementById("apellido").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    pacientes[contador][0] = legajo;
    pacientes[contador][1] = apellido;
    pacientes[contador][2] = nombre;
    pacientes[contador][3] = email;
    pacientes[contador][4] = telefono;

    contador++
    console.log(pacientes);

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
