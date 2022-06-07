
import './App.css';
import Board from './components/Board'

function App() {

  function changeColor(e){
    e.target.style.background = '#282c34';
  }

  return (
    <div>
        <Board changeColor={changeColor} />
    </div>
  );
}

export default App;
