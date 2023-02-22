import React from "react";

import StepOne from "../layout/StepOne";
import StepTwo from "../layout/stepTwo";
import StepThree from "../layout/stepThree";
import StepFour from "../layout/stepFour";
// import StepTwo from "../layout/stepTwo";

type AppProps = {
  step: number;
  incrementStep: React.MouseEventHandler<HTMLButtonElement>;
  decrementStep: React.MouseEventHandler<HTMLButtonElement>;
};

const RenderSteps = ({
  step,
  incrementStep,
  decrementStep,
}: AppProps): JSX.Element => {
  switch (step) {
    case 0: {
      return (
        <StepOne incrementStep={incrementStep} decrementStep={decrementStep} />
      );
    }

    case 1: {
      return (
        <StepTwo incrementStep={incrementStep} decrementStep={decrementStep} />
      );
    }

    case 2: {
      return (
        <StepThree
          incrementStep={incrementStep}
          decrementStep={decrementStep}
        />
      );
    }
    case 3: {
      return <StepFour />;
    }
    default:
      return <StepOne />;
  }
};

export default RenderSteps;
