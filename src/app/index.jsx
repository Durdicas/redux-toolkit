import { useState } from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
//import { decrement, increment } from './counterSlice'
//import { decrement, increment } from './features/counter/counterSlice'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <p>Trenutačna vrijednost je {count}</p>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Za iznos</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </>
  )
}

export default App
