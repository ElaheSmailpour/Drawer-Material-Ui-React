
//import Navbar from "./components/Navbar/Navbar";

import Accordion1 from "./pages/Accordion1";


function App() {
  return (
   
     
        <div >
          {/* <Navbar/> */}
   <Accordion1/>
        </div>
     

   
  );
}
export default App;
/*

import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import  DrawerMenu from "./pages/DrawerMenu"
function App() {
  return (
   
      <BrowserRouter>
     
        <div className="app-content">
         
          <DrawerMenu/>
          <Switch>
          <Route path={"/"} component={Home}></Route>
          <Route path={"/contact"} component={Contact}></Route>
          <Route path={"/about"} component={About}></Route>
        
          </Switch>
        </div>
      </BrowserRouter>

   
  );
}

export default App;
*/