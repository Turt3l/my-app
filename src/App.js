import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysTogether(days);
  }, []);

  const handleOptionOne = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Your love makes everything better.",
      3000,
      "Its a constant source of warmth and joy in my life.",
      3000,
      "You give so much of it away each day",
      3000,
      "Is it possible for me to even give it back?",
    ]);
  };

  const handleOptionTwo = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Your care makes me feel seen and appreciated every day.",
      3000,
      "I am endlessly grateful for how you nurture everything around you.",
      3000,
      "I can feel safe around you, I can talk about my feelings with you",
      3000,
      "And you actually listen, which matters a lot",
      3000,
      "Thank you",
      3000,
    ]);
  };

  const renderButtons = () => {
    return (
      <>
        <button onClick={handleOptionOne} style={buttonStyle1}>
          Your Love
        </button>
        <button onClick={handleOptionTwo} style={buttonStyle1}>
          Your Care
        </button>
      </>
    );
  };

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <div className="content-wrapper">
        <header className="App-header">
          <div className="days-counter">
            Days we’ve been together: {daysTogether}
          </div>
          {!animationSequence && showButtons && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "What do I admire most about you?",
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
          “Your light makes the world a brighter place.”
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
  background: "#ff5757",
  color: "white",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

const buttonStyle1 = {
  margin: "5px",
  padding: "15px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  background: "white",
  color: "black",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
