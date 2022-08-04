import Message from './message';
import './App.css';

function App() {
	const name = 'Артур'
  return (
    <div class='Container'> 
		<Message name={name} />    
		</div>
  );
}

export default App;
