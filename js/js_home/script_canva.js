var tela = document.querySelector("#tabuleiroCanvas"); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

//0 Branco
//1 Preto
//2 Vermelho
//3 Cinza

let grid = [
    [, , , , , , , , 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, , , , , , , ,],
    [, , , , , , 1, 1, 1, 2, 2, 3, 0, 0, 0, 0, 2, 1, 1, 1, , , , , ,],
    [, , , , , 1, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 3, 2, 1, 1, , , , ,],
    [, , , , 1, 1, 2, 2, 2, 3, 0, 0, 0, 0, 3, 3, 2, 2, 2, 2, 1, 1, , , ,],
    [, , , 1, 1, 2, 2, 2, 2, 0, 3, 0, 3, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, , ,],
    [, , 1, 1, 2, 2, 2, 2, 3, 0, 1, 0, 1, 0, 0, 3, 2, 2, 2, 2, 2, 2, 1, 1, ,],
    [, , 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 2, 2, 2, 2, 2, 1, ,],
    [, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 1,],
    [, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 2, 2, 2, 2, 2, 1,],
    [1, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 0, 2, 2, 1],
    [0, 0, 3, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 3, 0, 3, 2, 2, 1],
    [3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 3, 0, 2, 2, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 2, 1],
    [1, 2, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 3, 0, 0, 0, 0, 0, 2, 2, 2, 1],
    [1, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 3, 0, 0, 3, 3, 0, 0, 0, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1],
    [, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1,],
    [, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1,],
    [, , 1, 1, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, ,],
    [, , , 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, , ,],
    [, , , , 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, , , ,],
    [, , , , , 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, , , , ,],
    [, , , , , , 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, , , , , ,],
    [, , , , , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , ,],

];


// função que desenha o grid.
function desenhaFantasma(cor, xInicial, yInicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "black";
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
                desenhaFantasma("white", coluna * 10, linha * 10, 10, 10);
            } else if (grid[linha][coluna] === 1) {
                desenhaFantasma("black", coluna * 10, linha * 10, 10, 10);
            } else if (grid[linha][coluna] === 2) {
                // let colors = ["#FF0C00", "#9B0F0F"];
                // let cor = 0;
                // setInterval(function(){
                //     cor = (cor == (colors.length -1)) ? 0 : cor+1;
                //     desenhaFantasma("cor", coluna * 10, linha * 10, 10, 10);

                // })
                desenhaFantasma("red", coluna * 10, linha * 10, 10, 10);

            } else if (grid[linha][coluna] === 3) {
                desenhaFantasma("gray", coluna * 10, linha * 10, 10, 10);
            }
        }
    }
}

desenhaGrid(grid);