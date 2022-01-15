import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
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
      <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Home />} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/projects" element={<Projects/>} />
        <Route  path="/skills" element={<Skills/>} />
      </Routes>
    </BrowserRouter>
  </>
)
}

export default App;
