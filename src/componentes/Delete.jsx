import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Delete() {
  const [idInput, setIdInput] = useState('');
  const [filme, setFilme] = useState({ nome: '', genero: '', ano: '' });
  const [showDetails, setShowDetails] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!idInput) return;

    axios.get(`https://682d01ce4fae18894754993f.mockapi.io/movies/${idInput}`)
      .then(res => {
        setFilme({
          nome: res.data.nome,
          genero: res.data.genero,
          ano: res.data.ano.toString()
        });
        setShowDetails(true);
        setNotFound(false);
      })
      .catch(() => {
        setShowDetails(false);
        setNotFound(true);
      });
  };

  const handleDelete = () => {
    axios.delete(`https://682d01ce4fae18894754993f.mockapi.io/movies/${idInput}`)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-start bg-light pt-4'>
      <div className='w-50 border bg-white shadow p-4 rounded'>

        <h2 className="mb-3 text-center">Excluir Filme</h2>

        {/* Campo de ID */}
        <div className="mb-3">
          <label className="form-label">Id:</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              value={idInput}
              onChange={e => setIdInput(e.target.value)}
              placeholder="Ex: 1"
            />
            <button className='btn btn-primary me-2' onClick={handleSearch}>Procurar</button>
            <Link to="/" className='btn btn-outline-danger'>Cancelar</Link>
          </div>
        </div>

        {/* Caso não encontre o ID */}
        {notFound && (
          <div className="bg-danger bg-opacity-25 text-center p-3 rounded">
            <p className="text-danger fw-bold fs-5">Id não encontrado</p>
            <Link to="/" className='btn btn-outline-danger'>Voltar</Link>
          </div>
        )}

        {/* Mostrar dados antes de deletar */}
        {showDetails && (
          <div className='mt-4'>
            <p><strong>Nome:</strong> {filme.nome}</p>
            <p><strong>Gênero:</strong> {filme.genero}</p>
            <p><strong>Ano:</strong> {filme.ano}</p>
            <div className="d-flex justify-content-between mt-3">
              <button className='btn btn-danger' onClick={handleDelete}>Apagar</button>
              <Link to="/" className='btn btn-outline-secondary'>Cancelar</Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Delete;
