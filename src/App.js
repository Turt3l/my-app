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
      "I notice every single thing you do",
      3000,
      "Thank you so much for putting in the effort that you do",
      3000,
      "Thank you for existing and being the person that you are",
      3000,
      "The world would be a much worse place without you",
      3000,
      "You do a lot for people, you make their days",
      3000,
      "And I want to give that back to you",
      3000,
      "I want to see you happy",
      3000,
      "I want to see you smile",
      3000,
      "Thats the biggest gift I could ever receive",
      3000,
      "Thank you for everything you have done and continue doing",
      3000,
      "You make this world bearable to live in <3",
      () => handleBackToOptions(),
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "Thats just the wrong answer tho, think again",
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
                "Thank you for the effort you put in",
                3000,
                "Thank you for the love that you show",
                3000,
                "Thank you for being the person that you are",
                3000,
                "Meeting you will truly be a life changing experience",
                3000,
                "I never knew how it was to be loved",
                3000,
                "Until my Majda appeared in my life",
                3000,
                "And everything quickly made sense",
                3000,
                "We were meant to be...",
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
          “Romance is the glamour which turns the dust of everyday life into a
          golden haze.”
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
  color: "#5cf8be",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
