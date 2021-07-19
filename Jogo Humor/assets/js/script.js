var cont=0;

function trocarHumor(){
    cont++;
    if (cont==1){
        document.getElementById("Garfield").src = "./assets/img/Cansado.png";
        document.getElementById("texto").innerHTML = "CANSADO &#128564 na Segunda";
    }
    else if (cont==2){
        document.getElementById("Garfield").src = "./assets/img/Feliz.png";
        document.getElementById("texto").innerHTML = "FELIZ &#128512 na Terça";
    }
    else if (cont==3){
        document.getElementById("Garfield").src = "./assets/img/Irritado.png";
        document.getElementById("texto").innerHTML = "IRRITADO &#128544 na Quarta";
    }
    else if (cont==4){
        document.getElementById("Garfield").src = "./assets/img/Surtado.png";
        document.getElementById("texto").innerHTML = "SURTADO &#129322 na Quinta";
    }
    else if (cont==5){
        document.getElementById("Garfield").src = "./assets/img/Sextou.png";
        document.getElementById("texto").innerHTML = "E finalmente SEXTOU &#129395 para Garfield";
    }
    else if (cont==6){
        document.getElementById("Garfield").src = "./assets/img/Garfield.png";
        document.getElementById("texto").innerHTML = "";
        cont=0;
    }
}