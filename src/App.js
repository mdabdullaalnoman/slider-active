import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './Components/Booking/Booking';

function App() {
  return (
   <Router>
     <Switch>

       <Route exact path="/">
          <Home></Home>
       </Route>

        <Route path="/booking:bookingId">
           <Booking></Booking>
        </Route>
        
     </Switch>
   </Router>
  );
}

export default App;
