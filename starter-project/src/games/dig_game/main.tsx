import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { Preloader } from './scenes/preload.ts';
import { SCENE_KEYS} from './common.ts';

const PhaserDigGame = () => {
  const gameContainer =  useRef<HTMLDivElement>(null);
  const gameInstance = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameContainer.current && !gameInstance.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.WEBGL,
        backgroundColor: '#888888',
        scene: [{
          create: create
        },
        Preloader, ],            
        parent: gameContainer.current,
        width: 1280,
        height: 720
      };

      gameInstance.current = new Phaser.Game(config);
    }

    return () => {
      if (gameInstance.current) {
        gameInstance.current.destroy(true);
        gameInstance.current = null;
      }
    };
  }, []);

  function create(this: Phaser.Scene) {
    // Add title text
    this.add.text(
      this.scale.width / 2,
      this.scale.height / 2,
      'DIG GAME', 
      { 
        fontFamily: 'Anton, sans-serif',
        fontSize: '64px', 
        color: '#ffffff',
        fontStyle: 'bold'
      }
    ).setOrigin(0.5);

    this.scene.start(SCENE_KEYS.PRELOAD);
  }
;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      fontFamily: 'Anton, sans-serif'
    }}>
      <div ref={gameContainer} />
    </div>
  );
};

export default PhaserDigGame;
