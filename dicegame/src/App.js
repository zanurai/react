
import { useState } from 'react';
import './index.css';

const App = () => {
  const [diceNumber, setDiceNumber] = useState(2);
  const [diceNumber2, setDiceNumber2] = useState(6);
  const refreshDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1
    setDiceNumber(dice);
    const dice2 = Math.floor(Math.random() * 6) + 1
    setDiceNumber2(dice2);
  }
  return (
    <div >
      <center>
        <img width={300} height={300} src={require(`./dice5/${diceNumber}.png`)}></img>
        <img width={300} height={300} src={require(`./dice5/${diceNumber2}.png`)}></img>
        <br />
        <button onClick={() => refreshDice()} className="button">Roll</button>
      </center>
    </div>
  );
}

export default App;
