import { useState } from 'react'
import { createPortal } from 'react-dom'
function App() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <div style={{ position: 'relative', marginTop: '100px' }}>
      <h1>App content</h1>
      <button onClick={() => setisOpen(true)}>Show Messge</button>
      <AlertMessage isOpen={isOpen} onClose={() => setisOpen(false)}>
        Secret Message
        <br />
        Click to close
      </AlertMessage>
    </div>
  )
}

function AlertMessage({ children, onClose, isOpen }) {
  if (!isOpen) return null
  return createPortal(
    <div
      onClick={onClose}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '.5rem',
        left: '50%',
        translate: '-50%',
        background: '#777',
        color: 'white',
        borderRadius: '.5rem',
        padding: '.5rem'
      }}
    >
      {children}
    </div>,
    document.querySelector('#alert-messages')
  )
}

export default App
