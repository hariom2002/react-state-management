import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Counter() {
  const [count, setCount] = useState(10)

  function addOne(){
    setCount(count + 1);
  }

  return (
    <div  className = "App">
      <button onClick = {addOne}>
      count: {count}
      </button>
    </div>
  )
}

function NameList(){

  const [list, setList] = useState(["Hari", "Jason", "Natasha"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  }

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key = {name}>{name}</li>
        ))}
      </ul>

      <input
          type = "text"
          value = {name}
          onChange = {(e)=> setName(e.target.value)}
        >
      </input>

      <button onClick={onAddName}>
          Click to add name
      </button>
    </div>
  )

}

function App(){
  
  return(
    <div>
      <Counter />
      <NameList />
    </div>
  )
}

export default App
