import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysTogether, setDaysTogether] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysTogether(days);
  }, []);

  const handleBackToOptions = () => {
    setShowButtons(true);
    setAnimationSequence(null);
    setStage(0);
  };

  const handleMakeDayMessage = () => {
    setShowButtons(false);
    setStage(2);
    setAnimationSequence([
      "You are perfect in my eyes",
      3000,
      "Your smile",
      3000,
      "Says a thousand words",
      3000,
      "The comfort you give",
      3000,
      "Takes away all my worries from my whole day",
      3000,
      "I would do anything to make you smile",
      3000,
      "Because I will always smile back and be happy again",
      3000,
      "Lets be each others forever",
      3000,
      "Lets never leave the warmth of our hugs",
      3000,
      "Not now, not ever",
      3000,
      "My most wonderful wifey on this entire planet <3",
      () => handleBackToOptions(),
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "Wrong answer bruh",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const renderButtons = () => {
    return showButtons ? (
      <>
        <button onClick={handleMakeDayMessage} style={buttonStyle}>
          I agree
        </button>
        <button onClick={handleBrightenMessage} style={buttonStyle}>
          I disagree
        </button>
      </>
    ) : null;
  };

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <div className="content-wrapper">
        <header className="App-header">
          <div className="days-counter">
            Days we havent been married yet: {daysTogether}
          </div>
          {!animationSequence && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "Thank you for being the person that you are",
                3000,
                "Everyone and me included can learn a lot from you",
                3000,
                "Your honesty",
                3000,
                "Your way of loving",
                3000,
                "Your way of thinking",
                3000,
                "All of those things are something that makes you yourself, and no one can take that away from you",
                3000,
                "Everyone should take you an example",
                3000,
                "Because you are the most wonderful human being to walk on this planet",
                3000,
                () => setShowButtons(true),
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
              }}
            />
          )}

          {animationSequence && (
            <div style={{ marginTop: "20px" }}>
              <TypeAnimation
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                }}
              />
            </div>
          )}
        </header>
        <div className="quote">
          “I swear I couldn’t love you more than I do right now, and yet I know
          I will tomorrow”
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: "5px",
  padding: "15px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  background: "white",
  color: "#a1c4fd",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
