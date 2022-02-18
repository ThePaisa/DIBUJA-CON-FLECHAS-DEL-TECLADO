// para iniciar creamos el evento detector de las teclas, esto es un evento de todo el document
document.addEventListener("keydown", teclas);

//carga del canvas
lienzo = document.getElementById("areaDibujo")
contexto= lienzo.getContext("2d")

// COLECCION de variables con el keyCode de las flechas
var teclado = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39} 

x= 150 // coordenadas predeterminadas para inicio de dibujo en x / y
y= 150


//////////////////////////////////////////////////////////////////////////////////
// falta ecalabilidad de programa
//se desea crear el evento de click sostenido
//para de esta forma que el programa ademas de dibujar con el teclado
//tambien dibuje con el raton
function mouseClick (evento1)
       //click presionado  
{   
}
//////////////////////////////////////////////////////////////////////////////////
    
// creacion de la funcionalidad del evento dibujar con las teclas
//la variable de la funcion enlazada a un evento, se llena de datos curiosos 
//en relacion al evento
function teclas (evento)             
{       
   var movimiento=5;
   var color = "blue";      
            
//comparar si el evento coincide con la tecla presionada
if (evento.keyCode == teclado.UP)
    {
       console.log("vamo pa arriba")
        dibujarLinea(color, x, y, x, y-movimiento, contexto  )
        y= y-movimiento
    }

 else if (evento.keyCode == teclado.DOWN)
{
        console.log("flecha abajo")
        dibujarLinea(color, x, y, x, y+movimiento, contexto  )
        y= y+movimiento
}

else if (evento.keyCode == teclado.LEFT)
{
    console.log("flecha IZQUIERDA")
    dibujarLinea(color, x, y, x- movimiento, y, contexto  )
        x= x-movimiento
}

else if (evento.keyCode == teclado.RIGHT)
{
    dibujarLinea(color, x, y, x+ movimiento, y, contexto  )
    x= x+ movimiento
    console.log("flecha DERECHA")
}

else{
    console.log("otra tecla diferente a las flechasel")
}

}                              // al hacerle console.log a la variable nos mostrara el codigo de la tecla presionada, denominado como keyCode



// con el codigo anterior podemos detectar cuando el usuario presiona las flechas y cuando no
//ahora lo que hace falta es que cada que el usuario presione una flecha se dibuje una linea
//hay que tener en cuenta: flecha para arriba -y, para abajo +y, flecha a la derecha +x, izq -x
dibujarLinea("red", 149, 149, 151, 151, contexto)



function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, contexto) //codigo para dibujar linea
{
contexto.beginPath()
contexto.strokeStyle = color 
contexto.lineWidth = 3
contexto.moveTo(xInicial,yInicial);
contexto.lineTo(xFinal,yFinal);
contexto.stroke();
contexto.closePath();
}

