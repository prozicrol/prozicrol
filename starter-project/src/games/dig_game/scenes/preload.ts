import {ASSET_KEYS, SPRITESHEET_SIZE, SCENE_KEYS, SCALE} from '../common.ts'


export class Preloader extends Phaser.Scene {

    constructor ()
    {
        super(SCENE_KEYS.PRELOAD);
    }

    preload ()
    {
        this.load.spritesheet(ASSET_KEYS.TILESET, 'assets/dig_game/tilesetcave.png', {
            frameWidth: SPRITESHEET_SIZE,
            frameHeight: SPRITESHEET_SIZE,
            margin:0,
        } as Phaser.Types.Loader.FileTypes.ImageFrameConfig);

        this.load.image(ASSET_KEYS.BACKGROUND, 'assets/dig_game/background.png');
    }

    create ()
    {
        this.add.image(0, 0, ASSET_KEYS.BACKGROUND).setOrigin(0);
        this.add.image(0, 0, ASSET_KEYS.TILESET, 23).setScale(4);
        
    }

}