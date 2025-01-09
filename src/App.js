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

  const handleFirstMessage = () => {
    setShowButtons(false);
    setStage(2);
    setAnimationSequence([
      "There is nothing better than seeing you smile",
      3000,
      "Knowing that I can bring you happiness makes my heart full",
      3000,
      "Every moment with you feels like a gift",
      3000,
      "Making you happy is what makes me the happiest",
      3000,
      "Your happiness means everything to me",
      3000,
      "I promise to keep doing everything I can to make you feel loved",
      3000,
    ]);
  };

  const handleSurpriseMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "I have a little surprise for you soon",
      3000,
      "Just another way to show you how much joy you bring into my life",
      3000,
      "Because making you happy is the best feeling in the world",
      3000,
    ]);
  };

  const handleDeepFeelingsMessage = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "Every time you smile because of something I did, my heart melts",
      3000,
      "I never knew happiness like this until I saw how happy I could make you",
      3000,
      "Knowing I can bring you even a little bit of joy means everything to me",
      3000,
      "You deserve endless happiness, and I want to be the one who gives it to you",
      3000,
      "Thank you for letting me love you and for making my happiness so simple",
      3000,
    ]);
  };

  const renderButtons = () => {
    if (stage === 0) {
      return (
        <>
          <button onClick={handleFirstMessage} style={buttonStyle}>
            Yes
          </button>
          <button onClick={handleDeepFeelingsMessage} style={buttonStyle}>
            Yes part 2
          </button>
        </>
      );
    } else if (stage === 2) {
      return (
        <>
          <button onClick={handleSurpriseMessage} style={buttonStyle}>
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
                "Making you happy is the best thing in the world",
                3000,
                "Every time you smile, my heart feels lighter",
                3000,
                "There is no better feeling than knowing I bring you happiness",
                3000,
                "I love seeing you happy more than anything else",
                3000,
                "Want to hear more about how much your happy means to me?",
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
          “True happiness is making the one you love happy.”
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
