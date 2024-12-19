import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysSince, setDaysSince] = useState(0);
  const [storyStage, setStoryStage] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(days);
  }, []);

  const handleYesClick = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Today went extremely well",
      3000,
      "I did everything I had planned to do",
      3000,
      "But there was something missing...",
      3000,
      "Can you guess what it was?",
      3000,
      () => {
        setStoryStage(1);
        setAnimationSequence(null);
        setShowButtons(true);
      },
    ]);
  };

  const handleNoClick = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Its alright if you dont",
      3000,
      "But I want you to know that I tought only about the good when I decided to text you",
      3000,
      "Because there was nothing bad about you...",
      3000,
      "Not a single thing",
      3000,
    ]);
  };

  const handleTellHer = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Today had only one thing missing, and it was YOU.",
      3000,
      "The truth is, I appreciate that we spend all of our free time with each other.",
      3000,
      "I appreciate you being there for me, talking with me",
      3000,
      "I appreciate your presence and everything you do for me.",
      3000,
      "Thank you for being you",
      3000,
    ]);
  };

  const handleHoldHand = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Your love is unmeasurable",
      3000,
      "I can feel it every day, it shines right trough you.",
      3000,
      "I want to give you back the same and more (is that even physically possible?).",
    ]);
  };

  const renderButtons = () => {
    if (storyStage === 0) {
      return (
        <>
          <button onClick={handleYesClick} style={buttonStyle}>
            Yes
          </button>
          <button onClick={handleYesClick} style={buttonStyle1}>
            Yes but in a different color
          </button>
        </>
      );
    }

    if (storyStage === 1) {
      return (
        <>
          <button onClick={handleTellHer} style={buttonStyle}>
            You
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
            Days since we are together: {daysSince}
          </div>
          {!animationSequence && showButtons && renderButtons()}
          {!animationSequence && !showButtons && storyStage === 0 && (
            <TypeAnimation
              sequence={[
                "Do you want to hear how my day went?",
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
          “Loved you yesterday, love you still, always have, always will.”
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
  color: "red",
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
  background: "black",
  color: "white",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
