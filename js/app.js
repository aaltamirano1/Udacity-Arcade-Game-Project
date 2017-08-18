"use strict";
// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 65;
    this.speed = speed;
};
//constant and immutable values should be named in capital letters.
var HIGH_SPEED =200;
var MID_SPEED = 150;
var LOW_SPEED = 100;
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    var self = this;
    if (self.x < 425) {
        self.x += (self.speed*dt);
        if (self.x < player.x + player.width && self.x + self.width > player.x && self.y < player.y + player.height && self.height + self.y > player.y) {
            player.x = 200;
            player.y = 400;
        }
    } else {
        self.x = -40;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.width = 60;
    this.height = 75;
    this.handleInput = function (key) {
        if (key === 'up') {
            if (this.y !== -10) {
                this.y -= 82;
            }
        } else if (key === 'down') {
            if (this.y !== 400) {
                this.y += 82;
            }
        } else if (key === 'right') {
            if (this.x !== 400) {
                this.x += 100;
            }
        } else if (key === 'left') {
            if (this.x !== 0) {
                this.x -= 100;
            }
        }
    };
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(200, 400);
var enemy1 = new Enemy(200, 318, HIGH_SPEED);
var enemy2 = new Enemy(300, 318, LOW_SPEED);
var enemy3 = new Enemy(400, 154, MID_SPEED);
var enemy4 = new Enemy(150, 72, HIGH_SPEED);
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

Player.prototype.update = function (dt) {
        if (this.y === -10) {
        setTimeout(function () {
            this.y = 400;
        }.bind(this), 750);
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});