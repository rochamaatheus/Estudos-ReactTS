import React from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  const [modal, setModal] = React.useState(false);
  const [total, setTotal] = React.useState(0);

  function toggleAula() {
    setModal(!modal);
  }

  function incrementar(isButtonComponent: boolean): void {
    setTotal((total) => total + (isButtonComponent ? 2 : 1));
  }

  /*
    1 - Crie um componente Input ✔
    2 - Ele deve retornar <label> e <input>, dentro de uma <div> ✔
    3 - Recebe uma propriedade chamada label ✔
    4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label> ✔
    5 - Permita o uso de qualquer propriedade de input no componente Input. ✔
    6 - Adicione 1rem de marginBottom na <div> ✔
  */

  return (
    <>
      <h1>Teste Botões</h1>
      <button onClick={toggleAula}>Toggle</button>
      {modal && (
        <div>
          <button onClick={() => incrementar(false)}>{total}</button>
          <Button onClick={() => incrementar(true)} tamanho="1rem">
            {total}
          </Button>
        </div>
      )}
      <h1>Exercício: </h1>
      <p>Usando um input: </p>
      <Input label="Nome" id="nome" />
      <Input label="Email" id="email" />
      <Input label="Senha" id="senha" type="password" />
    </>
  );
}

export default App;
