export default class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.intervalId = null;
        this.isPlaying = false;

        document.addEventListener('keydown', this.handleKeyDown.bind(this))
        document.addEventListener('keyup', this.handleKeyUp.bind(this))

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
        const state = this.game.getState()

        if(state.isGameOver){
            this.view.renderEndScreen(state);
        } else if(!this.intervalId){
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
                    this.updateView();
                    break;
        
                case 'ArrowUp': //UP arrow
                    this.game.rotatePiece();
                    this.updateView();
                    break;
        
                case 'ArrowRight': //RIGHT arrow
                    this.game.movePieceRight();
                    this.updateView();
                    break;
        
                case 'ArrowDown': //DOWN arrow
                    this.stopTimer();
                    this.game.movePieceDown();
                    this.updateView();
                    break;
            }
        }

    handleKeyUp(e) {
        switch (e.keyCode) {
            case 40: //down
            this.startTimer();
            break;
        }
    }
}