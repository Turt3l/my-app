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

  const handleMakeDayMessage = () => {
    setShowButtons(false);
    setStage(2);
    setAnimationSequence([
      "You always say that, but I dont think you realize how much",
      3000,
      "Its the little things you do",
      3000,
      "The way you talk, the way you laugh, the way you care",
      3000,
      "You make even the worst days feel lighter",
      3000,
    ]);
    setShowButtons(true);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "You are the best part of my day, every single time",
      3000,
      "Even when Im stressed, tired, or frustrated",
      3000,
      "Just knowing youre there makes everything better",
      3000,
    ]);
  };

  const handleCompleteMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "You are the reason my days feel full",
      3000,
      "You are my calm, my happiness, my everything",
      3000,
      "And I wouldnt change a single thing about it",
      3000,
    ]);
  };

  const renderButtons = () => {
    if (stage === 0) {
      return (
        <>
          <button onClick={handleMakeDayMessage} style={buttonStyle}>
            You Make My Day
          </button>
          <button onClick={handleBrightenMessage} style={buttonStyle}>
            You Brighten My Day
          </button>
          <button onClick={handleCompleteMessage} style={buttonStyle}>
            You Complete My Day
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
                "Every day with you is different",
                3000,
                "Some days are easy, some are hard",
                3000,
                "But no matter what, you make them better",
                3000,
                "Your voice, your words, your presence",
                3000,
                "They turn even the worst days into something good",
                3000,
                "You are my calm, my light, my reason to smile",
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
          “You make every day worth it. I wouldnt trade a single one.”
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
  color: "yellow",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
