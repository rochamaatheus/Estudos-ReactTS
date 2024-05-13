import React from 'react';

type PropsInput = React.ComponentProps<'input'> & {
  label: string;
  id: string;
};

const Input = ({ label, id, ...props }: PropsInput) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </div>
  );
};

export default Input;
