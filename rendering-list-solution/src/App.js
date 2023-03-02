import { useState } from 'react';
import Student from './Student';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Bob', age: 25, country: 'India' },
    { id: 2, name: 'Smith', age: 29, country: 'USA' },
    { id: 3, name: 'Jack', age: 31, country: 'Japan' }
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const onAdd = () => {
    students.push({
      id: Math.max(...students.map((student) => student.id)) + 1,
      name,
      age,
      country
    });
    setStudents([...students]);
    reset();
    console.log(students);
  };

  const onDelete = (id) => {
    let studentToDelete = students.findIndex((student) => student.id === id);
    if (studentToDelete > -1) {
      students.splice(studentToDelete, 1);
    }
    setStudents([...students]);
  }

  const reset = () => {
    setName("");
    setAge("");
    setCountry("");
  }

  return (
    <div className="App">
      <h2 className="stdTitle">Students</h2>
      <div className="addStudent">
        <input className="name" type={"text"} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="age" type={"number"} placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input className="country" type={"text"} placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
        <button className="btnAddStudent" onClick={onAdd}>Add</button>
      </div>
      <div className="stdList">
        <div className="name">Name</div>
        <div className="age">Age</div>
        <div className="country">Country</div>
        <div className="action">Action</div>
      </div>
      {students.map((student) => (
        <Student 
        key={student.id} 
        id={student.id} 
        name={student.name} 
        age={student.age} 
        country={student.country} 
        deleteStudent={onDelete} />
      ))}
    </div>
  );
}

export default App;
