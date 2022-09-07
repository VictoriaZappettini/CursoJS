let puntos=[];
let notaFinal=0;


function notaPorPuntos (){

for(i = 0;i < puntosParcial;i++){
puntos[i]=parseFloat(prompt("Ingresa cantidad de puntos (el formato es con . y no con , ejemplo: 0.1"+' '+[i+1]));
notaFinal= notaFinal+ puntos[i]
}

document.write("<br>");
document.write("Los puntos ingresados fueron:");
document.write("<br>");
puntos.sort();
for(let i = 0;i < puntosParcial ;i++){
    document.write(puntos[i]);
    document.write("<br>");
}
document.write("<br>");
document.write ("Nota final del examen :"+''+notaFinal)
document.write("<br>");

}

function mensajeAprobadDesaprobado (notaFinal){
    if (notaFinal >= 6){
        document.write ("Aprobado!")
    }else{
        document.write ("Desaprobado!")
    }

}

let puntosParcial=parseInt( prompt("Cuantos puntos tiene el parcial?"));
notaPorPuntos();
mensajeAprobadDesaprobado(notaFinal);
