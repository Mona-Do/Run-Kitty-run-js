export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('platform', 'assets/img/ground.png');
    this.load.image('layer-meme', 'assets/img/layer-meme.png');
    this.load.spritesheet('poki', 'assets/img/poki.png', {
      frameWidth: 104,
      frameHeight: 72,
    });

    //this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.scene.start('game');

  }
}
