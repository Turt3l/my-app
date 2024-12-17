import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(days);
  }, []);

  const handleYesClick = () => {
    setAnimationSequence([
      "Because every day I spend with you is perfect",
      4000,
      "Every day you prove me right that I made the best choice",
      4000,
      "by being together with you",
      4000,
      "And I appreciate your presence so much",
      4000,
      "that words even cant describe it.",
      4000,
    ]);
    setShowButtons(false);
  };

  const handleNoClick = () => {
    setAnimationSequence([
      "Wrong answer",
      4000,
      "You make me smile every day",
      4000,
      "Can I make you smile today?",
      4000,
      () => {
        setShowButtons(true);
        setAnimationSequence(null);
      },
    ]);
    setShowButtons(false);
  };

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <div className="content-wrapper">
        <header className="App-header">
          <div className="days-counter">
            Days since we are together: {daysSince}
          </div>
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "Do you think its possible to have a perfect day?",
                4000,
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
          {showButtons && !animationSequence && (
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleYesClick} style={buttonStyle}>
                Yes
              </button>
            </div>
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
          "True love isn't about perfection; it's about embracing someones flaws
          as beautifully as their strengths."
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
  background: "#fff",
  color: "#3b8cc4",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
