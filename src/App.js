import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Hero from './pages/Hero'
function App() {
 return(
  <BrowserRouter>
  
    <Switch>
<Route path="/" exact component={Home}/>
<Route path="/hero/:id"  component={Hero}/>
 </Switch>

  </BrowserRouter>
 )
}


export default App;
