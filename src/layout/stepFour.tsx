import React from "react";
import { Text, ImageMapping } from "../constants/imageMapping";

import Button from "../Components/Button";

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

export default function stepFour({ incrementStep, decrementStep }: AppProps) {
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
            <h1>{Text.finishingUp}</h1>
            <p>{Text.finishTitle}</p>
          </div>

          <div className="info">
            <div className="parent-Arcade">
              <div>
                <p>Arcade(Monthly)</p>
                <div className="change">
                  <p className="underline">change</p>
                  <p>$9/mo</p>
                </div>
              </div>
              <hr />
              <div className="service">
                <p>Online Service</p>
                <p>+$1/mo</p>
              </div>
              <div className="service">
                <p>Larger Storage</p>
                <p>+$2/mo</p>
              </div>
            </div>
            <div className="service">
              <p>Total(per month)</p>
              <p>+$12/mo</p>
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <Button btnTitle={Text.back} css="btn-2"  />
          <Button btnTitle={Text.back} css="btn" />
        </div>
      </div>
    </div>
  );
}
