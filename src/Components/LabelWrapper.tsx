import React, { Children } from "react";

type AppProps = {
  labelTitle: string;
  Children: JSX.Element;
};

const LabelWrapper = ({ labelTitle, Children }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="label">{labelTitle}</div>
      {Children}
    </React.Fragment>
  );
};

export default LabelWrapper;
