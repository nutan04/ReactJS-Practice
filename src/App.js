import { BrowserRouter as Router, Route, Switch, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import ClassComp from './Component/ClassComp';
import CondRenderingComp from './Component/CondRenderingComp';
import Constructor from './Component/Constructor';
import EventHandlerComp from './Component/EventHandlerComp';
import FormComp from './Component/FormComp';
import FunctionalCom from './Component/FunctionalCom';
import FunctionalCom2 from './Component/FunctionalCom2';
import LifecycleDemo from './Component/LifecycleDemo';
import PropsComp from './Component/PropsComp';
import StateComp from './Component/StateComp';
import StyleCssComp from './Component/StyleCssComp';
import ReactTableComp from './Component/ReactTableComp';
import ReactContextComp from './Component/ReactContextComp';

function App() {
  var myAttribute = {
    color: 'red',
    fontSize: '50px'
  }

  var data =
    [
      {
        "name": "Abhishek"
      },
      {
        "name": "Saharsh"
      },
      {
        "name": "Ajay"
      }
    ]
  return (
    <>

      {/* This is demo code */}
      <h1>This Is Prcatice code</h1>
      <p className='Hello'>This website contains the best CS tutorials.</p>
      <p data-demoattribute="Demo">This is custom attribute</p>
      <h1 className="hello" style={{ color: 'red', fontSize: "50px" }} >JavaTpoint</h1>
      <p data-demoAttribute="demo" style={myAttribute}>This website contains the best CS tutorials.</p>
      <p>{10 + 20}</p>
      <FunctionalCom name={data} ></FunctionalCom>
      <FunctionalCom2 name={"nitya"} sirname={"bhoyar"}></FunctionalCom2>
      <FunctionalCom2 name={"nitya"} sirname={"bhoyar"}></FunctionalCom2>
      <ClassComp name={"nitya"} sirname={"bhoyar"} />
      <StateComp />
      <PropsComp name={"nitya"} sirname={"bhoyar"}></PropsComp>
      <Constructor in initialCount={5} />
      <LifecycleDemo />
      <FormComp />
      <EventHandlerComp />
      <CondRenderingComp />
      <div>
        <h1>React Router Example</h1>

        <Router>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <p>Active style</p>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={
                { color: 'red' }
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={
                { color: 'green' }
              }>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact activeStyle={
                { color: 'magenta' }
              }>Contact</NavLink>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<EventHandlerComp />} />
            <Route path="/about" element={<CondRenderingComp />} />
            <Route path="/contact" element={<FormComp />} />
          </Routes>
        </Router>

      </div >
      <StyleCssComp />
      <ReactTableComp />
      <ReactContextComp />

    </>
  );
}

export default App;
