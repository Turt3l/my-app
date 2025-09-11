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
      "You have completely turned my life around (in a good way)",
      3000,
      "Everything has changed about my day with you",
      3000,
      "Our day starts off with loving words to each other, plans for today, discussions",
      3000,
      "That already has made my day 100x better than it was, your mere presence makes it so much better",
      3000,
      "The love that you give has completely changed myself as a person",
      3000,
      "All of my needs are met, you give so much love its impossible to not be happy :3",
      3000,
      `You say "I love you" just at the moments when I need it the most`,
      3000,
      "The feeling that you love move is utterly insane",
      3000,
      "That you are always there to support me, care for me",
      3000,
      "It is unimaginable, magical, and beautiful",
      3000,
      "My life feels complete, and anything else that comes along is just a sweet bonus",
      3000,
      "Knowing that I have you makes it all so worth it <3",
      3000,
      "Thank you for being with me, supporting me and believing in me <3",
      3000,
      () => setShowButtons(true),
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "While being with you I truly discovered what is love, how pure and beautiful it can be",
      3000,
      "And this has changed my whole perspective on life",
      3000,
      "That life needs love, life without love is bold, boring and sour",
      3000,
      "Thats how my life was like before, it was unenjoyable",
      3000,
      "But once I got a taste of your love, I couldnt hold back",
      3000,
      "It felt magical, like something I have never had before",
      3000,
      "I could never and I wont ever get enough of it",
      3000,
      "And I dont even want to imagine my life without it",
      3000,
      "You give me infinite motivation to do better, to improve",
      3000,
      "And I cannot wait to spend my future with you, to see how far I can improve as a person",
      3000,
      "Our future is full of love, happiness and adventure, so lets build our future together",
      3000,
      "Hand in hand",
      3000,
      "Never let go and let it prosper",
      3000,
      "I love you so much <3",
      3000,
    ]);
  };

  const handleYourBeautifulMind = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You have completely turned my life around (in a good way)",
      3000,
      "Everything has changed about my day with you",
      3000,
      "Our day starts off with loving words to each other, plans for today, discussions",
      3000,
      "That already has made my day 100x better than it was, your mere presence makes it so much better",
      3000,
      "The love that you give has completely changed myself as a person",
      3000,
      "All of my needs are met, you give so much love its impossible to not be happy :3",
      3000,
      `You say "I love you" just at the moments when I need it the most`,
      3000,
      "The feeling that you love move is utterly insane",
      3000,
      "That you are always there to support me, care for me",
      3000,
      "It is unimaginable, magical, and beautiful",
      3000,
      "My life feels complete, and anything else that comes along is just a sweet bonus",
      3000,
      "Knowing that I have you makes it all so worth it <3",
      3000,
      "Thank you for being with me, supporting me and believing in me <3",
    ]);
  };

  const dropPeriod = () => {
    setPeriods((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: Math.random() * (window.innerWidth - 80),
        startTop: -50,
        endTop: window.innerHeight + 60,
        life: 4500,
      },
    ]);
  };

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
          You completely turned my life around
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          You made me believe in love
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
              ♾️
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
              ♾️
            </motion.div>
          )}

          {showMessage && (
            <>
              <div className="days-counter">
                Days we havent yet been married: {daysTogether} (went up by one
                hehehehe :3)
              </div>
              {!animationSequence && renderButtons()}
              {!animationSequence && !showButtons && (
                <TypeAnimation
                  sequence={[
                    "I am the most luckiest man on this entire planet",
                    3000,
                    "Not because of what I am or what I have done",
                    3000,
                    "Its because I have the most perfect woman next to me, she makes me proud to be myself",
                    3000,
                    "Having you means I have achieved more in life than I ever will",
                    3000,
                    "Because somehow I have ended up with the most perfect woman on this entire planet",
                    3000,
                    "If thats not luck, then what is?",
                    3000,
                    "Having you, the most beautiful woman next to me, makes me feel such confidence, such happiness",
                    3000,
                    "And I will do anything to prosper, cherish and value our relationship",
                    3000,
                    "I want you forever, longer than future itself",
                    3000,
                    "Because without you, I truly cannot be myself, I am only happy with you <3",
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
            “We loved with a love that was more than love.”
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
  color: "rgb(0, 105, 170)",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
