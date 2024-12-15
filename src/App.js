import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BaseComponent from 'bootstrap/js/dist/base-component';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(false);
  const limit = 10;

  async function buscarProdutos(offset) {
    const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
        setLoading(false);
        setNext(data.length < limit);
      })
      .catch(error => console.error('Erro: ', error));
      setLoading(false);
  }

  useEffect(() => { buscarProdutos(offset) }, [offset]);

  function handleNextPage() {
    setOffset(prevOffset => prevOffset + limit);
  }

  function handlePreviousPage() {
    if (offset - limit >= 0) {
      setOffset(prevOffset => prevOffset - limit);
    }
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="row">

      <Header text="React Store"></Header>

      <div className='botoes'>
        <button type="button" className="btn btn-outline-dark" onClick={handlePreviousPage} disabled={offset === 0}>Voltar</button>
        <button type="button" className="btn btn-outline-dark" onClick={handleNextPage} disabled={next}>Próxima</button>
      </div>

      {produtos.map(produto => (<Card produto={produto} />))}

    </div>
  );
}

export default App;