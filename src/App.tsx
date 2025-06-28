import { Profile } from './sections/profile'
import { Projects } from './sections/projects'
import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-10 lg:gap-22 w-full font-roboto overflow-hidden'>
      <Profile />
      <Projects />
    </div>
  )
}

export default App
