
import './App.css'

function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="flex w-full justify-center">
        <kbd className="kbd">▲</kbd>
      </div>
      <div className="flex w-full justify-center gap-12">
        <kbd className="kbd">◀︎</kbd>
        <kbd className="kbd">▶︎</kbd>
      </div>
      <div className="flex w-full justify-center">
        <kbd className="kbd">▼</kbd>
      </div>
    </>
  )
}

export default App
