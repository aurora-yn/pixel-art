import React, { useState } from 'react'
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'
import './App.css'
import './Colors.css'

function App() {
  const [color, setColor] = useState(0)
  return (
    <>
      <div className='titleContainer'>
        <h1 className='title'>Pixel Art</h1>
        <p className='desc'>
          Select a color at the left penal and click any pixel in the canvas
        </p>
      </div>
      <div className='App'>
        <ColorPicker 
          currentColor={color} 
          setColor={color => setColor(color)}
        />
        <Canvas currentColor={color} />
      </div>
    </>
  )
}

export default App
