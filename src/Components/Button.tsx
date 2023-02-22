import React from "react";

type AppProps = {
  btnTitle: string;
  css: string;
  increment?: React.MouseEventHandler<HTMLButtonElement>;
  decrement?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ btnTitle, css, increment, decrement }: AppProps) => {
  return (
    <React.Fragment>
      <button className={css} onClick={increment || decrement}>
        {btnTitle}
      </button>
    </React.Fragment>
  );
};

export default Button;
