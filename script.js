
//div.style.width = "100px";
//div.style.height = "100px";
//div.style.background = "red";
//div.style.color = "white";
//div.innerHTML = "Hello";

down = false;
document.onmousedown = function(){down = true};
document.onmouseup = function() {down = false};

size = 4;

main = document.getElementById("main");
main.style.width = "46px";

function color(theid) {
    if (down) {
    colorthis = document.getElementById(theid);
    colorthis.style.background = "black";
    }
}


function jgtjgtjgio4jgj4gjgi45jo45jgoi54jg4jg4ogj45otj45j4o4j4jt4otj4t4j4t() {
    x = 0;
    id = 0;
    for(let i = 0; i < (size*size); i++){
        x++; id++;
        var div = document.createElement("div");
        
       
        div.id = String(id);

         

          div.className = "griddiv";
          div.setAttribute( "onmouseover", "javascript: color("+id+")");
          div.setAttribute( "onClick", "javascript: color("+id+")");

          document.getElementById("main").appendChild(div);


        if (x == size) {
            x = 0;
            var abr = document.createElement("br");
           // document.getElementById("main").appendChild(abr);
        }

    }
}


jgtjgtjgio4jgj4gjgi45jo45jgoi54jg4jg4ogj45otj45j4o4j4jt4otj4t4j4t();



document.getElementById("asksize").addEventListener("click", myFunction);

function myFunction() {
    main.innerHTML = "";
    size = parseInt(prompt("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
    jgtjgtjgio4jgj4gjgi45jo45jgoi54jg4jg4ogj45otj45j4o4j4jt4otj4t4j4t();

   main.style.width = String(size*10)+"px";
   main.style.height = String(size*10)+"px";

}
