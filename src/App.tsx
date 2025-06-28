import { Profile } from './sections/profile'
import { Projects } from './sections/projects'
import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-20 w-full mx-auto font-roboto overflow-hidden'>
      <Profile />
      <Projects />
    </div>
  )
}

export default App
