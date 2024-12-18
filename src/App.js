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
      "I re-appeared in your life so suddenly",
      3000,
      "But yet, it seems like it was meant for us to be together",
      3000,
      "Re-appearing in your life was probably one of my best life choices ever",
      3000,
      "Do you want to hear what motivated me to re-appear in your life?",
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
      "Your care about me made me realise how valuable you really are.",
      3000,
      "The world would be a much different place if it wasnt for you.",
      3000,
      "You care for everyone, and I want to be the person which makes you feel cared for.",
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
          <button onClick={handleNoClick} style={buttonStyle}>
            No
          </button>
        </>
      );
    }

    if (storyStage === 1) {
      return (
        <>
          <button onClick={handleTellHer} style={buttonStyle}>
            Your care
          </button>
          <button onClick={handleHoldHand} style={buttonStyle}>
            Your love
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
                "Do you want to hear my story, why I re-appeared in your life?",
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
          "Love shines brighter through understanding than it ever could through
          perfection."
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
  color: "#a3c94e",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
