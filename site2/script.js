function fuja(){
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";


}
var timer;
var isMoving = false;

function mudarGif() {
    var imagem = document.getElementById("imagem-urso");
    imagem.src = "https://media1.tenor.com/m/k3g5kpBCXhsAAAAd/cat-meme-squinting-cat.gif"; 
}

function restaurarGif() {
    var imagem = document.getElementById("imagem-urso");
    imagem.src = "https://media1.tenor.com/m/RUGGdovmONkAAAAd/dance-dancing.gif"; // GIF original
}

function handleMouseMove() {
    if (!isMoving) {
        isMoving = true;
        mudarGif();
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
        isMoving = false;
        restaurarGif();
    }, 1000); // 2 segundo sem movimento para restaurar o GIF
}

document.addEventListener("mousemove", handleMouseMove);
