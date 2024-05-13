import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

function App() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
      <hr />
      <Checkbox label="Termos e Condições" />
    </div>
  );
}

export default App;
