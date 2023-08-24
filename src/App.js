import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<HomePage/>}/>
    {/* <Route path='/login' element={<LoginPage/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
