let contador = 0;
function count() {
    contador += 1;
    document.querySelector("h1").innerHTML = contador;
    if (contador % 10 === 0) {
        alert(`Count is now ${contador}`);
    }
    //alert(contador);
}
//aqui no funciona esta funcion porque no ha cargado el DOM
// --> document.querySelector('button').onclick = count;
// cuando el DOM ha cargado
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count;
});     