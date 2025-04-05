const feliz = document.getElementById ("carinhafeliz");
const mano = document.getElementById ("carinhamano");
const raiva = document.getElementById("carinharaiva"); 
let estado = "feliz";
let timeoutId = null;
function mostrar (quem) {
    [feliz, mano, raiva].forEach (div => {
        div.classList.add ("invisivel");
        div.classList.remove ("visivel");
    });
    quem.classList.remove ("invisivel");
    quem.classList.add ("visivel");
}
feliz.addEventListener ("mouseover", () => {
    if (estado === "feliz") {
        timeoutId = setTimeout(() => {
            if (estado == "feliz"){
                mostrar (mano);
                estado = "mano";
        }
    }, 1000);
  }
});
feliz.addEventListener ("mouseout", () => {
    clearTimeout (timeoutId);
});
feliz.addEventListener ("click", () => {
    if (estado === "feliz") {
        clearTimeout (timeoutId);
        mostrar (raiva);
        estado = "raiva";
    }
});
mano.addEventListener ("click", () => {
    if (estado === "mano") {
        mostrar (raiva);
        estado = "raiva";
    }
});
mano.addEventListener ("mouseout", () => {
    if (estado === "mano") {
        mostrar (feliz);
        estado = "feliz";
    }
});
raiva.addEventListener ("click", () => {
    if (estado === "raiva") {
        mostrar (feliz);
        estado = "feliz";
    }
})
raiva.addEventListener ("mouseout", () => {
    if (estado === "raiva") {
        mostrar (feliz);
        estado = "feliz";
    }
});
