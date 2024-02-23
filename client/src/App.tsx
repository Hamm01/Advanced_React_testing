import { useState } from "react"
import { List } from "./List"

function App() {
  const [name, setName] = useState("")

  return <>
    <input value={name} onChange={e => setName(e.target.value)} type="text" />
    <br />
    <List />
  </>
}

export default App
