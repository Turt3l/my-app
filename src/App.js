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
      "I remember how I walked you to the car",
      3000,
      "And gave you flowers",
      3000,
      "The reason they were yellow was because",
      3000,
      "Yellow flowers mean happiness",
      3000,
      "And oh god was I happy",
      3000,
      "The way we stared at each other while holding hands",
      3000,
      "Me trying to explain and tell you more about the city",
      3000,
      "The reason why I didnt know anything was because I was lost in your eyes",
      3000,
      "You looked so good, you looked so perfect",
      3000,
      "Not a single sentence could come out of my mouth",
      3000,
      "Because I was absolutely astonished at how perfect you are.",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "I remember opening the gate for you",
      3000,
      "Walking up the hill and holding your hand",
      3000,
      "It felt surreal",
      3000,
      "The weather was perfect, the sun was shining",
      3000,
      "The moment when we walked to the view of the lake",
      3000,
      "And we kissed a lot",
      3000,
      "Everything felt magical at that moment",
      3000,
      "The feeling of your lips touching mine",
      3000,
      "As the sun was shining down on us",
      3000,
      "It felt like a blessing, like a dream",
      3000,
      "Its a moment id want to relive forever",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const handleCompleteMessage = () => {
    setShowButtons(false);
    setStage(4);
    setAnimationSequence([
      "Something felt dreamy about the moment I showed you my room",
      3000,
      "We video call each other each day, and its the room I am in all the time",
      3000,
      "But now you arent behind a screen",
      3000,
      "You are here, with me",
      3000,
      "In the very room where the dream of meeting you was born",
      3000,
      "It felt surreal you sitting in my chair, and me kissing you",
      3000,
      "It felt surreal showing you my room",
      3000,
      "Everything about it felt surreal",
      3000,
      "That you were here, in my very room",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const renderButtons = () => {
    return showButtons ? (
      <>
        <button onClick={handleMakeDayMessage} style={buttonStyle}>
          The drive from the airport
        </button>
        <button onClick={handleBrightenMessage} style={buttonStyle}>
          The hill
        </button>
        <button onClick={handleCompleteMessage} style={buttonStyle}>
          You in my room
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
                "The day I got to meet you",
                3000,
                "Hug you",
                3000,
                "Kiss you",
                3000,
                "Hold you",
                3000,
                "Was the most unforgettable day of my entire life",
                3000,
                "Each moment we had sits in my heart dearly",
                3000,
                "And I will never be able to forget each and every one of them",
                3000,
                "Here are some of the dearest ones I will never be able to forget",
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
        <div className="quote">“I TOLD YOU IT WOULD BE AMAZING”</div>
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
  color: "pink",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
