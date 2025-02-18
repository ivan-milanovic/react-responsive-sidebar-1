import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
    return (
        <>
           <Router>
               <Navbar/>
               <Switch>
                   <Route path='/' exact component={Home} />
                   <Route path='/reports' exact component={Reports} />
                   <Route path='/products' exact component={Products}/>
               </Switch>
           </Router>
        </>
    );
}

export default App;
