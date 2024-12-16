import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24); // November 24, 2024
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(days);
  }, []);

  const handleYesClick = () => {
    setAnimationSequence([
      "Thank you for being together with me",
      4000,
      "I appreciate every single moment I have with you",
      4000,
      "You make me feel loved and cared for each and every day",
      4000,
      "You are the first thing I think about when I wake up",
      4000,
      "And it makes my day a hundred times better",
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
                "You make me smile every day",
                4000,
                "Can I make you smile today?",
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
              <button onClick={handleNoClick} style={buttonStyle}>
                No
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
          "Love isn’t about finding the perfect person, but about seeing an
          imperfect person perfectly."
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
  color: "#f1c57b",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
