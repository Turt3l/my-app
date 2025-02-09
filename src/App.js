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
      "The way your eyes shine brighter",
      3000,
      "The way your laughter feels more free",
      3000,
      "Youre not hiding anymore",
      3000,
      "Youre finally being yourself again",
      3000,
      "And thats the most beautiful thing I could ever witness",
      3000,
      "You were never meant to fit into anyone elses expectations",
      3000,
      "You were always meant to be you and only yourself",
      3000,
      "And I love you for exactly that",
      3000,
      "I will always be here, reminding you that who you are is more than enough",
      3000,
      "Because seeing you be yoursel is the greatest gift I could ever receive",
      3000,
      "Es tevi ļoti mīlu, Majda",
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
          Tell me more
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
                "I am incredibly happy to hear that I make you feel happier",
                3000,
                "That I make you feel safe",
                3000,
                "That I make you be yourself again",
                3000,
                "I truly want to give everything for you to be yourself",
                3000,
                "Because that is truly what makes you beautiful",
                3000,
                "No money can buy the happiness that I have when I see you smile",
                3000,
                "I want you to be yourself",
                3000,
                "And no one else can replace that happiness I get from making you be yourself again...",
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
        <div className="quote">“Es tevi ļoti ļoti ļoti ļoti ļoti mīlu”</div>
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
  color: "#e0c3fc",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
