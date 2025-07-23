import Navbar from '../../navbar/navbar';
import './main.css'

import PhaserDigGame from '../../games/dig_game/main.tsx'

const DigGame = () => (
  <div>
    <Navbar />
    <div id="game-container">
        <PhaserDigGame />
    </div>
  </div>
);

export default DigGame;