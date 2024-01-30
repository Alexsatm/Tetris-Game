export default class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        document.addEventListener('keydown', (e) => {
            
        })
        }

        handleKeyDown(e) {
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
    }
}