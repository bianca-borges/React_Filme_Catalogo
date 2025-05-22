import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Read() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    axios.get(`https://682d01ce4fae18894754993f.mockapi.io/movies/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h4 className="fw-bold mb-3">🎬 Detalhes do Filme</h4>
        <p className="mb-2 fs-5"><strong>Nome:</strong> {filme.nome}</p>
        <p className="mb-2 fs-5"><strong>Gênero:</strong> {filme.genero}</p>
        <p className="mb-4 fs-5"><strong>Ano:</strong> {filme.ano}</p>
        <Link to="/" className="btn btn-secondary btn-sm w-100">Voltar para Home</Link>
      </div>
    </div>
  );
}

export default Read;
