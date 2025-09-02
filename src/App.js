import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeartGame from "./HeartGame";

function FloatingConfetti() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="floating-background" key="background">
      {particles.map((_, i) => {
        const size = Math.random() * 24 + 8;
        const shapeTypes = ["cube"];
        const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const colors = ["white"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        let clipPath = "";
        if (shape === "circle") clipPath = "circle(50%)";
        if (shape === "cube")
          clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%);";

        return (
          <motion.div
            key={"giftasd"}
            className="confetti"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              rotate: Math.random() * 360,
              opacity: 0,
              scale: Math.random() * 0.4 + 3,
            }}
            animate={{
              y: 100,
              opacity: [0, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${Math.random() * 100}%`,
              clipPath: clipPath,
              position: "absolute",
            }}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [animationSequence, setAnimationSequence] = useState(null);
  const [daysTogether, setDaysTogether] = useState(0);
  const [stage, setStage] = useState(0);
  const [giftOpened, setGiftOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const startDate = new Date(2024, 11, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysTogether(days);
  }, []);

  const openGift = () => {
    setGiftOpened(true);
    setTimeout(() => {
      setShowMessage(true);
    }, 2000);
  };

  const handleBackToOptions = () => {
    setShowButtons(true);
    setAnimationSequence(null);
    setStage(0);
  };

  const handleYourAttentionToDetail = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Ofcourse you were born with it my love",
      3000,
      "You are the closest humanity has ever been to perfection",
      3000,
      "And that is why I am so endlessly happy to have you",
      3000,
      "Knowing, that such a person like you, so perfect, so intelligent",
      3000,
      "Has found something in me, something that she couldnt find anywhere else",
      3000,
      "I will always be willing to change for you",
      3000,
      "If it means spending even a few more minutes with you",
      3000,
      "I will take it to my grave, the fact that I was with the most perfect person to walk this earth",
      3000,
      "No one will change that opinion for me",
      3000,
      "I will love you forever",
      3000,
      "No matter what happens",
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Even 5 years ago I thought that you were an incredibly smart person",
      3000,
      "Perhaps the smartest person I will ever meet",
      3000,
      "And guess what, 5 years later my opinion hasnt changed one bit",
      3000,
      "The way you predict things, say things and give advice is incredible",
      3000,
      "Your advice is worth more than gold",
      3000,
      "Your predictions are worth more than this unpredictable universe itself",
      3000,
      "But more than your mind, its your heart that amazes me the most",
      3000,
      "The way you care, the way you make people feel seen and understood",
      3000,
      "Its rare, its precious, its you <3",
      3000,
      "And I will always be greatful for your presence in my life",
      3000,
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          Duh, I was born with it
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          I am just smart like that, period
        </button>
      </>
    ) : null;

  return (
    <div className="App">
      <FloatingConfetti />
      <div className="content-wrapper">
        <header className="App-header">
          {!giftOpened && (
            <motion.div
              className="gift-box"
              onClick={openGift}
              key="gift"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
              style={styles.giftBox}
            >
              🤔
            </motion.div>
          )}

          {giftOpened && !showMessage && (
            <motion.div
              className="gift-box"
              key="giftopen"
              animate={{ scale: [1, 0], opacity: 0 }}
              transition={{ duration: 2 }}
              style={styles.giftBox}
            >
              🤔
            </motion.div>
          )}

          {showMessage && (
            <>
              <div className="days-counter">
                Days we havent yet been married: {daysTogether}
              </div>
              {!animationSequence && renderButtons()}
              {!animationSequence && !showButtons && (
                <TypeAnimation
                  sequence={[
                    "You are the reason I am doing so well in life",
                    3000,
                    "You are the reason I am the way I am, how intelligent I am, what lifechoices I make",
                    3000,
                    "And that is whats briliant about you",
                    3000,
                    "You motivate, guide, set an example",
                    3000,
                    "An example from which every human should learn from",
                    3000,
                    "You are so loving, so caring that you want me to make the best decision",
                    3000,
                    "And when I do as you say, everything goes perfectly as planned",
                    3000,
                    "And that is an another mystery I will never solve, how are you so good at this?",
                    3000,
                    "Where did you get such powers?",
                    3000,
                    () => setShowButtons(true),
                  ]}
                  wrapper="span"
                  speed={80}
                  style={{
                    fontSize: "1.5em",
                    display: "inline-block",
                  }}
                />
              )}
              {animationSequence && (
                <div style={{ marginTop: "20px" }}>
                  <TypeAnimation
                    sequence={animationSequence}
                    wrapper="span"
                    speed={80}
                    style={{
                      fontSize: "1.5em",
                      display: "inline-block",
                    }}
                  />
                  <div>
                    <button
                      onClick={handleBackToOptions}
                      style={{ ...buttonStyle, marginTop: "20px" }}
                    >
                      ← Back
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </header>
        {showMessage && (
          <div className="quote">
            “I will love you until the sun dies. And when it does, I will love
            you in the darkness.”
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  giftBox: {
    fontSize: "6rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    borderRadius: "20px",
    margin: "auto",
    marginTop: "100px",
    color: "#fff",
    position: "relative",
    backgroundColor: "white",
  },
};

const buttonStyle = {
  margin: "5px",
  padding: "15px 20px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  background: "white",
  color: "yellow",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
