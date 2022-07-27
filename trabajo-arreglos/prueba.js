var cont = 0;
var indice = 0;
var personas = new Array(5);


function cargarDatos(){
    personas[cont] = new Array(6);
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let dni = document.getElementById("dni").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("telefono").value
    let mail = document.getElementById("mail").value

    personas[cont][0] = nombre;
    personas[cont][1] = apellido;
    personas[cont][2] = dni;
    personas[cont][3] = direccion;
    personas[cont][4] = telefono;
    personas[cont][5] = mail;

    cont++;
    console.log(personas)

   
}

function mostrarEnTabla(){
    for(i=0;i<=personas.length;i++){
        const tabla = document.getElementById("lista-dinamica");
        const tr = document.createElement("tr");
        tr.id = "fila"+indice;
        tabla.appendChild(tr);

        const tr1 = document.getElementById("fila"+indice);
    
        const th = document.createElement("th");
        th.textContent = indice
        tr1.appendChild(th);

        const td1 = document.createElement("td")
        td1.textContent = personas[indice][0];
        tr1.appendChild(td1);

    
        const td2 = document.createElement("td");
        td2.textContent = personas[indice][1];
        tr1.appendChild(td2);

        document.getElementById("materia").value = "";
        document.getElementById("calificacion").value = "";
        indice++
    }
    /*
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
    */
}

function crearTabla(){
    const tabla = document.getElementById("lista-dinamica");
    const tr = document.createElement("tr");
    tr.id = "fila"+indice;
    tabla.appendChild(tr);

    const tr1 = document.getElementById("fila"+indice);
    
    const th = document.createElement("th");
    th.textContent = indice
    tr1.appendChild(th);

    const td1 = document.createElement("td")
    td1.textContent = personas[indice][0];
    tr1.appendChild(td1);

    
    const td2 = document.createElement("td");
    td2.textContent = personas[indice][1];
    tr1.appendChild(td2);

    document.getElementById("materia").value = "";
    document.getElementById("calificacion").value = "";
}