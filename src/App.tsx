import React, { useState } from "react";
import StepFour from "./layout/stepFour";

import "./style/index.css";
import RenderSteps from "./Components/RenderSteps";

function App() {
  const [step, setStep] = useState(0);

  const incrementStep = () => {
    setStep(step + 1);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="App">
      <RenderSteps
        step={step}
        incrementStep={incrementStep}
        decrementStep={decrementStep}
      />
    </div>
  );
}

export default App;
