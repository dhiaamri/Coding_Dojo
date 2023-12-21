import logo from './logo.svg';
// import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
      <PersonCard firstName={"Adam"} lastName={"white"} age={55} hairColor="blue"></PersonCard>
      <PersonCard firstName={"Dhia"} lastName={"Amri"} age={99} hairColor="Black"></PersonCard>
      <PersonCard firstName={"Adam"} lastName={"white"} age={55} hairColor="blue"></PersonCard>

    </div>
  );
}

export default App;
