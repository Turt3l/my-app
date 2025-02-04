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
      "Every emotion of yours is absolutely beautiful",
      3000,
      "Its honest, its you, and thats all that matters",
      3000,
      "I love you for every emotion that you have",
      3000,
      "And I want to be there with you each day",
      3000,
      "For every emotion",
      3000,
      "Happy or sad",
      3000,
      "I want to be there with you each day through all of them",
      3000,
      "Because thats what makes you - you",
      3000,
      "Your emotions!",
      3000,
      "Es tevi ļoti mīlu, Majda!",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "The way how you express your emotions",
      3000,
      "Your thoughts",
      3000,
      "Is truly magical, because thats what makes you yourself",
      3000,
      "You express everything in an incredibly intelligent and understandable way",
      3000,
      "It makes me want to listen to every expression that you have",
      3000,
      "It makes me want to listen to it closely",
      3000,
      "Because each one of those expressions make you Majda",
      3000,
      "My Majda",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const renderButtons = () => {
    return showButtons ? (
      <>
        <button onClick={handleMakeDayMessage} style={buttonStyle}>
          Your emotions
        </button>
        <button onClick={handleBrightenMessage} style={buttonStyle}>
          Your expressions
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
            Days we have been together: {daysTogether}
          </div>
          {!animationSequence && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "It brings me such happiness to see how good our relationship is",
                3000,
                "I want you to know that every word you say",
                3000,
                "Every compliment you say",
                3000,
                "Every opinion you express",
                3000,
                "Matters to me a lot",
                3000,
                "Infinately times more than faking it",
                3000,
                "I want you to be yourself with me",
                3000,
                "Because thats what I love you for - for being yourself",
                3000,
                "I love everything about you...",
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
          “I love you just for who you are, you are my Majda”
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
  color: "#ff9a9e",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
