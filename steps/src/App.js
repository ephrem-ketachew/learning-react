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
    curStep > 1 && setStep((s) => s - 1);
  }

  function handleNext() {
    curStep < 3 && setStep((s) => s + 1);
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

          <StepMessage step={curStep}>{messages[curStep - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" handleFun={handlePrevious}>
              👈 Previous
            </Button>

            <Button bgColor="#7950f2" color="#fff" handleFun={handleNext}>
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, color, handleFun, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={handleFun}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step}: {children}
    </div>
  );
}
