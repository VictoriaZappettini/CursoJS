class Alumno {
    constructor (nombre, apellido, notas){
        this.nombre= nombre;
        this.apellido = apellido;
        this.notas = notas;
    }
}

//Variables: 
let notas=[];
let resultado=0; 

function recibirNotas (){
    let total=0;
    for(i = 0;i < cantidad;i++){
        notas[i]=parseFloat(prompt("Ingresa la primer nota"+' '+[i+1]));
        total= total+ notas[i]
        }
        
        document.write("<br>");
        document.write("Las notas ingresadas fueron:");
        document.write("<br>");
        document.write(notas.join(' '));
        
        
        
        //document.write("<br>");
        //document.write ("Total:"+''+total)
        //document.write("<br>");
        //document.write ("El promedio final es:"+''+resultado)
        
        return resultado= total/cantidad;

}




let nombre = prompt ("Nombre del alumno");
let apellido= prompt ("Apellido del alumno");
let cantidad = parseInt( prompt("En cuantas notas se divide la nota final? "));
recibirNotas();
let datosAlumno = new Alumno (nombre,apellido,notas)

document.write("<br>");
const tituloPrincipal = document.getElementById('tituloPrincipal');
tituloPrincipal.innerHTML = `<p>Alumno: ${nombre} ${apellido}</p>`

const promedio = document.getElementById('promedio');
promedio.innerHTML = `<p>El promedio final es : ${resultado} </p>`


const btn2= document.getElementById('btn2');
btn2.onclick = () =>{
    if( resultado >= 6 ){
        alert("pasaste el trimestre!")
    }else{ alert ("no pasaste el trimestre!");
} 
}
