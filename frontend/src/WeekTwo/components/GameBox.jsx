import './GameBox.css'
import { useState } from 'react'

function GameBox() {
  const [count, setCount] = useState(0)

  const increment = async () => {
    const response = await fetch("/api/increment");
    if (!response.ok) {
      console.log("Error in function call");
      setErrorLabel("Failed to connect to backend");
    }
    else if (response == null) {
      console.log("Error getting data");
      setErrorLabel("Failed to connect to backend");
    }
    else {
      const data = await response.json();
      setCount(data.count)
    }
  }

  return <div className="game-box">
    <button onClick={() => increment()}>Increment: {count}</button>
  </div>
}

export default GameBox