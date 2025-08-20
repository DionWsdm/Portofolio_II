import { Profile } from './sections/profile'
import { Experiences } from './sections/experiences'
import { Projects } from './sections/projects'
import { Skills } from './sections/skills'
import { Contact } from './sections/contact'
import './App.css'

function App() {
  return (
    <div className='flex flex-col w-full font-roboto overflow-hidden items-center'>
      <Profile />
      <Experiences/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
