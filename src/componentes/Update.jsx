import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
  const [idInput, setIdInput] = useState('');
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' });
  const [showForm, setShowForm] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!idInput) return;

    axios.get(`https://682d01ce4fae18894754993f.mockapi.io/movies/${idInput}`)
      .then(res => {
        setValues({
          nome: res.data.nome,
          genero: res.data.genero,
          ano: res.data.ano.toString()
        });
        setShowForm(true);
        setNotFound(false);
      })
      .catch(() => {
        setShowForm(false);
        setNotFound(true);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://682d01ce4fae18894754993f.mockapi.io/movies/${idInput}`, values)
      .then(() => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-start bg-light pt-4'>
      <div className='w-50 border bg-white shadow p-4 rounded'>

        <h2 className="mb-3 text-center">Editar Filme</h2>

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

        {/* Formulário para alteração */}
        {showForm && (
          <form onSubmit={handleUpdate}>
            <div className='mb-2'>
              <label className="form-label">Nome:</label>
              <input
                type="text"
                className="form-control"
                value={values.nome}
                onChange={e => setValues({ ...values, nome: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label className="form-label">Gênero:</label>
              <input
                type="text"
                className="form-control"
                value={values.genero}
                onChange={e => setValues({ ...values, genero: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label className="form-label">Ano:</label>
              <input
                type="number"
                className="form-control"
                value={values.ano}
                onChange={e => setValues({ ...values, ano: e.target.value })}
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className='btn btn-success'>Alterar</button>
              <Link to="/" className='btn btn-outline-danger'>Cancelar</Link>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

export default Update;
