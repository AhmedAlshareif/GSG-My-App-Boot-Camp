import logo from './logo.svg';
import './App.css';
import Co1 from './components/co1';
import Co2 from './components/co2';
import MyName from './components/co3';
import Tweet from './components/TweetComponents';
import Person from './components/person';
import Counter from './components/counter';
import Palette from './components/ex';
import TempForm from './components/inputtemp';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <TempForm/>
        <Palette/>
        <Counter/>
        <Co1 />
        <Co2 />
        <MyName name="Ahmed " />
        <div></div>
        <Tweet 
        username="@johndoe"
        name="John Doe"
        date="Jan 18, 2023"
        message="Just learned about React components!"
      />
      <Tweet 
        username="@janedoe"
        name="Jane Doe"
        date="Jan 17, 2023"
        message="Loving the weather today!"
      />
      <Tweet 
        username="@jimmydoe"
        name="Jimmy Doe"
        date="Jan 16, 2023"
        message="Excited for the weekend!"
      />
        <img src={logo} className="App-logo" alt="logo" />
        <Person 
        name="John Doe"
        age={25}
        hobbies={['reading', 'running', 'cooking']}
      />
      <Person 
        name="Jane Smith"
        age={18}
        hobbies={['swimming', 'singing']}
      />
      <Person 
        name="Jimmy Johnson"
        age={35}
        hobbies={['fishing', 'hiking']}/>
        <p>Ahmed moh Alshareif</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
