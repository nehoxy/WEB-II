var contPacientes = 0;
var contVisitas = 0;
var indiceVisitas = 1;
var pacientes = new Array();
var visitas = new Array()

function cargarDatosPaciente(){
    
    pacientes[contPacientes] = new Array(5);

    let legajo = document.getElementById("legajo").value;
    let apellido = document.getElementById("apellido").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    pacientes[contPacientes][0] = legajo;
    pacientes[contPacientes][1] = apellido;
    pacientes[contPacientes][2] = nombre;
    pacientes[contPacientes][3] = email;
    pacientes[contPacientes][4] = telefono;

    contPacientes++
    console.log(pacientes);

}

function cargarDatosVisitas(){

    visitas[contVisitas] = new Array(5);

    let legajoVisitas = document.getElementById("legajoVisita").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let diagnostico = document.getElementById("diagnostico").value;
    let arancel = document.getElementById("arancel").value;

    visitas[contVisitas][0] = legajoVisitas
    visitas[contVisitas][1] = fecha
    visitas[contVisitas][2] = hora
    visitas[contVisitas][3] = diagnostico
    visitas[contVisitas][4] = arancel

    contVisitas++
    console.log(visitas);
    
}

function armarTabla(){
    for(i=0;i<pacientes.length;i++){
        
        /*
        if(i!=0){
            borrarTabla();
        }
        */
        let tabla = document.getElementById("tabla-dinamica");

        let tr = document.createElement("tr");
        tr.id = "fila"+i;
        tabla.appendChild(tr);

        let tr1 = document.getElementById("fila"+i);
        
        let th = document.createElement("th");
        th.textContent = pacientes[i][0] // legajo
        tr1.appendChild(th);

        let td1 = document.createElement("td")
        td1.textContent = pacientes[i][1] // apellido
        tr1.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = pacientes[i][2] // nombre
        tr1.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = pacientes[i][3] // email
        tr1.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = pacientes[i][4] // telefono
        tr1.appendChild(td4);
        
        for(j=0;j<visitas.length;j++){
            
            if(pacientes[i][0] == visitas[j][0]){
                
                let tabla = document.getElementById("tabla-dinamica");
                
                let trVisitas = document.createElement("tr");
                trVisitas.id = "filav"+j;
                tabla.appendChild(trVisitas);
        
                let tr2 = document.getElementById("filav"+j);
        
                let tdIndice = document.createElement("td");
                tdIndice.textContent = "#"+indiceVisitas;
                tr2.appendChild(tdIndice);
                
                let td5 = document.createElement("td")
                td5.textContent = visitas[j][1] // fecha
                tr2.appendChild(td5);
        
                let td6 = document.createElement("td")
                td6.textContent = visitas[j][2] // hora
                tr2.appendChild(td6);
        
                let td7 = document.createElement("td")
                td7.textContent = visitas[j][3] // diagnostico
                tr2.appendChild(td7)
        
                let td8 = document.createElement("td")
                td8.textContent = visitas[j][4] // arancel
                tr2.appendChild(td8)

                indiceVisitas++;
            }
            
        }
        
    }

    
    
   
    
}

function borrarTabla(){
    
    for(i=0;i<pacientes.length;i++){
        let tabla = document.getElementById("tabla-dinamica");
        let tr1 = document.getElementById("fila"+i);
        tabla.removeChild(tr1);
        for(j=0;j<visitas.length;j++){
            let tabla = document.getElementById("tabla-dinamica");
            let tr2 = document.getElementById("filav"+j);
            tabla.removeChild(tr2);
        }
    }
    


    
}


/*
for(j=0;j<=visitas.length;j++){
    if(pacientes[i][0] == visitas[j][0]){
        alert("a");
        let tabla = document.getElementById("tabla-dinamica");
        
        let trVisitas = document.createElement("tr");
        trVisitas.id = "filav"+j;
        tabla.appendChild(trVisitas);

        let tr2 = document.getElementById("filav"+j);

        let tdIndice = document.createElement("td");
        tdIndice.textContent = "#"+j+1;
        tr2.appendChild(tdIndice);
        
        let td5 = document.createElement("td")
        td5.textContent = visitas[j][1] // fecha
        tr2.appendChild(td5);

        let td6 = document.createElement("td")
        td6.textContent = visitas[j][2] // hora
        tr2.appendChild(td6);

        let td7 = document.createElement("td")
        td7.textContent = visitas[j][3] // diagnostico
        tr2.appendChild(td7)

        let td8 = document.createElement("td")
        td8.textContent = visitas[j][4] // arancel
        tr2.appendChild(td8)
    }
}
*/