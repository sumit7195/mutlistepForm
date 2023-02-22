import { Text, ImageMapping } from "../constants/imageMapping";

import LabelWrapper from "../Components/LabelWrapper";
import SimpleInput from "../Components/SimpleInput";
import Button from "../Components/Button";

const stepTwo = [
  {
    label: Text.arcade,
    monthly: Text.arcadeMonthly,
    yearly: Text.arcadeYearly,
    img: ImageMapping.iconArcade,
  },
  {
    label: Text.advanced,
    monthly: Text.advanceMonthly,
    yearly: Text.advanceYearly,
    img: ImageMapping.iconAdvanced,
  },
  {
    label: Text.pro,
    monthly: Text.proMonthly,
    yearly: Text.proYearly,
    img: ImageMapping.iconPro,
  },
];

const steps = [
  { stepTitle: "1", title: Text.stepOneTitle, text: Text.stepOne },
  { stepTitle: "2", title: Text.stepTwoTitle, text: Text.stepTwo },
  { stepTitle: "3", title: Text.stepThreeTitle, text: Text.stepThree },
  { stepTitle: "4", title: Text.stepFourTitle, text: Text.stepFour },
];

type AppProps = {
  incrementStep: React.MouseEventHandler<HTMLButtonElement>;
  decrementStep: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ({ incrementStep, decrementStep }: AppProps) {
  return (
    <div className="flex">
      <div style={{ position: "relative" }}>
        <img src={ImageMapping.sideBarDesktop} />
      </div>

      <div className="rel" style={{ position: "absolute" }}>
        <div className="steps">
          {steps.map((item) => (
            <div className="innerStep">
              <div className="circle">
                <p>{item.stepTitle}</p>
              </div>
              <div className="innterStepTitle">
                <p className="stepTitle">{item.title}</p>
                <p className="bold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="personal">
          <div>
            <h1>{Text.selectPlan}</h1>
            <p>{Text.monthyPlan}</p>
          </div>

          <div className="arcade">
            {stepTwo.map((item) => (
              <div className="arcadeDiv">
                <input type="checkbox" id={item.label} />

                <label className="checkbox-alias" htmlFor={item.label}>
                  <div>
                    <img src={item.img} alt={item.label} />
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <p>{item.monthly}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="switchParentContainer">
          <div className="switchContainer">
            <div>
              <p>{Text.monthly}</p>
            </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div>
              <p>{Text.yearly}</p>
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <Button btnTitle={Text.back} css="btn-2" decrement={decrementStep} />
          <Button btnTitle={Text.next} css="btn" increment={incrementStep} />
        </div>
      </div>
    </div>
  );
}
