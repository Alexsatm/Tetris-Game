import Game from "./js/game.js";
import View from "./js/view.js";

const root = document.querySelector('#root')

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft': //left arrow
            game.movePieceLeft();
            view.render(game.getState())
            break;

        case 'ArrowUp': //UP arrow
            game.rotatePiece();
            view.render(game.getState())
            break;

        case 'ArrowRight': //RIGHT arrow
            game.movePieceRight();
            view.render(game.getState())
            break;

        case 'ArrowDown': //DOWN arrow
            game.movePieceDown();
            view.render(game.getState())
            break;
    }
})
