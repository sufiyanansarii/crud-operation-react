import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './component/Create/Create';
import Read from './component/Read/Read';
import Update from './component/Update/Update';

function App() {
  return (
    <div className="container">
  
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Create/>}></Route>
     <Route exact path='/read' element={<Read/>}></Route>
     <Route exact path='/update' element={<Update/>}></Route>


    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
