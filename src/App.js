import './App.css';
import Home from './Components/Home/Home';
import Rules from './Components/Rules/Rules';
import Quiz from './Components/Quiz/Quiz';
import  { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
    
    
    
    
    </>
  );
}

export default App;
