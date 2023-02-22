import { Text, ImageMapping } from "../constants/imageMapping";

import LabelWrapper from "../Components/LabelWrapper";
import SimpleInput from "../Components/SimpleInput";
import Button from "../Components/Button";

const stepOne = [
  { label: Text.name, input: Text.namePlaceHolder },
  {
    label: Text.emailAddress,
    input: Text.emailPlaceHolder,
  },
  {
    label: Text.phone,
    input: Text.phonePlaceHolder,
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

export default function ({ incrementStep }: AppProps) {
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
            <h1>{Text.personalInfo}</h1>
            <p>{Text.enterDetail}</p>
          </div>

          <div className="info">
            {stepOne.map((item) => (
              <div>
                <LabelWrapper
                  labelTitle={item.label}
                  Children={<SimpleInput inputTitle={item.input} />}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Button btnTitle={Text.next} css="btn" increment={incrementStep} />
        </div>
      </div>
    </div>
  );
}
