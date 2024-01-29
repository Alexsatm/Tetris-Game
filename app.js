import Game from "./js/game.js";
import View from "./js/view.js";

const root = document.querySelector('#root')

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 37: //left arrow
            game.movePieceLeft();
            view.render(game.getState())
            break;

        case 38: //UP arrow
            game.rotatePiece();
            view.render(game.getState())
            break;

        case 39: //RIGHT arrow
            game.movePieceRight();
            view.render(game.getState())
            break;

        case 40: //DOWN arrow
            game.movePieceDown();
            view.render(game.getState())
            break;
    }
})
