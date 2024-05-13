import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  tamanho?: string;
};

type ButtonProps2 = React.PropsWithChildren<{
  onClick: (event: React.MouseEvent) => void;
  tamanho?: string;
}>;

type ButtonProps3 = React.ComponentProps<'button'> & {
  tamanho?: string;
};

const Button = ({ tamanho, children, onClick, ...props }: ButtonProps3) => {
  return (
    <button style={{ fontSize: tamanho }} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
