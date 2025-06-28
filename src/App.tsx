import { Profile } from './sections/profile'
import { Projects } from './sections/projects'
import { Skills } from './sections/skills'
import './App.css'

function App() {
  return (
    <div className='flex flex-col lg:gap-22 w-full font-roboto overflow-hidden'>
      <Profile />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
