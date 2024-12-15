import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(days);
  }, []);

  const handleYesClick = () => {
    setAnimationSequence([
      "You’ve made me the happiest person on this planet",
      4000,
      "Thank you for trusting me, talking to me, and sharing your secrets with me",
      4000,
      "I promise to make every moment special for you, and I’ll always be here for you.",
      4000,
      "And dont hesitate to reach out for help",
      4000,
      "Because I am here for you",
    ]);
  };

  const handleNoClick = () => {
    setAnimationSequence([
      "I’ll take that as a yes",
      4000,
      "Thank you for being such a kind, caring, and loving person",
      4000,
      "No one can take that from you; you are extremely special",
      4000,
      "You are amazing at everything you do.",
      4000,
      "And I mean it",
      4000,
      "Literally",
    ]);
  };

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <div className="content-wrapper">
        <header className="App-header">
          <div className="days-counter">
            Days since we are together: {daysSince}
          </div>
          {!animationSequence && (
            <TypeAnimation
              sequence={[
                "I love you so much",
                4000,
                "Please give me a chance to show my love to you <3",
                4000,
                () => {
                  setShowButtons(true);
                },
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
              }}
            />
          )}
          {showButtons && !animationSequence && (
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleYesClick} style={buttonStyle}>
                Yes
              </button>
              <button onClick={handleNoClick} style={buttonStyle}>
                No
              </button>
            </div>
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
          "Love should be expressed not by words, but by actions"
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
  background: "linear-gradient(90deg, #ff7eb3, #ff758c)",
  color: "#fff",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
