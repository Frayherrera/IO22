function mostrar() {
    
    var x = document.getElementById('resultado');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    calcular()

}

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al div
    var miDiv = document.getElementById("mg1");

    // Agrega un controlador de eventos para el clic en el div
    miDiv.addEventListener("click", function() {
        
        window.location.href = "mg1.html"    });
});

function calcular() {
    // Obtén los valores de los campos de entrada
    var numero1 = parseFloat(document.getElementById("Tllegada").value);
    var numero2 = parseFloat(document.getElementById("Tservicio").value);
    
    // Verifica si los valores son numéricos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Realiza el calculo
            var os = 1 / numero2
            var p = numero1/numero2
            var o2 = Math.pow(os, 2)
        var lq = ((Math.pow(numero1, 2)) * o2 + (Math.pow(p, 2)))/(2*(1-p))
        var wq = lq/numero1
        var ls = lq + p
        var ws = (wq + (1/numero2))*60
        var p0 = (1-p)*100
        var pw = p*100
        var suma = numero1 + numero2;

        // Muestra el resultado en un elemento HTML
        document.getElementById("Lq").value = lq;
        document.getElementById("Wq").value = wq;
        document.getElementById("Ls").value = ls;
        document.getElementById("Ws").value = ws;
        document.getElementById("P0").value = p0;
        document.getElementById("Pw").value = pw;
        document.getElementById("media").value = p;
    } else {
        // Muestra un mensaje de error si los valores no son numéricos
        alert("Ingresa números válidos en ambos campos.");
    }
}
