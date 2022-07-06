import Game from "./Game";
import Board from "./Board"

function App() {
  const myArray = ["a","b","c","d","e","f","g","h","i"];
  return (
    <div className="App">
      {/* <Game></Game> */}
      <Board squares={myArray} 
      onClick={index => {alert(myArray[index]) } } />
    </div>
  );
}

export default App;
