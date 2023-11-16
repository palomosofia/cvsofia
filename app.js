const btnSwitch = document.querySelector(".switch");
btnSwitch.addEventListener("click", e => {
    btnSwitch.classList.toggle("active");
    document.body.classList.toggle("active");

})

function crearBarra (id_barra) {
    for(i=0;i<=16;1++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let html = document.getElementById("html");
crearBarra(html);

let java = document.getElementById("java");
crearBarra(java);

let figma = document.getElementById("figma");
crearBarra(figma);

