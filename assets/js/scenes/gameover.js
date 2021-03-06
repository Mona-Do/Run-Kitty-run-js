import createPokiAnims from '../anims/poki.js';

export default class Gameover extends Phaser.Scene {
  constructor() {
    super('gameover');
  }

  preload() {}

  create() {
    //add play again option
    this.add
      .text(571, 250, 'Press SPACE to play again!', {
        fontSize: '32px',
      })
      .setOrigin(0.5);
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.space?.isDown) {
      this.scene.stop('gameover');
      this.scene.start('game');
    }
  }
}
