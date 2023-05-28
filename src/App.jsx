import { Routes, Route, Link, Outlet } from 'react-router-dom'


const Home = () => {
  return <h1>Home Page</h1>
}

const About = () => {
  return <h1>About Page</h1>
}

const Contact = () => {
  return <h1>Contact Page</h1>
}


const Projects = () => {
  return <div>
    <ul className='flex flex-row gap-3'>
      <li><Link className='p-1 rounded-md bg-slate-200' to={'Dialog Modal'}>Dialog Modal</Link></li>
      <li><Link className='p-1 rounded-md bg-slate-200' to={'landingpage'}>Landing Page Project</Link></li>
    </ul>
    <div>
      <Outlet />
    </div>
  </div>
}


const Todo = () => {
  return <h1>Todo</h1>
}

const LandingPage = () => {
  return <h1>Landing Page</h1>
}

const App = () => {
  return <>
    <header className='container mx-auto my-0 p-3 bg-slate-300 flex flex-row justify-between items-center'>
      <ul>
        <li><h1>React Router Dom V6</h1></li>
      </ul>
      <ul className='flex flex-row gap-3'>
        <li><Link to={'routing_practice/'}>Home</Link></li>
        <li><Link to={'routing_practice/about'}>About</Link></li>
        <li><Link to={'routing_practice/contact'}>Contact</Link></li>
        <li><Link to={'routing_practice/projects'}>Projects</Link></li>
      </ul>
    </header>
    <main className='container mx-auto my-0 p-3'>
      <Routes>
        <Route exact path='routing_practice/' element={<Home />} />
        <Route exact path='routing_practice/about' element={<About />} />
        <Route exact path='routing_practice/contact' element={<Contact />} />
        <Route exact path='routing_practice/projects' element={<Projects />}>
          <Route path='todo' element={<Todo />} />
          <Route path='landingpage' element={<LandingPage />} />
        </Route>
      </Routes>
    </main>
  </>
}

export default App