/*
    Si se detecta un click en el menu hamburguesa
    agregamos la clase responsive, si se detecta
    otro click y no es nav solamente la clase
    se reinicia a nav
*/
function dropMenu(){
    var x = document.getElementById("dropClick");
    if(x.className === "nav"){
        x.className += " responsive";
    }else{
        x.className = "nav";
    }
}