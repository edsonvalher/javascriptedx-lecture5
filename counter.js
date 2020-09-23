
if (!localStorage.getItem("contador")) {
    localStorage.setItem("contador", 0)
}

function count() {

    let contador = localStorage.getItem("contador");
    contador++;
    document.querySelector("h1").innerHTML = contador;
    localStorage.setItem("contador", contador);
    /*
    if (contador % 10 === 0) {
        alert(`Count is now ${contador}`);
    }
    */
    //alert(contador);
}
//aqui no funciona esta funcion porque no ha cargado el DOM
// --> document.querySelector('button').onclick = count;
// cuando el DOM ha cargado
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("h1").innerHTML = localStorage.getItem("contador");
    document.querySelector('button').onclick = count;

});     