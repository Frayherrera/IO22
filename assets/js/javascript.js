function mostrar() {
    
    var x = document.getElementById('resultado');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

}

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al div
    var miDiv = document.getElementById("mg1");

    // Agrega un controlador de eventos para el clic en el div
    miDiv.addEventListener("click", function() {
        
        window.location.href = "mg1.html"    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al div
    var miDiv = document.getElementById("gg1");

    // Agrega un controlador de eventos para el clic en el div
    miDiv.addEventListener("click", function() {
        
        window.location.href = "gg1.html"    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al div
    var miDiv = document.getElementById("mm1");

    // Agrega un controlador de eventos para el clic en el div
    miDiv.addEventListener("click", function() {
        
        window.location.href = "mm1.html"    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al div
    var miDiv = document.getElementById("mmc");

    // Agrega un controlador de eventos para el clic en el div
    miDiv.addEventListener("click", function() {
        
        window.location.href = "mmc.html"    });
});

function calcularmg1() {
    mostrar()
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




function calcularmm1() {
    mostrar()
    // Obtén los valores de los campos de entrada
    var tasallegada = parseFloat(document.getElementById("Tllegada1").value);
    var tasaservicio = parseFloat(document.getElementById("Tservicio1").value);
    var numeroc = parseFloat(document.getElementById("numero").value);
    
    // Verifica si los valores son numéricos
    if (!isNaN(tasallegada) && !isNaN(tasaservicio)) {
        // Realiza el calculo
        var ls = tasallegada /  (tasaservicio - tasallegada)
       var Ws = 1 / (tasaservicio - tasallegada)
      var Lq1 = (Math.pow(tasallegada,2))/(tasaservicio*(tasaservicio-tasallegada))
    var Wq1 = tasallegada/(tasaservicio*(tasaservicio-tasallegada))
    var p = tasallegada/tasaservicio
    var p0 = (1 - p)*100
    var Pn = (1-(tasallegada/tasaservicio))*Math.pow((tasallegada/tasaservicio),numeroc)*100
        // Muestra el resultado en un elemento HTML
        
        document.getElementById("Wq").value = Wq1;
        document.getElementById("Ls").value = ls;
        document.getElementById("Ws").value = Ws;
        document.getElementById("Lq").value = Lq1;
        document.getElementById("P0").value = p0;
        document.getElementById("Pw").value = Pn;
        //document.getElementById("media").value = p;
    } else {
        // Muestra un mensaje de error si los valores no son numéricos
        alert("Ingresa números válidos en ambos campos.");
    }
}
function calcularmmc() {
    mostrar()
    // Obtén los valores de los campos de entrada
    var tasallegada = parseFloat(document.getElementById("Tllegada1").value);
    var tasaservicio = parseFloat(document.getElementById("Tservicio1").value);
    var numeroc = parseFloat(document.getElementById("numeros").value);
    
    // Verifica si los valores son numéricos
    if (!isNaN(tasallegada) && !isNaN(tasaservicio)) {
        // Realiza el calculo
        var p = tasallegada/(tasaservicio * numeroc)
        var p0 = (1 - p)
        var ls = (Math.pow(p,(numeroc + 1)) * numeroc * p0 )/(Math.pow((numeroc - 1),2)*(1 - p))
        var Lq1 = (Math.pow(p,(numeroc + 1)) * p0)/(Math.pow(numeroc - 1,2)*(1-p))
   
        // Muestra el resultado en un elemento HTML
        
        document.getElementById("Ls").value = ls;
        document.getElementById("Lq").value = Lq1;
        document.getElementById("P0").value = p0*100;
    } else {
        // Muestra un mensaje de error si los valores no son numéricos
        alert("Ingresa números válidos en ambos campos.");
    }
}
function calculargg1() {
    mostrar()
    // Obtén los valores de los campos de entrada
    var tasallegada = parseFloat(document.getElementById("Tllegada").value);
    var tasaservicio = parseFloat(document.getElementById("Tservicio").value);
    var oe = parseFloat(document.getElementById("oe").value);
    var os = parseFloat(document.getElementById("os").value);
    
    // Verifica si los valores son numéricos
    if (!isNaN(tasallegada) && !isNaN(tasaservicio)) {
        // Realiza el calculo
        var p = tasallegada/tasaservicio

       var wq=((((Math.pow(tasallegada,2)*Math.pow(oe,2))+(Math.pow(tasaservicio,2)*Math.pow(os,2)))/2)*(p))/((tasaservicio-tasallegada))
       var lq = tasallegada * wq
       var l = lq+(tasallegada/tasaservicio)
       var Ws = wq + (1/tasaservicio)
   
        // Muestra el resultado en un elemento HTML
        
        document.getElementById("Wq").value = wq;
        document.getElementById("Lq").value = lq;
        document.getElementById("L").value = l;
        document.getElementById("Ws").value = Ws;


     
    } else {
        // Muestra un mensaje de error si los valores no son numéricos
        alert("Ingresa números válidos en ambos campos.");
    }
}
