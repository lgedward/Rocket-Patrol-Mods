/*
Liam Edwards
Rocket Patrol Duos
6.5 hours
Implement an alternating two-player mode (5)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
Implement mouse control for player movement and left mouse click to fire (5)
Display the time remaining (in seconds) on the screen (3)
Implement the speed increase that happens after 30 seconds in the original game (1)
Randomize each spaceship's movement direction at the start of each play (1)
(Each of the mods was implemented pretty straight forward. It should be noted the ships -
    - don't randomize at the start of each play but instead each time they reset)
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;