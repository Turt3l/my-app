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

  const handleOptionOneStage1 = () => {
    setShowButtons(false);
    setStage(2);
    setAnimationSequence([
      "Have I told you today how absolutely stunning you look",
      3000,
      "Your smile is the most beautiful thing I have ever seen",
      3000,
      "Every time I see you, I fall in love all over again",
      3000,
      "You are effortlessly gorgeous, inside and out",
      3000,
      "You make my world brighter just by being in it",
      3000,
      "I cannot wait to see you and remind you in person",
      3000,
    ]);
  };

  const handleSurpriseButton = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "I have something special planned for us soon",
      3000,
      "Just another way to show you how amazing you are",
      3000,
      "You deserve to be appreciated every single day",
      3000,
    ]);
  };

  const renderButtons = () => {
    if (stage === 0 || stage === 3) {
      return (
        <>
          <button onClick={handleOptionOneStage1} style={buttonStyle}>
            Tell me more
          </button>
        </>
      );
    } else if (stage === 3) {
      return (
        <>
          <button onClick={handleSurpriseButton} style={buttonStyle}>
            What is the surprise
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
                "You always take my breath away",
                3000,
                "You are the definition of beauty, elegance, and grace",
                3000,
                "Every time I see you, I cannot help but smile",
                3000,
                "You make every moment magical just by being you",
                3000,
                "Want to hear more about how amazing you are",
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
          “You are beautiful, not just because of how you look, but because of
          who you are.”
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
  color: "black",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
