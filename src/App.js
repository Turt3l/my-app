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
      "You have been my greatest love, my best friend, my everything",
      3000,
      "Every moment with you feels like a beautiful dream I never want to wake up from",
      3000,
      "You bring joy, warmth, and meaning into my life in ways I never imagined",
      3000,
      "I want to spend every sunrise and sunset by your side, sharing our dreams and laughter",
      3000,
      "You are my forever, my always, my one and only",
      3000,
      "I promise to love you endlessly, cherish you always, and stand by you through every chapter of our story",
      3000,
      "With you, every day is a blessing, every moment is precious",
      3000,
      "I choose you today, tomorrow, and for the rest of my life",
      3000,
      "Forever and always, my love",
    ]);
  };

  const handleOptionTwoStage1 = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "The fuck you mean no :D",
      3000,
      "Yes",
      3000,
      "The correct answer is yes",
      3000,
    ]);
    setShowButtons(true);
  };

  const renderButtons = () => {
    if (stage === 0) {
      return (
        <>
          <button onClick={handleOptionOneStage1} style={buttonStyle}>
            Yes
          </button>
          <button onClick={handleOptionTwoStage1} style={buttonStyle}>
            No
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
            Days we’ve been together: {daysTogether}
          </div>
          {!animationSequence && showButtons && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "The time we spent apart",
                3000,
                "Made me realise how much I love you",
                3000,
                "How much I want to sacrifice for you",
                3000,
                "And to do anything to be there with you",
                3000,
                "I love you so much",
                3000,
                "Dont let anyone change the person that you are",
                3000,
                "Because you are absolutely amazing just the way you are",
                3000,
                "And I dont want you to change...... well maybe stop overthinking so much",
                3000,
                "Because everything will be alright",
                3000,
                "Let me make you feel appreciated",
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
          “You can't blame gravity for falling in love.”
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
  color: "red",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
