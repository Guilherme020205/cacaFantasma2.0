var tela = document.querySelector("#tabuleiroCanvas"); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

//0 Branco
//1 Preto
//2 Vermelho
//3 Cinza

let grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 3, 2, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1,],

];

// Váriavel que define a posição do objeto.
var x = 5;
var y = 5;

// códigos do teclado
var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.
var taxa = 10;

// função que cria o objeto.
function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 5 * Math.PI);
    pincel.fill();
}

// função que desenha o grid.
function desenhaRetangulo(cor, xInicial, yInicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "gray";
    pincel.beginPath();
    pincel.rect(xInicial, yInicial, largura, altura);
    pincel.closePath();
    pincel.fill();
    pincel.stroke();
}
function desenhaGrid(grid) {
    for (let linha = 0; linha <= grid.length; linha++) {

        for (let coluna = 0; coluna <= grid[linha].length; coluna++) {

            if (grid[linha][coluna] === 0) {
                desenhaRetangulo("white", coluna * 10, linha * 10, 10, 10);
            } else if (grid[linha][coluna] === 1) {
                desenhaRetangulo("black", coluna * 10, linha * 10, 10, 10);
            } else if (grid[linha][coluna] === 2) {
                desenhaRetangulo("red", coluna * 10, linha * 10, 10, 10);
            } else if (grid[linha][coluna] === 3) {
                desenhaRetangulo("gray", coluna * 10, linha * 10, 10, 10);
            }
        }
    }
}

// função para atualizar a tela, desenhando o grid e o objeto.
function atualizaTela() {

    
    desenhaCirculo(x, y, 5);
    desenhaGrid(grid);
}

// setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.
function leDoTeclado(evento) {

    if (evento.keyCode == cima && y - taxa > 0) {
        y = y - taxa;

    } else if (evento.keyCode == baixo && y + taxa < 500) {
        y = y + taxa;

    } else if (evento.keyCode == esquerda && x - taxa > 0) {
        x = x - taxa;

    } else if (evento.keyCode == direita && x + taxa < 500) {
        x = x + taxa;
    }
}


desenhaGrid(grid);


document.onkeydown = leDoTeclado;