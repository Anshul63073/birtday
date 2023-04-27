import React, { useState } from "react";

function LuckyNumberGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  

  const handleGuess = (event) => {
    event.preventDefault();
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      alert("Please enter a valid number.");
      return;
    }
    if (numGuess < luckyNumber) {
      alert('You guessed smaller number. Try a bigger number.');
    } else if (numGuess > luckyNumber) {
      alert('You guessed bigger number. Try a smaller number.');
    } else {
      alert('Congratulations! You guessed the right number');
    }
    setGuess("");
  };

  return (
    <div>
      <h1>Lucky Number Game</h1>
      <p>Guess a number between 1 and 100.</p>
      <form onSubmit={handleGuess}>
        <input type="text" value={guess} onChange={(event) => setGuess(event.target.value)} />
        <button type="submit">Guess</button>
      </form>
      
    </div>
  );
}

export default LuckyNumberGame;
