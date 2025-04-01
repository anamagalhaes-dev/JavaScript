let resultadoDiv = document.getElementById("resultado");
let numerospares = "";

let i =1;
while(i<= 10){
    if (i % 2 ==0){
        numerospares += i + "<br>";
    }
    i++;
}
resultadoDiv.innerHTML = numerospares;
    
          