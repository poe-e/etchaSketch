
import './App.css';
import Board from './components/Board'

function App() {


  const handleClick = () => {
    console.log('Clicked')
  }


  return (
    <div className='full'>
      <Board onClick={()=>handleClick} />
    </div>
  );
}

export default App;
