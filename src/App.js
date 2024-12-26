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
      "I miss you so much, even when we’re apart for just a moment.",
      3000,
      "Time without you feels incomplete and far too long.",
      3000,
      "I can’t wait to spend more time with you and make new memories.",
      3000,
    ]);
  };

  const handleOptionTwoStage1 = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "I think about you constantly, wishing we had more time together.",
      3000,
      "Every second we spend apart feels like an eternity.",
      3000,
      "You’re always in my thoughts, and I can’t wait to see you again.",
      3000,
    ]);
  };

  const handleOptionOneStage2 = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "I cherish every moment we’ve shared, but I crave more time with you.",
      3000,
      "You are my safe space, and I feel lost without you by my side.",
      3000,
      "I miss your touch, your smile, and your laughter.",
      3000,
    ]);
  };

  const handleOptionTwoStage2 = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "The days apart feel longer than they should.",
      3000,
      "I long for the moments we can just be together without interruptions.",
      3000,
      "You’re always on my mind, and I can’t wait to be close to you again.",
      3000,
    ]);
  };

  const handleOptionOneStage3 = () => {
    setShowButtons(false);
    setAnimationSequence([
      "I miss the warmth of your presence and the comfort you bring.",
      3000,
      "Being apart makes me realize just how much I need you in my life.",
      3000,
      "I can’t wait for the next time I get to hold you close.",
      3000,
    ]);
  };

  const handleOptionTwoStage3 = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Every moment spent away from you reminds me of how much I love you.",
      3000,
      "I miss you more than words can express, and I can’t wait to see you again.",
      3000,
      "You complete me, and being apart feels so wrong.",
      3000,
    ]);
  };

  const renderButtons = () => {
    if (stage === 0) {
      return (
        <>
          <button onClick={handleOptionOneStage1} style={buttonStyle}>
            I Miss You So Much
          </button>
          <button onClick={handleOptionTwoStage1} style={buttonStyle}>
            I Wish We Had More Time Together
          </button>
        </>
      );
    } else if (stage === 2) {
      return (
        <>
          <button onClick={handleOptionOneStage2} style={buttonStyle}>
            I Crave More Moments With You
          </button>
          <button onClick={handleOptionTwoStage2} style={buttonStyle}>
            I Long for Our Time Together
          </button>
        </>
      );
    } else if (stage === 3) {
      return (
        <>
          <button onClick={handleOptionOneStage3} style={buttonStyle}>
            I Miss Your Presence So Much
          </button>
          <button onClick={handleOptionTwoStage3} style={buttonStyle}>
            I Can’t Wait to See You Again
          </button>
        </>
      );
    } else if (stage === 4) {
      return (
        <>
          <button onClick={() => setStage(0)} style={buttonStyle}>
            Let’s Make More Memories Together
          </button>
          <button onClick={() => setStage(0)} style={buttonStyle}>
            You’re Always in My Heart
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
                "I miss you more than words can say.",
                3000,
                "Being apart from you feels so empty.",
                3000,
                "I can’t wait to spend more time with you.",
                3000,
                "The reason why is: ",
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
          “Distance means so little when someone means so much.”
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
