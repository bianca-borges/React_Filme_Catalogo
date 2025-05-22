import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import Create from './componentes/Create';
import Update from './componentes/Update';
import Read from './componentes/Read';
import Delete from './componentes/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* MENU SUPERIOR */}
      <div className="shadow-sm p-3 mb-4 bg-white text-center border border-secondary rounded mx-auto" style={{ maxWidth: '850px' }}>
        <h2 className="fw-bold">CATÁLOGO DE FILMES</h2>
        <nav className="d-flex justify-content-center gap-4 mt-3">
          <Link to="/" className="nav-link">INÍCIO</Link>
          <Link to="/create" className="nav-link">CRIAR</Link>
          <Link to="/update/1" className="nav-link">ALTERAR</Link>
          <Link to="/delete/1" className="nav-link">APAGAR</Link>
        </nav>
      </div>

      {/* ROTAS */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
