import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysTogether(days);
  }, []);

  const handleOptionOne = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Being with you feels like home",
      3000,
      "You make me feel safe, no matter whats going on",
      3000,
      "I can be myself with you, completely",
      3000,
      "Do you know how much that means to me?",
      3000,
      "It means so much to me",
      3000,
      "Any attention that you give to me feels special",
      3000,
      "It feels .... nice",
      3000,
    ]);
  };

  const handleOptionTwo = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Every time you talk about your plans",
      3000,
      "How you will aproach, do them",
      3000,
      "It gives me a lot of inspiration and motivation",
      3000,
      "To do anything, to plan my day out",
      3000,
      "Thank you for setting such a good example",
      3000,
      "Even though it gets hard sometimes",
      3000,
      "Im here for you, and thats all that matters",
    ]);
  };

  const handleOptionThree = () => {
    setShowButtons(false);
    setAnimationSequence([
      "You do not know how grateful I am to have you",
      3000,
      "You simply CANNOT imagine",
      3000,
      "Every waking hour I feel grateful and happy that I can talk to you",
      3000,
      "And spend time with you",
      3000,
      "I see you in my dreams",
      3000,
      "My future",
      3000,
      "Because the future with you holds a lot",
      3000,
      "And I cannot wait",
      3000,
      "To experience it all",
      3000,
      "With you",
    ]);
  };

  const renderButtons = () => {
    return (
      <>
        <button onClick={handleOptionOne} style={buttonStyle}>
          Cared for
        </button>
        <button onClick={handleOptionTwo} style={buttonStyle}>
          Inspirated
        </button>
        <button onClick={handleOptionThree} style={buttonStyle}>
          Grateful
        </button>
      </>
    );
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
                "Each passing day with you is a blessing for me",
                3000,
                "First thing I think about when I wake up is you",
                3000,
                "I want you to be by my side all the time",
                3000,
                "How do you think I feel when I spend time with you?",
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
          “Thank you for giving me your most important asset - your time”
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

const buttonStyle1 = {
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
