import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Create() {
  const [values, setValues] = useState({
    nome: '',
    genero: '',
    ano: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://682d01ce4fae18894754993f.mockapi.io/movies', values)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <h4 className="fw-bold mb-3">🎬 Cadastrar Novo Filme</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Nome:</label>
            <input
              type="text"
              className="form-control"
              value={values.nome}
              onChange={(e) => setValues({ ...values, nome: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Gênero:</label>
            <input
              type="text"
              className="form-control"
              value={values.genero}
              onChange={(e) => setValues({ ...values, genero: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Ano:</label>
            <input
              type="number"
              className="form-control"
              value={values.ano}
              onChange={(e) => setValues({ ...values, ano: e.target.value })}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success w-50 me-2">
              Salvar Filme
            </button>

            <button
              type="button"
              className="btn btn-secondary w-50"
              onClick={() => navigate('/')}
            >
              Cancelar
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Create;
