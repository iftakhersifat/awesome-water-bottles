import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

function App() {
  const bottlesPromise = fetch('../public/bottles.json')
  .then(res=>res.json())

  return (
    <>
      <h1>Awesome-Water-Bottles</h1>
      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
