export default class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.intervalId = null;
        this.isPlaying = false;

        document.addEventListener('keydown', this.handleKeyDown.bind(this))
        this.view.renderStartScreen();
    }
    update() {
        this.game.movePieceDown();
        this.updateView;
    }

    play() {
        this.isPlaying = true;
        this.startTimer();
        this.updateView;
    }

    pause() {
        this.isPlaying = false;
        this.stopTimer();
        this.updateView;
    }

    updateView() {
        if(!this.intervalId){
            this.view.renderPauseScreen();
        } else {
            this.view.renderMainScreen(this.game.getState());
        }
    }

    startTimer() {
        const speed = 1000 - this.game.getState().level * 100;
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.update();
            }, speed > 0 ? speed:100);
        }
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

        handleKeyDown(e) {
            switch (e.key) {
                case 13: //Enter
                    if (this.isPlaying) {
                        this.pause();
                    }else {
                        this.play()
                    }
                    break;
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