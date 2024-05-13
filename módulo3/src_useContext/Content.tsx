import React from 'react';
import { useUi } from './UiContext';
import { useUser } from './UserContext';

const Context = () => {
  // const { dark } = useUi();
  const { data, loading } = useUser();

  if (!data) return null;
  if (loading) return <div>Carregando...</div>;
  return (
    <div>
      <h3>Preferências</h3>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>Playback: {data.preferencias.playback}</p>
      <p>Volume: {data.preferencias.volume}</p>
    </div>
  );
};

export default Context;
