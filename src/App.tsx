import { Profile } from './sections/profile'
import { About } from './sections/projects'
import './App.css'

function App() {


  return (
    <div className='flex flex-col gap-20 w-full mx-auto font-roboto overflow-hidden'>
      <Profile />
      <About />
    </div>
  )
}

export default App
