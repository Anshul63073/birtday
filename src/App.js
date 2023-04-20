import logo from './logo.svg';
import './App.css';
import Invitation from './components/Invitation';

function App() {
  return (
    <div className="App">
      <Invitation
  subject="Birthday Party Invitation"
  to="jaGdish@gmail.com"
  name="jaGdish"
  date="next Friday"
  location="Green field Avenue"
  friends="Ritu, Saurabh, Kartik"
/>

    </div>
  );
}

export default App;
