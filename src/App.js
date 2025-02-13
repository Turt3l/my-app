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
      "You probably dont even realize how much of an effect you have on me",
      3000,
      "You make things better just by being there for me and thats something no one could do",
      3000,
      "I dont think you give yourself enough credit for that",
      3000,
      "But I see it",
      3000,
      "The way you make me feel understood, without even trying",
      3000,
      "The way you somehow know exactly what to say, even when I dont",
      3000,
      "The way you make everything feel easier, just by being there",
      3000,
      "You dont just exist in my life, you make it better in ways I cant even explain",
      3000,
      "And I wouldnt trade that for anything",
      3000,
      "Not now, not ever",
      3000,
      "My wifey <3",
      () => handleBackToOptions(),
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "You have this way of noticing things that most people dont",
      3000,
      "Small details, moments, things that others overlook",
      3000,
      "And it's not just that you notice them, it's that you actually analyze them",
      3000,
      "You find meaning in things that most people dont",
      3000,
      "Its like you experience the world on a deeper level, where everything has a story",
      3000,
      "And thats something Ive always admired about you",
      3000,
      "Because it means you see beauty in places most people wouldnt even think to look",
      3000,
      "You dont just move through life, you truly experience it",
      3000,
      "And somehow, you make me see things differently too",
      3000,
      "Majda, you make the world more interesting just by being in it",
      3000,
      "And I feel lucky every day that I get to see it through your eyes",
      3000,
      "I love you so much",
      3000,
      "You truly are and always will be my one and only",
      3000,
      "The love of my life",
      3000,
      () => handleBackToOptions(),
    ]);
  };

  const renderButtons = () => {
    return showButtons ? (
      <>
        <button onClick={handleMakeDayMessage} style={buttonStyle}>
          The effect you have on me
        </button>
        <button onClick={handleBrightenMessage} style={buttonStyle}>
          Attention to details
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
            Days we havent been married yet: {daysTogether}
          </div>
          {!animationSequence && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "The way you always want to learn more about the world is something I really admire",
                3000,
                "It doesnt matter if its a new topic, a random fact or just a different perspective or opinion",
                3000,
                "You have this ability to take in information and actually make sense of it in a way most people dont",
                3000,
                "You dont just accept things at face value, you think, you question, you understand",
                3000,
                "And thats something I find genuinely incredible about you",
                3000,
                "No conversation with you is ever boring because you always have something interesting to say or opinion to express",
                3000,
                "And I could listen to you talk about anything for an eternity",
                3000,
                "Because you make eternity seem like a short period of time",
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
          “You know youre in love when you cant fall asleep because reality is
          finally better than your dreams”
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
  color: "#a1c4fd",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
