import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Index from './pages/index';
import Premium from './pages/Premium';
import Inicio from './pages/inicio';
import Terminos from './pages/terminos';

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/registro" element={<Registro/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/inicio" element={<Inicio/>}></Route>
        <Route path="/premium" element={<Premium/>}></Route>
        <Route path="/terminos" element={<Terminos/>}></Route>
      </Routes>
    </>
  );
}

export default App;
