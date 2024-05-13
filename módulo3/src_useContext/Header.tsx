import React from 'react';
import { useUser } from './UserContext';

const Header = () => {
  // const { setDark } = useUi();
  const { data, loading } = useUser();

  if (!data) return null;
  return (
    <header>
      <h1>{data.nome}</h1>
    </header>
  );
};

export default Header;
