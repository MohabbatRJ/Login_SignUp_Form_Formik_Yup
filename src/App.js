import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/users/RegistrationForm';
import LoginForm from './components/users/LoginForm';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/' element={<RegistrationForm />}/>
        </Routes>
        
        
        
        </BrowserRouter>
      </div>
  );
}

export default App;
