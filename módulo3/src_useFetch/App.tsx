import React from 'react';
import useFetch from './useFetch';

type Produto = {
  id: string;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
  internacional: boolean;
};

const PRODUTOS_URL = 'https://data.origamid.dev/produtos';

function App() {
  const [id, setId] = React.useState('p001');
  const produto = useFetch<Produto>(`${PRODUTOS_URL}/${id}/`);
  const produtos = useFetch<Produto[]>(PRODUTOS_URL);

  return (
    <section className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button
              style={{ fontSize: '1rem' }}
              key={produto.id}
              onClick={() => setId(produto.id)}
            >
              {produto.id}
            </button>
          ))}
      </div>
      <div>
        {produto.loading && <div>Carregando...</div>}
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
            <li>{produto.data.descricao}</li>
            {produto.data.internacional ? <li>Internacional</li> : ''}
          </ul>
        )}
      </div>
    </section>
  );
}

export default App;
