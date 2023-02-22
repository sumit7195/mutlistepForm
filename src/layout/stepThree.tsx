import React, { useState } from "react";

import { Text, ImageMapping } from "../constants/imageMapping";

import Button from "../Components/Button";

const steps = [
  { stepTitle: "1", title: Text.stepOneTitle, text: Text.stepOne },
  { stepTitle: "2", title: Text.stepTwoTitle, text: Text.stepTwo },
  { stepTitle: "3", title: Text.stepThreeTitle, text: Text.stepThree },
  { stepTitle: "4", title: Text.stepFourTitle, text: Text.stepFour },
];

const stepsThree = [
  {
    id: 1,
    title: Text.onlineService,
    label: Text.onlineServiceTitle,
    price: Text.onlinePrice,
    checked: false,
  },
  {
    id: 2,
    title: Text.largerStorage,
    label: Text.largerStorageTitle,
    price: Text.largerPrice,
    checked: false,
  },
  {
    id: 3,
    title: Text.cusotmiseProfile,
    label: Text.cusotmiseProfileTitle,
    price: Text.customisePrice,
    checked: false,
  },
];

export default function stepThree() {
  const [state, setstate] = useState(stepsThree);

  const handleCheck = (index: number) => {
    const newState = state.map((item) => {
      if (item.id === index + 1) {
        item.checked = !item.checked;
      }

      return item;
    });

    setstate(newState);
  };

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
            <h1>{Text.addOns}</h1>
            <p>{Text.addOnsLabel}</p>
          </div>

          <div className="info">
            {state.map((item, index) => (
              <div
                className={`checkbox-container ${
                  item.checked && "outer-border"
                }`}
              >
                <div className="checked-container">
                  <div>
                    <input
                      type="checkbox"
                      checked={item.checked}
                      key={index}
                      onClick={(event) => handleCheck(index)}
                    />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.label}</p>
                  </div>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="btnContainer">
          <Button btnTitle={Text.back} css="btn-2" />
          <Button btnTitle={Text.back} css="btn" />
        </div>
      </div>
    </div>
  );
}
