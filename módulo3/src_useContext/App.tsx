import React from 'react';
import Header from './Header';
import Context from './Content';
import { UserContextProvider } from './UserContext';

/*
Utilize a API: https://data.origamid.dev/usuarios/1

1 - Crie um UserContext
2 - Use o useFetch dentro do UserContext para exportar data, loading e error
3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx
*/

function App() {
  return (
    // Feito no outro exemplo
    // <UiContextProvider>
    //   <Header />
    //   <Context />
    // </UiContextProvider>
    <UserContextProvider>
      <Header />
      <Context />
    </UserContextProvider>
  );
}

export default App;
