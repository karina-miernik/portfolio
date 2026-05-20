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
} from "react-router-dom";
import PageWrapper from './components/PageWrapper';
const App = () => {
return(
  <>
    <BrowserRouter>
    <PageWrapper>
      <Menu/>
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route  path="/portfolio/about" element={<About/>} />
        <Route  path="/portfolio/projects" element={<Projects/>} />
        <Route  path="/portfolio/skills" element={<Skills/>} />
      </Routes>
      <Back/>
      </PageWrapper>
    </BrowserRouter>
  </>
)
}

export default App;
