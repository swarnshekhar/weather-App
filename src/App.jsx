import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './Components/Weather'
// import text from './Components/Weather/text'


function App() {

  return (
    <>
    {/* { text=== 'sunny' && (
      <lottie-player
        src="https://lottie.host/b58c4145-023b-4504-8d47-85292bdbe6d0/YlvT315k0b.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
        direction="1"
        mode="normal">
      </lottie-player>
    )} */}
{/* <lottie-player src="https://lottie.host/9f5e57a4-5e94-41bf-bb41-9953ae9f8467/2TWDuzTBGA.json" background="##ffffff" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player>
<lottie-player src="https://lottie.host/b5037b31-c97f-4784-8ac9-cb4a1789c584/rHOhaj26PO.json" background="##ffffff" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player>
<lottie-player src="https://lottie.host/1a7f202d-a649-4ebd-af30-f1f55bf20eee/9ybiESVIwl.json" background="##FFFFFF" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player> */}
    <Weather/>

  </>
  )
}

export default App
