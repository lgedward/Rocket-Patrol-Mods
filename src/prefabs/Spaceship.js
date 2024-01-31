// Spaceship 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed         // pixels per frame
        this.fastMode = 0;
        this.currentSide = getRandomInt(2);
    }

    update() {
        if (this.currentSide == 0){
            // Move the spaceship
            this.x -= this.moveSpeed;
            if (this.fastMode === 1) {
                this.x -= this.moveSpeed;
            }
            if (this.x <= 0 - this.width) {
                this.reset();
            }
        }
        else {
            this.x += this.moveSpeed;
            if (this.fastMode === 1) {
                this.x += this.moveSpeed;
            }
            if (this.x >= game.config.width) {
                this.reset2();
            }       
        }
    }

    reset() {
        // Reset the x position to the right edge
        if (getRandomInt(2) == 1){
            this.x = 0 - this.width;
            this.currentSide = 1;
        }
        else {
            this.x = game.config.width + this.width;
        }
    }
    
    reset2() {
        if (getRandomInt(2) == 0){
            this.x = game.config.width + this.width;
            this.currentSide = 0;
        }
        else {
            this.x = 0 - this.width;
        }
    } 
}