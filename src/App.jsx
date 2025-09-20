
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'

const bottlePromise = fetch('bottles.json')
.then(res => res.json())
function App() {
  return (
    <>
      <h1>Buy Awsome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are comming...</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
