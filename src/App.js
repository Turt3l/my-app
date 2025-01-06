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
      "Our relationship has motivated me to do more at work",
      3000,
      "To take on new projects, new clients and build a future for US",
      3000,
      "You make me want to learn new things each day",
      3000,
      "Lets never stop improving for each other",
      3000,
      "And lets make this relationship the best we can make it for each other",
      3000,
      "Lets learn from each other",
      3000,
      "And love each other even more",
      3000,
    ]);
  };

  const handleOptionTwoStage1 = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence(["Yes you do", 3000]);
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
                "Our relatioship keeps pushing us to new levels",
                3000,
                "We change for each other, we improve for each other",
                3000,
                "We learn, adapt and conquer",
                3000,
                "And thats what I like the most about our relationship",
                3000,
                "You motivate me so much to improve myself",
                3000,
                "To become a greater version of myself each day",
                3000,
                "To pick up new things, learn more and do more",
                3000,
                "Want to know some of those things?",
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
          “The whole of life, from the moment you are born to the moment you
          die, is a process of learning.”
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
  color: "blue",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
