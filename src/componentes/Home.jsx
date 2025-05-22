import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://682d01ce4fae18894754993f.mockapi.io/movies')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered shadow-sm rounded text-center">
            <thead className="table-light">
              <tr>
                <th style={{ width: '80px' }}>ID</th>
                <th>Nome do Filme</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/read/${item.id}`} className="text-decoration-none">
                      {item.nome}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
