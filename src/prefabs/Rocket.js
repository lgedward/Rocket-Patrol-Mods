// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      this.sfxShot = scene.sound.add('sfx-shot')
      scene.add.existing(this);   // add to existing, displayList, updateList
      this.isFiring = false;      // track rocket's firing status
      this.moveSpeed = 2;         // pixels per frame
      this.isOOB = 0;
      scene.input.on('pointermove', pointer => {
        if(!this.isFiring) {
            this.x = pointer.x;
        }
      });

      scene.input.on('pointerdown', pointer => {
          if (!this.isFiring) {
              this.isFiring = true;
              this.sfxShot.play();
          }
      });
    }

    update() {
      // left/right movement
      if(!this.isFiring) {
        if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
          this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
          }
      } 
      // fire button
      if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
        this.isFiring = true
        this.sfxShot.play()
      }
      // if fired, move up
      if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
        this.y -= this.moveSpeed;
      }
      // reset on miss
      if(this.y <= borderUISize * 3 + borderPadding) {
        this.isOOB = 1;
        this.reset();
      }
    }

    // reset rocket to "ground"
    reset() {
      this.isFiring = false;
      this.y = game.config.height - borderUISize - borderPadding;
    }
}
