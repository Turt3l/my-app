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
      "Every single morning",
      3000,
      "Felt like a dream I had dreamed many times in my head",
      3000,
      "Waking up next to you looked amazing",
      3000,
      "But it was better than I had ever imagined",
      3000,
      "Waking up next to you",
      3000,
      "Looking at you, seeing you right next to me",
      3000,
      "Seeing the most beautiful thing right next to you is a feeling like no other",
      3000,
      "Waking you up, seeing your beautiful eyes awakening",
      3000,
      "And looking at me",
      3000,
      "Its an amazing feeling I could never describe in words",
      3000,
      "Volim te najviše",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "I always had one goal in mind:",
      3000,
      "Making you smile as much as possible",
      3000,
      "Your smile feels magical",
      3000,
      "It doesnt feel forced, or faked",
      3000,
      "Making you smile means the world to me",
      3000,
      "Every time you smiled I could see your eyes light up",
      3000,
      "You were genuenly happy",
      3000,
      "And thats all that ever matters and will matter to me",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const handleCompleteMessage = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "Every thing I bought for you",
      3000,
      "Every thing I got for you",
      3000,
      "I never thought about it twice",
      3000,
      "If I saw you looking at it",
      3000,
      "Id want to get it for you",
      3000,
      "Because I knew it would make you happy",
      3000,
      "Money for me holds zero value, if it can do something that makes you happy",
      3000,
      "I have and never will look back at any purchase I made for you",
      3000,
      "Because I am incredibly happy to have a chance to give you something",
      3000,
      "Because I am happy to make you happy",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const renderButtons = () => {
    return showButtons ? (
      <>
        <button onClick={handleMakeDayMessage} style={buttonStyle}>
          Waking up next to you
        </button>
        <button onClick={handleBrightenMessage} style={buttonStyle}>
          Seeing you smile
        </button>
        <button onClick={handleCompleteMessage} style={buttonStyle}>
          Treating you well
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
                "Every day we were together",
                3000,
                "I felt so incredibly cared for",
                3000,
                "Everything you did didnt go unnoticed",
                3000,
                "The way you waited for me at home",
                3000,
                "The way you came and kissed me",
                3000,
                "Hugged me",
                3000,
                "It meant to the world to me",
                3000,
                "I felt at peace",
                3000,
                "What meant to me the most was...",
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
          “With you, every moment feels like a beautiful dream I never want to
          wake up from”
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
  color: "#a6c1ee",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
