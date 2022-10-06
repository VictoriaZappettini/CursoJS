class Alumno {
    constructor (nombre, apellido, practico, examen, conducta){
        this.nombre= nombre;
        this.apellido = apellido;
        this.examen = examen;  
        this.conducta = conducta;
        this.practico= practico;
    }
    CalcularPromedio(){
        let cond= parseInt(this.conducta);
        let ex= parseInt(this.examen);
        let prac = parseInt(this.practico);

        let suma = cond + ex+ prac ;
      
        return (suma/3)
    }
}

//Array de objetos
const alumnos = [];


const formulario = document.getElementById('formulario');
//Manejador de eventos
formulario.addEventListener('submit', (e)=>{
    //evita que se recargue la pagina
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const examen = document.getElementById('examen').value;
    const conducta = document.getElementById('conducta').value;
    const practico = document.getElementById('practico').value;
    //creamos el objeto alumno
    const alumno = new Alumno (nombre, apellido, practico, examen, conducta);
    //Agrego los datos en el array 
    alumnos.push(alumno);
    //Guardamos los datos en el localstorage
    localStorage.setItem("Alumno", JSON.stringify(alumnos));
    //Limpiamos formulario para seguir agregando:
    formulario.reset();

     mostrarInfo(alumno);
})

const resul = document.getElementById('infoUsuarios');
const mostrarInfo = (alumno) =>{
     
     let aux = "";
     aux +=`<p class="resultado"> El promedio final del alumno ${alumno.nombre} ${alumno.apellido} es: </p>
     <p class="resultado"> ${alumno.CalcularPromedio()} </p>`
     resul.innerHTML= aux; 
     Swal.fire(aux)
}

