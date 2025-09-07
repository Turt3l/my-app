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
              💛
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
              💛
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
                    "Every day I go through the moments of when we first met",
                    3000,
                    "How when coming back from the airport, I held your hand and we looked at each other",
                    3000,
                    "How at one point we werent shy anymore, we just looked at each other",
                    3000,
                    "Endlessly, we had infinite love in our eyes",
                    3000,
                    "Once we arrived home, you sat down on the couch and I took off your shoes",
                    3000,
                    "First time I got on my knee for you, I will remember it forever",
                    3000,
                    "Its also when the first kiss happened, first time I had ever kissed anyone",
                    3000,
                    "And I am so glad that person was you",
                    3000,
                    "It was an absolute miracle, I felt like I was at the right place",
                    3000,
                    "We went to my room, you sat down in my chair and we kissed",
                    3000,
                    "Those kisses I will cherish forever, and keep forever close to my heart",
                    3000,
                    "At that moment I felt like I was on top of the world, that nothing could stop me",
                    3000,
                    "To have such a beautiful, charming, loving woman looking at me so lovingly",
                    3000,
                    "Never will anything feel as good as that day, the day when I could finally feel your touch, kiss your lips which felt like kissing a cloud",
                    3000,
                    "It was a moment I will forever hold dear to my heart",
                    3000,
                    "Never will I let go of such a beautiful memory",
                    3000,
                    "I go back to it every day, and I hope that our relationship will last as long as the memory of it starting will",
                    3000,
                    "May we last forever, in love, in peace",
                    3000,
                    "I love you <3",
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
            “All I ever wanted was to reach out and touch another human being
            not just with my hands but with my heart.”
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
