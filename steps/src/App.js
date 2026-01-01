import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [curStep, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    curStep > 1 && setStep(curStep - 1);
  }

  function handleNext() {
    curStep < 3 && setStep(curStep + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={curStep >= 1 && "active"}>1</div>
            <div className={curStep >= 2 && "active"}>2</div>
            <div className={curStep >= 3 && "active"}>3</div>
          </div>

          <div className="message">
            Step {curStep}: {messages[curStep - 1]}
          </div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
