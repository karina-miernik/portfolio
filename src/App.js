import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Back from './components/Back'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
return(
  <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route  path="/portfolio/about" element={<About/>} />
        <Route  path="/portfolio/projects" element={<Projects/>} />
        <Route  path="/portfolio/skills" element={<Skills/>} />
      </Routes>
      <Back/>
    </BrowserRouter>
  </>
)
}

export default App;
