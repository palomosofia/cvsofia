const btnSwitch = document.querySelector(".switch");
btnSwitch.addEventListener("click", e => {
    btnSwitch.classList.toggle("active");
    document.body.classList.toggle("active");

})

let menuVisible=false;

function abrirCerrarMenu(){
    if(menuVisible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible= false;
    }
}

function efectoHabilidades(){
    var barra = document.getElementById("barra");
    var distancia_barra = window.innerHeight = barra.getBoundingClientRect().top;
    if(distancia_barra >=300 ){
        let habilidades = document.getElementsByClassName("cont-barra")
        habilidades(0).classList.add("da")
    }
}

window.onscroll = function (){
    efectoHabilidades();
}

//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}