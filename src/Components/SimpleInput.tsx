import React from "react";

type AppProps = {
  inputTitle: string;
};

const SimpleInput = ({ inputTitle }: AppProps) => {
  return (
    <>
      <input className="input" placeholder={inputTitle} />
    </>
  );
};

export default SimpleInput;
