import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function FloatingConfetti() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="floating-background" key="background">
      {particles.map((_, i) => {
        const size = Math.random() * 24 + 8;
        const shapeTypes = ["circle, cube"];
        const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const colors = ["lightgray"];
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
      "Every single day I imagine things that we would do together",
      3000,
      "How we would spend each and every day of our lives together",
      3000,
      "How we would relax after a hard days work",
      3000,
      "Cuddled up in each others arms, looking in each others eyes",
      3000,
      "Your eyes shine as bright as diamonds",
      3000,
      "No fields of gold could ever make me think about a world without you",
      3000,
      "A world without peace, without love, without honesty",
      3000,
      "This world is the worst place without you",
      3000,
      "A place without light, without happiness",
      3000,
      "But when I see you, my eyes become bigger",
      3000,
      "And I get blinded by your bloom",
      3000,
      "Bloom of beauty, love and infinite love",
      3000,
      "Never do I want a world without you",
      3000,
      "Without my love",
      3000,
      "My everything",
      3000,
      "A part of me. Forever.",
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your presence means everything to me",
      3000,
      "Knowing that you are by my side gives me infinite ammount of motivation",
      3000,
      "It gives me the opportunity to be the best man possible for you",
      3000,
      "This opportunity makes me dream",
      3000,
      "Makes me dream of you",
      3000,
      "And every dream of you makes me fall in love with you all over again",
      3000,
      "Never did I dream that I would love someone like you",
      3000,
      "Someone so precious, someone so dear to my heart",
      3000,
      "Never do I wish to let go of you",
      3000,
      "I will always be here for you, I will always be in love with you",
      3000,
      "Even if you wont be in love with me",
      3000,
      "Knowing that you exist on this planet",
      3000,
      "Is already enough to love you",
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          I cannot wait to spend my whole future with you
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          Your presence is more important to me than anything
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
              🤍
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
              🤍
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
                    "I am so happy to finally be back to you",
                    3000,
                    "Every day without you felt off",
                    3000,
                    "Like something was missing",
                    3000,
                    "And it was your presence, your beautiful voice, those beautiful brown eyes gazing upon me",
                    3000,
                    "And that beautiful kiss you blow to me",
                    3000,
                    "Which feels like a kiss from a rose",
                    3000,
                    "So gentle, so delicate",
                    3000,
                    "Keeps me wanting more and more",
                    3000,
                    "Like a drug, like an addiction",
                    3000,
                    "Oh god I am in love with you",
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
            “I love you, not only for what you are, but for what I am when I am
            with you.”
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
  color: "black",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
