import { Background } from './sections/background'
import { Profile } from './sections/profile'
import './App.css'

function App() {
  return (
    <div className='flex flex-col w-90 lg:w-7xl'>
      <Background />
      <Profile />
    </div>
    
    
  )
}

export default App
