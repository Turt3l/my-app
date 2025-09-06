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
      color: "blue",
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
      "You convince me so easily",
      3000,
      "Somehow, you always know what to say to make me feel good, and convinced that what I am doing is right.",
      3000,
      "Its not only your words, but its your beautiful voice and the piece of mind that is included in every thing you say",
      3000,
      "I could walk into a conversation with a million reasons to disagree",
      3000,
      "and somehow, I walk out doing exactly what you want and how you want",
      3000,
      "And honestly, I absolutely love that",
      3000,
      "Because every time, it just proves that loving you is the easiest decision I will ever make, and that is the only decision you wont ever be able to change <3",
      3000,
      () => setShowButtons(true),
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your willingness to fight for our relationship is something to strive for",
      3000,
      "Because when you do, it shows how deeply you care",
      3000,
      "It means you fight for what matters to you and what matters is - us",
      3000,
      "Your passion, even in anger, is proof of your love, proof that you want us to last",
      3000,
      "I would much rather have a fiery, beautiful love with you than silence with anyone else",
      3000,
      "Every storm with you reminds me that we are strong enough to survive anything, absoutely anything that is thrown at us",
      3000,
      "And in the end, we always find our way back much stronger, closer, and more in love than before",
      3000,
      "Your willingness to fight is what I will always be amazed of, in moments like those, it shows more love than anything else",
      3000,
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
          You convince me so easily
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          Your willingness to fight
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
              🌍
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
              🌍
            </motion.div>
          )}

          {showMessage && (
            <>
              <div className="days-counter">
                Days we havent yet been married: {daysTogether}
              </div>
              {/* {!animationSequence && renderButtons()} */}
              {!animationSequence && !showButtons && (
                <TypeAnimation
                  sequence={[
                    "Do you ever wonder, what do astronauts see?",
                    3000,
                    "What do you think are their first thoughts once they see the blue orb that is our earth?",
                    3000,
                    "Knowing that down there, there are 8 billion people",
                    3000,
                    "Imagine yourself in that place",
                    3000,
                    "That down there is a human which you so much love",
                    3000,
                    "It just makes us realise how small we are",
                    3000,
                    "Its called the overview effect",
                    3000,
                    "It changes their whole perspective on beauty, and apprecation for our small little earth",
                    3000,
                    "It makes them feel more connected to the people on the planet as a whole",
                    3000,
                    "But why? Why when we are the most furthest, we feel connected the most?",
                    3000,
                    "Is it knowing that we all live together on this planet, all squished together, all 8 billion people?",
                    3000,
                    "Is it knowing that the space we know is infinite has a place we can call home?",
                    3000,
                    "That despite the ever expanding entity we call infinite has a place where our humankind reside",
                    3000,
                    "As Bill Anders once said - Here we came all this way to the Moon, and yet the most significant thing we're seeing is our own home planet, the Earth",
                    3000,
                    "The moral of it is that we appreciate the things we have the most when we are away from them",
                    3000,
                    "That in this small little planet we have each other",
                    3000,
                    "Despite the infinity, despite how small we are, our love stretches beyond that",
                    3000,
                    "And that we truly can never be away from each other, we are all squeezed in this planet",
                    3000,
                    "And I am glad that I am squeezed in this planet with you <3",
                    3000,
                    "Some day we will go up there aswell, and not look at the earth, but look at each other",
                    3000,
                    "Because what is this earth without you?",
                    3000,
                    "You are my everything, you are the earth for me",
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
            “Our mere existence is a mystery, but a bigger mystery is how we
            found each other despite the infinite entity we call space.”
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
  color: "rgb(56, 0, 153)",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
