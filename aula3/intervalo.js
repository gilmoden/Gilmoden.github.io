
        setTimeout(function () {
            document.getElementById("tempo").textContent = "Mudou";
        }, 5000);

        var contador = 0;

        setInterval(function(){
            contador = contador + 1;
            document.getElementById("contador-elemento").textContent = contador;
        },1000)