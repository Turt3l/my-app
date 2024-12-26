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
      "It feels absolutely amazing to have you after all those years",
      3000,
      "Those years shaped us into the people we are today",
      3000,
      "We were made absolutely perfect for each other",
      3000,
      "And we are meant to stay together for the rest of our lives",
      3000,
      "I will be the happiest man to call you my wife",
      3000,
      "I want to wake up besides you each day",
      3000,
      "I want you to be the first thing I see in the morning",
      3000,
      "That would be an never ending dream",
      3000,
      "And I would never want to wake up from it",
      3000,
      "Never",
    ]);
  };

  const handleOptionTwoStage1 = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence(["What", 3000, "Wrong answer", 3000, "Bruh", 3000]);
    setShowButtons(true);
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
            Yes it does
          </button>
          <button onClick={handleOptionTwoStage1} style={buttonStyle}>
            No it doesnt
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
                "Every day I think about you",
                3000,
                "About where you are and what you are doing",
                3000,
                "I want to know everything and I am nothing without you",
                3000,
                "You make me feel like everything when you are around",
                3000,
                "The multiple years we spent apart is the reason we are together today",
                3000,
                "In all those years, we were shaped into the perfect for each other",
                3000,
                "I appreciate every moment I have with you, and I am always here for you Majda",
                3000,
                "You are my world",
                3000,
                "Doesnt it feel amazing how everything led us here?",
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
          “I LOVE YOU SO FUCKING MUCH MAJDA HOLY SHIT”
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
