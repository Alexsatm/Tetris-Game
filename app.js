import Game from "./js/game.js";
import View from "./js/view.js";

const root = document.querySelector('#root')

const game = new Game();
const view = new View(root, 320, 640, 20, 10);

window.game = game;
window.view = view;

view.renderPlayfiled(game.playfield)