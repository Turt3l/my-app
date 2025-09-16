import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeartGame from "./HeartGame";

function FloatingConfetti() {
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
  const [giftOpened, setGiftOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [periods, setPeriods] = useState([]);

  // runaway button ref + position
  const runawayBtnRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

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
  };

  const handleYourAttentionToDetail = () => {
    setShowButtons(false);
    setAnimationSequence([
      "Goob :3, because I want you forever",
      3000,
      "I want to taste you forever, to enjoy you, cherish you",
      3000,
      "You the best snack on this planetb :3",
      3000,
      () => setShowButtons(true),
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

  // smooth dodge effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const btn = runawayBtnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      const avoidRadius = 100; // distance at which button runs away
      if (distance < avoidRadius) {
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * -50; // move opposite
        const moveY = Math.sin(angle) * -50;

        setBtnPos((prev) => {
          let newX = prev.x + moveX;
          let newY = prev.y + moveY;

          // keep inside viewport
          newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
          newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

          return { x: newX, y: newY };
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderButtons = () =>
    showButtons ? (
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Normal button */}
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          Yes I would, the most tastiest one :3
        </button>

        {/* Smooth runaway button (starts next to the other) */}
        <button
          ref={runawayBtnRef}
          style={{
            ...buttonStyle,
            position: "relative",
            left: `${btnPos.x}px`,
            top: `${btnPos.y}px`,
            background: "lightpink",
            transition: "left 0.3s ease, top 0.3s ease",
          }}
        >
          Nope, not really
        </button>
      </div>
    ) : null;

  return (
    <div className="App">
      {periods.map((p) => (
        <motion.div
          key={p.id}
          initial={{ top: p.startTop, left: p.x, opacity: 1 }}
          animate={{ top: p.endTop, opacity: 0.2 }}
          transition={{ duration: 4, ease: "linear" }}
          style={{
            position: "fixed",
            zIndex: 3,
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
              🍕
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
              🍕
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
                    "You already know this, but I love you more than anything on this planet",
                    3000,
                    "But if I can be honest, the pizza you made comes close :3",
                    3000,
                    "Actually, if you combine you and pizza, it would be perfect",
                    3000,
                    "So basically you are my human pizza: warm, beautiful, perfect, comforting, and impossible to live without",
                    3000,
                    "I want to roll you in many blankets, make you warm and cuddle you endlessly",
                    3000,
                    "And then I would hug you like a burrito, because you are my favorite snack",
                    3000,
                    "Except you are better than any snack, because you dont run out after a few bites :3",
                    3000,
                    "You are my infinite pizza slice, my one and only forever cuddly burrito",
                    3000,
                    "I love you, my delicious snack :3",
                    3000,
                    "Would you want to spend the rest of your life being my snack? :3",
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
                  zIndex: 4,
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
          <div className="quote">“You the most tastiest potatob :3.”</div>
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
  color: "rgb(176, 171, 27)",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
