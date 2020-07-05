import React from 'react';
import Home from './pages/Home';
import Book from './pages/Book';
import Contact from './pages/Contact';
import MOT from './pages/MOT';
import Servicing from './pages/Servicing';
import Testimonial from './pages/Testimonial';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path ='/' exact>
     <Home/>
     </Route>
     <Route path='/book'>
    <Book/>
    </Route>
    <Route path ='/Contact'>
    <Contact/>
    </Route>
    <Route path ='/MOT'>
    <MOT/>
    </Route>
    <Route path ='/Servicing'>
    <Servicing/>
    </Route>
    <Route path ='/Testimonial'>
    <Testimonial/>
    </Route>


     </Switch>
    </div>
    </Router>
  );
}

export default App;
