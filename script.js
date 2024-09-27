function calcular() {
   var K = 9000000
   var q = parseFloat(document.getElementById("val3").value)
   var Q = parseFloat(document.getElementById("val3").value)
   var d = parseFloat(document.getElementById("val3").value)


   var força = (K.q.Q)/d*d;
   document.getElementById('resultado').innerText = força;
   
} 
