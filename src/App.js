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

  const handleMostMessage = () => {
    setShowButtons(false);
    setStage(2);
    setAnimationSequence([
      "No, wrong answer",
      3000,
      "I know you love me more",
      3000,
    ]);
    setShowButtons(true);
  };

  const handleMostestMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence(["Come on, I know you love me more", 3000]);
  };

  const handleUttermostestMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "I love you the uttermostest aswell",
      3000,
      "My love for you is so big, its incredible (you know what else is big?)",
      3000,
      "I have loved you since the day we started talking",
      3000,
      "And it has been growing ever since",
      3000,
    ]);
  };

  const renderButtons = () => {
    if (stage === 0) {
      return (
        <>
          <button onClick={handleMostMessage} style={buttonStyle}>
            Most
          </button>
          <button onClick={handleMostestMessage} style={buttonStyle}>
            Mostest
          </button>
          <button onClick={handleUttermostestMessage} style={buttonStyle}>
            Uttermostest
          </button>
        </>
      );
    }
  };

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <div className="content-wrapper">
        <header className="App-header">
          <div className="days-counter">
            Days we have been together: {daysTogether}
          </div>
          {!animationSequence && showButtons && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "I love you",
                3000,
                "I love you so much",
                3000,
                "I love you the mostest",
                3000,
                "I love you the uttermostest",
                3000,
                "How much do you love me?",
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
          “I LOVE YOU MAJDAAAAAAAAAAAAAAAAAAAAAAAAAAA.”
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
  color: "#ff5e62",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
