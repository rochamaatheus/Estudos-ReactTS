import React from 'react';
import Input from './Input';

type State = {
  nome: string;
  email: string;
};

// type Action = {
//   type: 'SET_NOME' | 'SET_EMAIL';
//   payload: any;
// };

type Action =
  | { type: 'SET_NOME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_NOME':
      return {
        ...state,
        nome: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: '', email: '' });

  return (
    <form>
      <Input
        label="Nome"
        value={state.nome}
        onChange={({ target }) =>
          dispatch({ type: 'SET_NOME', payload: target.value })
        }
      />
      <Input
        label="Email"
        value={state.email}
        onChange={({ target }) =>
          dispatch({ type: 'SET_EMAIL', payload: target.value })
        }
      />
    </form>
  );
};

export default Form;
