import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Props Excercise</h2>
      <Button btnName="Click Me" btnPadding="5px" btnBackground="blue" btnColor="white" btnBorderColor="#034b99"/>
      <Button btnName="Submit" btnPadding="5px" btnBackground="green" btnColor="white" btnBorderRadius="5px" btnBorderColor="#28a745" />
      <Button btnName="Cancel" btnPadding="5px" btnBackground="red" btnColor="white" btnBorderRadius="10px" btnBorderColor="#7e0b16" />
      <Button btnName="Reset" btnPadding="5px" btnBackground="yellow" btnColor="black" btnBorderRadius="2px" btnBorderColor="#ffc107" />
    </div>
  );
}

export default App;
