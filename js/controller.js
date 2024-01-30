export default class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;

        setInterval(() => {
            this.update();
        }, 1000)

        document.addEventListener('keydown', this.handleKeyDown.bind(this))
        this.view.renderStartScreen();
    }
    update() {
        this.game.movePieceDown();
        this.view.renderMainScreen(this.game.getState());
    }

        handleKeyDown(e) {
            switch (e.key) {
                case 13: //Enter
                    this.view.renderMainScreen(this.game.getState())
                case 'ArrowLeft': //left arrow
                    this.game.movePieceLeft();
                    this.view.renderMainScreen(game.getState())
                    break;
        
                case 'ArrowUp': //UP arrow
                    this.game.rotatePiece();
                    this.view.renderMainScreen(game.getState())
                    break;
        
                case 'ArrowRight': //RIGHT arrow
                    this.game.movePieceRight();
                    this.view.renderMainScreen(game.getState())
                    break;
        
                case 'ArrowDown': //DOWN arrow
                    this.game.movePieceDown();
                    this.view.renderMainScreen(game.getState())
                    break;
            }
    }
}