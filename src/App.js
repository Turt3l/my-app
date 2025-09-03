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
        const colors = ["darkgreen"];
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
      "The way you do things, with confidence, so quickly",
      3000,
      "Make it seem like its all so easy to do",
      3000,
      "Like its so simple, anyone could do it",
      3000,
      "But then I try it myself...",
      3000,
      "Uhhh, yeahh, it aint as easy at all",
      3000,
      "You have so many skills, that I feel like I know nothing",
      3000,
      "You have built up your knowledge so much to the point where I can only admire you",
      3000,
      "Learn from you, and improve to become perfect for you <3",
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You multitask like I have never seen before",
      3000,
      "Somehow, you manage to juggle ten things at once",
      3000,
      "And not just juggle them… you excel at them and do them better than I have ever seen",
      3000,
      "Where I would collapse, you thrive",
      3000,
      "You bring order to chaos without even trying",
      3000,
      "Its absolutely incredible how you go hand in hand with the things you do",
      3000,
      "I am in utter awe of how natural it seems for you",
      3000,
      "And it inspires me every single day to become a beter person for you  <3",
      3000,
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          You make everything seem so easy
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          You multi task like I have never seen
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
              🐢
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
              🐢
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
                    "You are one of the most productive people I have ever seen",
                    3000,
                    "I wake up, look at my phone, we text a bit",
                    3000,
                    "I scroll reels for 5 minutes",
                    3000,
                    "Ding ding",
                    3000,
                    "....",
                    3000,
                    "Notification",
                    3000,
                    `"I cleaned the whole apartment and solved world hunger"`,
                    3000,
                    "What?",
                    3000,
                    "And at moments like theese I truly realise how extremely productive you are",
                    3000,
                    "How well you can do kinds of tasks at the same time",
                    3000,
                    "Your unwillingness to give up is something I look up to",
                    3000,
                    "Its something I can only admire and to imagine being one day",
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
            “If you don’t pay appropriate attention to what has your attention,
            it will take more of your attention than it deserves.”
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
  color: "rgb(0, 166, 41)",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
