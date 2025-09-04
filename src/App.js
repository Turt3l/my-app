import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeartGame from "./HeartGame";

function FloatingConfetti() {
  // Generate once, store in a stable array
  const particles = useState(() =>
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 24 + 8,
      shape: "cube",
      color: "red",
      x: Math.random() * window.innerWidth,
      rotate: Math.random() * 360,
      scale: Math.random() * 0.4 + 3,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 5,
    }))
  )[0];

  return (
    <div className="floating-background">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="confetti"
          initial={{
            y: "100vh",
            x: p.x,
            rotate: p.rotate,
            opacity: 0,
            scale: p.scale,
          }}
          animate={{
            y: 100,
            opacity: [0, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            left: `${Math.random() * 100}%`,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            position: "absolute",
          }}
        />
      ))}
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

  // Falling "period" words
  const [periods, setPeriods] = useState([]);

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
      "I notice the little things you do… and I am so grateful for all of them",
      3000,
      "The way you remember my quirks, the way you make me laugh, the way you make me smile throughout even lifes hardest moments",
      3000,
      "The way you reach out to me, to help me, without even thinking twice",
      3000,
      "Its those quiet gestures, the little things you do that speak the loudest",
      3000,
      "They remind me that your love is not just in words, but in every action",
      3000,
      "And I will never take that for granted",
      3000,
      "Because every single detail of you is everything I have always wanted <3",
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "I am endlessly thankful for your presence in my life",
      3000,
      "When you are near, the world feels lighter, kinder, more alive",
      3000,
      "Even in silence, your presence comforts me more than words or actions ever could",
      3000,
      "You have a way of turning ordinary days into something unique, every day with you is unique and special",
      3000,
      "You make me believe in love in its purest form, the form that you give it to me in",
      3000,
      "I could spend a lifetime thanking you for simply being you",
      3000,
      "But even a lifetime of gratitude would not be enough",
      3000,
      "Because your love is the most beautiful gift I will ever know and receive <3",
    ]);
  };

  // Spawn a falling "period" (word)
  const dropPeriod = () => {
    setPeriods((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: Math.random() * (window.innerWidth - 80), // leave a little margin
        startTop: -50,
        endTop: window.innerHeight + 60, // animate to just past bottom
        life: 4500, // ms to auto-remove after the fall
      },
    ]);
  };

  // Optional: clean up finished items (prevents unbounded growth)
  useEffect(() => {
    if (periods.length === 0) return;
    const timers = periods.map((p) =>
      setTimeout(() => {
        setPeriods((prev) => prev.filter((it) => it.id !== p.id));
      }, p.life)
    );
    return () => timers.forEach(clearTimeout);
  }, [periods]);

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          The little things you do
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          The presence
        </button>
      </>
    ) : null;

  return (
    <div className="App">
      {/* <FloatingConfetti /> */}

      {/* Falling "period" words */}
      {periods.map((p) => (
        <motion.div
          key={p.id}
          initial={{ top: p.startTop, left: p.x, opacity: 1 }}
          animate={{ top: p.endTop, opacity: 0.2 }}
          transition={{ duration: 4, ease: "linear" }}
          style={{
            position: "fixed", // relative to viewport
            zIndex: 3, // above .content-wrapper (z-index: 2)
            pointerEvents: "none",
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "white",
          }}
        >
          period
        </motion.div>
      ))}

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
              💞
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
              💞
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
                    "From the very beginning, you have given me so much to be grateful for",
                    3000,
                    "Every day with you feels like a gift I could never deserve",
                    3000,
                    "You love me with a patience and warmth that makes my world safe",
                    3000,
                    "You showed me and made my imagination come true, that this is exactly how an amazing relationship is like",
                    3000,
                    "And when I stop to think about it",
                    3000,
                    "I am overwhelmed with gratitude that you are mine, that we are together forever, engaged <3",
                    3000,
                    "You have changed my life in ways I could never have imagined, its so much more liveable with you",
                    3000,
                    "And for that, my love, I will never stop thanking you and loving you",
                    3000,
                    "You are my greatest blessing, my dearest treasure, my forever <3",
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
              <button
                onClick={dropPeriod}
                style={{
                  position: "fixed",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                  padding: "10px 15px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "none",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
                  zIndex: 4, // above falling words
                }}
              >
                Period
              </button>
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
            “I look at you and see the rest of my life in front of my eyes.”
            {/* Period button fixed on the right side */}
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
  color: "pink",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
