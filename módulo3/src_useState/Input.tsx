import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ id, label, setState, ...props }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        {...props}
      />
    </>
  );
};

export default Input;
