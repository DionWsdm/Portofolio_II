import { Profile } from './sections/profile'
import { Projects } from './sections/projects'
import { Skills } from './sections/skills'
import { Contact } from './sections/contact'
import './App.css'

function App() {
  return (
    <div className='flex flex-col w-full font-roboto overflow-hidden items-center'>
      <Profile />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
