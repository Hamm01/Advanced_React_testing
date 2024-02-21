import { useState } from "react"
import { Counter } from "./Counter"

function App() {
  const [name, setName] = useState("")

  return <>
    <input value={name} onChange={e => setName(e.target.value)} type="text" />
    <br />
    <Counter initialCount={0} />
  </>
}

export default App
