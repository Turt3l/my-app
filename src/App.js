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
      "Your smile lights up my world in a way nothing else can",
      3000,
      "Every moment with you feels like a beautiful dream come true",
      3000,
      "You are the reason I believe in magic",
      3000,
    ]);
  };

  const handleOptionTwoStage1 = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "Your strength and resilience inspire me every single day",
      3000,
      "The way you chase your dreams fills me with admiration",
      3000,
      "You motivate me to be the best version of myself",
      3000,
    ]);
  };

  const handleOptionOneStage2 = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "Being with you makes everything feel right.",
      3000,
      "You are my heart's home, and I’m grateful for every day.",
      3000,
      "Together, we’re unstoppable.",
      3000,
    ]);
  };

  const handleOptionTwoStage2 = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "You give me the strength to face anything that comes our way.",
      3000,
      "Every moment with you is an adventure I never want to end.",
      3000,
      "I am blessed to have you by my side through everything.",
      3000,
    ]);
  };

  const handleOptionOneStage3 = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Your love makes me feel complete and cherished.",
      3000,
      "Every day with you is a new memory to hold close to my heart.",
      3000,
      "I feel so lucky to share this journey of life with you.",
      3000,
    ]);
  };

  const handleOptionTwoStage3 = () => {
    setShowButtons(false);
    setAnimationSequence([
      "With you, I am the best version of myself.",
      3000,
      "You are my greatest supporter, and I will always support you.",
      3000,
      "We make the perfect team, and I can’t wait to see what we achieve together.",
      3000,
    ]);
  };

  const renderButtons = () => {
    if (stage === 0) {
      return (
        <>
          <button onClick={handleOptionOneStage1} style={buttonStyle}>
            You Make My Heart Melt
          </button>
          <button onClick={handleOptionTwoStage1} style={buttonStyle}>
            You show an incredible example
          </button>
        </>
      );
    } else if (stage === 2) {
      return (
        <>
          <button onClick={handleOptionOneStage2} style={buttonStyle}>
            You Make Me Feel Like a Treasure
          </button>
          <button onClick={handleOptionTwoStage2} style={buttonStyle}>
            You Give Me the Strength to Soar
          </button>
        </>
      );
    } else if (stage === 3) {
      return (
        <>
          <button onClick={handleOptionOneStage3} style={buttonStyle}>
            Every Moment With You Is Pure Joy
          </button>
          <button onClick={handleOptionTwoStage3} style={buttonStyle}>
            You Inspire Me to Achieve Great Things
          </button>
        </>
      );
    } else if (stage === 4) {
      return (
        <>
          <button onClick={() => setStage(0)} style={buttonStyle}>
            Let’s Keep Making Memories
          </button>
          <button onClick={() => setStage(0)} style={buttonStyle}>
            You Complete My World
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
                "Every day with you is a new blessing.",
                3000,
                "You make life more beautiful just by being in it.",
                3000,
                "You motivate me to change and improve myself every day",
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
          “Love isn’t just something you feel, it’s something you do.”
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
