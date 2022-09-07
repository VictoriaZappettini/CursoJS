let notas=[];

function recibirNotas (){
    let total=0;
    let resultado=0; 

for(i = 0;i < cantidad;i++){
notas[i]=parseFloat(prompt("Ingresa la primer nota"+' '+[i+1]));
total= total+ notas[i]
}

resultado= total/cantidad;

document.write("<br>");
document.write("Las notas ingresadas fueron:");
document.write("<br>");
notas.sort();
for(let i = 0;i < cantidad ;i++){
    document.write(notas[i]);
    document.write("<br>");
}


document.write("<br>");
document.write ("Total:"+''+total)
document.write("<br>");
document.write ("El promedio final es:"+''+resultado)


}


let cantidad = parseInt( prompt("En cuantas notas se divide la nota final? "));
recibirNotas();



