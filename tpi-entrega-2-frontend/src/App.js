import './App.css';
import { Inicio } from './components/Inicio.jsx';
import { Menu } from './components/Menu.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Cuentas } from './components/Cuentas/Cuentas.js';
import Boletas from './components/Boletas/Boletas.jsx';
import  Sucursales  from './components/Sucursales/Sucursales.jsx';
import Clientes from './components/Clientes/Clientes.jsx';
import Localidades from './components/Localidades/Localidades.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/boletas" element={<Boletas />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/sucursales" element={<Sucursales />} />
            <Route path="/localidades" element={<Localidades />} />

            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;