import { useState } from 'react'
import reactLogo from './assets/react.svg'
import electronLogo from './assets/electron.png'
import typescriptLogo from './assets/typescript.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.electronforge.io" target="_blank">
          <img src={electronLogo} className="logo" alt="Electron logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={typescriptLogo} className="logo typescript" alt="Typescript logo" />
        </a>
      </div>
      <h1>Electron + React(vite) + Typescript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App
