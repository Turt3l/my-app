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
        const shapeTypes = ["circle"];
        const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const colors = ["lightblue"];
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
      "Ever since we met, I know you are the one",
      3000,
      "That this will last, it wouldnt be some false hope that I made up in my head",
      3000,
      "I knew that this is love, I knew that this will be the love I will take to my grave",
      3000,
      "Live with it forever, this love comes by once in a lifetime",
      3000,
      "You make my life so incredibly beautiful",
      3000,
      "Every day I wake up and I am greeted by the most wonderful woman I have ever seen",
      3000,
      "And I know that never will I see anyone better, because every day I am blinded by your gaze, everyone else just fades away",
      3000,
      "I want to be with you forever my love",
      3000,
      "I want to go through life together, its our first time living life, so lets guide each other through",
      3000,
      "Lets create memories together that will last forever",
      3000,
      "Lets strive for love that knows no boundries",
      3000,
      "I love you Majda, I love you my everything, I want you forever.",
      3000,
      "I am not going anywhere, I am captivated by you",
    ]);
  };

  const handleYourPresence = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Seeing you happy is relief beyond this world",
      3000,
      "Because I know, that when you are happy, everything is alright",
      3000,
      "If you are happy, so am I",
      3000,
      "I love working towards our goals, our goals of living a lifestyle like no other",
      3000,
      "I am happy that I get to fulfill the dream of small Majda, of always being happy",
      3000,
      "And I will fulfill this duty to my best",
      3000,
      "I dont care if that means me working 24/7, I really dont care",
      3000,
      "I would much rather sacrifice a part of me, than to see you not happy, not fulfilled",
      3000,
      "Because your happiness means everything to me, my own needs fade away when I see you smile, its an addiction",
      3000,
      "Its an endless need to see you happy, its my duty to fulfil your dreams",
      3000,
      "Thank you for giving me such a chance",
      3000,
      "Thank you for being yourself, because only the purest version of you is what I want",
      3000,
      "I will do anything to make you happy",
      3000,
      "Because you deserve it, you deserve it more than anyone",
      3000,
      "I love you <3",
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          I want to spend my whole life with you
        </button>
        <button onClick={handleYourPresence} style={buttonStyle}>
          I would do anything to see you happy
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
              💎
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
              💎
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
                    "You are worth everything, nothing in this world is more valuable than you",
                    3000,
                    "You are more valuable than the biggest and shiniest diamonds on this planet",
                    3000,
                    "You are more valuable than mountains of gold",
                    3000,
                    "That is what gives me motivation to work every day, to improve",
                    3000,
                    "Because you are worthy only of perfection",
                    3000,
                    "Those perfect brown eyes of yours, they only deserve to see perfection",
                    3000,
                    "They shine brighter than anything I have ever seen, they shine with love, with passion",
                    3000,
                    "That is the most beautiful shine ones eyes can give off, your eyes are the only ones which can",
                    3000,
                    "Never do I want to loose you, because that shine is what keeps me going",
                    3000,
                    "Without them, what motivation do I have? Who would I be doing all this for?",
                    3000,
                    "For myself? Sadly I cant look myself in the eyes :D",
                    3000,
                    "You are everything my love, you are what makes this world beautiful, without you it would never be the same",
                    3000,
                    "So stay with me forever and lets create the story of our lives together",
                    3000,
                    "Lets pave the way to our futures together and lets live in harmony together",
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
            “Your memory feels like home to me. So whenever my mind wanders, it
            always finds it’s way back to you.”
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
  color: "rgb(108, 108, 190)",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
