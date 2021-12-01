import './App.css';
import {useState} from 'react'

const App = () => {
  const [name, setName] = useState('mario')
  
  const handleClick = () => {
     setName('dean')
     setTimeout(() => {
       console.log(name)
     }, 2000)
    }

  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default App;