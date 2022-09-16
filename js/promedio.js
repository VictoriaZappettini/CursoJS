function Alumno (nombre, apellido, notas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.notas = notas;

}
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



document.write("<br>");
document.write ("Total:"+''+total)
document.write("<br>");
//document.write ("El promedio final es:"+''+resultado)

return resultado= total/cantidad;


}



let nombre = prompt ("Nombre del alumno");
let apellido= prompt ("Apellido del alumno");
let cantidad = parseInt( prompt("En cuantas notas se divide la nota final? "));
recibirNotas();
let datosAlumno = new Alumno (nombre,apellido,notas)
document.write("<br>");
document.write ("El alumno se llama:"+''+nombre+apellido)
document.write("<br>");
document.write ("El promedio final es:"+''+resultado)
