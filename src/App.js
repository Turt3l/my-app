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
        const shapeTypes = ["circle"];
        const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const colors = ["pink"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        let clipPath = "";
        if (shape === "circle") clipPath = "circle(50%)";

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
  // var audio = new Audio("audio_file.mp3");
  // audio.play();
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
      "Everything you do, everything you say",
      3000,
      "Every move you take, every thought you express",
      3000,
      "Is absolutely perfect, and nothing will convince me otherwise",
      3000,
      "I notice absolutely everything you do, and I can only be happy",
      3000,
      "That such perfectness loves me, adores me, and is my soulmate for life",
      3000,
      "It brings ease into my life",
      3000,
      "Knowing that I have you, that I can trust you",
      3000,
      "And that you trust me to provide you, to protect you and be by your side",
      3000,
      "I am absolutely grateful to have you",
      3000,
      "And I cannot wait for the future with you",
      3000,
      "A future where we live together, share things together",
      3000,
      "Where we go on roadtrips together and make our favourite memories together",
      3000,
      "Its a life worth living, the only life worth living is a life with you",
      3000,
      "You and only you",
      3000,
      "I love you so much <3",
    ]);
  };

  const handleILoveEverythingAboutYou = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Everything about you is so loveable, so cherishable",
      3000,
      "I want to love every single part of you forever",
      3000,
      "If it means not loving myself, I dont care",
      3000,
      "You are a part of my soul, you are a part of me",
      3000,
      "A part which cannot be taken away",
      3000,
      "A part which I will never forget and will cherish forever",
      3000,
      "I love your beautiful hair",
      3000,
      "I love your beautiful smile",
      3000,
      "I love your beautiful personality and mind",
      3000,
      "I am so happy to have you just for that, for what you are, yourself",
      3000,
      "You are so valuable to me, and always will be",
      3000,
      "May our love grow together, may we love each other more and more every day",
      3000,
      "You are the best wife ever and I never wish to loose you",
      3000,
      "Thank you for being just the way you are <3",
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          You are perfect the way you are
        </button>
        <button onClick={handleILoveEverythingAboutYou} style={buttonStyle}>
          I love everything about you
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
              ❤️
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
              ❤️
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
                    "You make me so incredibly happy",
                    3000,
                    "Never in eternity do I wish to lose you",
                    3000,
                    "You are what makes eternity sound like a short ammount of time",
                    3000,
                    "Because time flies by with you, it really does",
                    3000,
                    "Every second of my life that I spend with you is the best time of my life",
                    3000,
                    "Nothing is better than the calm, peaceful, fun, loving time spent with you",
                    3000,
                    "You make life worth living, every second of it",
                    3000,
                    "Every smile you give feels like a dream",
                    3000,
                    "Every 'I love you' means so much to me",
                    3000,
                    "Like I would never hear those words from anyone else",
                    3000,
                    "And I never want to hear them from anyone else",
                    3000,
                    "Other than you <3",
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
            “Love is that condition in which the happiness of another person is
            essential to your own.”
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
    backgroundColor: "pink",
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
  color: "purple",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
