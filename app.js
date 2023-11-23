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