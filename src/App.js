import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function FloatingConfetti() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="floating-background">
      {particles.map((_, i) => {
        const size = Math.random() * 12 + 8;
        const shapeTypes = ["circle", "square", "triangle"];
        const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const colors = ["#FFD700", "#FF69B4", "#00BFFF", "#32CD32", "#FF6347"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        let clipPath = "";
        if (shape === "circle") clipPath = "circle(50%)";
        else if (shape === "square") clipPath = "none";
        else if (shape === "triangle")
          clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";

        return (
          <motion.div
            key={i}
            className="confetti"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              rotate: Math.random() * 360,
              opacity: 0,
              scale: Math.random() * 0.4 + 0.6,
            }}
            animate={{
              y: -100,
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
    const startDate = new Date(2005, 8, 3);
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
      "Whatever you do, always has so much detail put into it",
      3000,
      "And I love that so much about you",
      3000,
      "And I want you to know that not a single detail goes unnoticed <3",
      3000,
    ]);
  };

  const handleHowHelpfulYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your help is absolutely unforgetable",
      3000,
      "In moments when help is most needed",
      3000,
      "You are the one to reach out and help",
      3000,
      "Thank you so much for that <3",
    ]);
  };

  const handleHowFunnyYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your sense of humor makes the most hardest moments",
      3000,
      "Seem so insignificant",
      3000,
      "Like it all never happened, I become happy all over again!",
      3000,
      "So thank you for that <3",
    ]);
  };

  const handleHowCleanYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "The whole time I was with you",
      3000,
      "The apartment was so incredibly tidy",
      3000,
      "If not, then we clean it :D",
      3000,
      "And you are incredibly clean aswell!!",
      3000,
      "Which makes you an amazing person to be around <3",
    ]);
  };

  const handleHowWellYouDress = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "How stunningly you dress",
      3000,
      "How well those dresses look on you",
      3000,
      "Nothing on this planet will ever convince me that there is a more beautiful woman on this planet",
      3000,
      "Because there isnt, its all you baby <3",
    ]);
  };

  const handleHowFocusedYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "I love to see how focused you are on your tasks",
      3000,
      "You are determined to finish it",
      3000,
      "And you let no one disturb you",
      3000,
      "That determination and focus is something I would need aswell :D",
    ]);
  };

  const handleHowMuchAttentionYouPayToMe = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "How much attention you pay to me makes me feel so incredibly special",
      3000,
      "Every time there is a chance, I get shown love and care",
      3000,
      "And I always am appreciated",
      3000,
      "No matter the situation <3",
    ]);
  };

  const handleHowLovingYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Every second of the day, I get show the uttermostest love",
      3000,
      "Love which makes me question if there is any feeling better than this",
      3000,
      "Only you can make me feel as loved as you do <3",
    ]);
  };

  const handleHowRelaxingYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Being with you is so relaxing",
      3000,
      "All the worries in the world are gone when im with you",
      3000,
      "And life becomes so calm",
      3000,
      "So easy...",
    ]);
  };

  const handleHowRespectfulYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You never annoy me, you never disrespect me",
      3000,
      "Its something that I need to improve upon myself",
      3000,
      "For every thing that I may not like, you ask for my opinion",
      3000,
      "And I appreciate it so much",
      3000,
      "You give me so much respect",
      3000,
      "And you always make sure im respected in the relationship <3",
    ]);
  };

  const handleHowConsiderateYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Not even the most littlest tear of sadness can slip by",
      3000,
      "You instantly notice it",
      3000,
      "And you give me so much attention, so much calm",
      3000,
      "That all of the worries go away <3",
    ]);
  };

  const handleHowPreciseYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your precision and care in everything amaze me",
      3000,
      "Your precision to do everything perfectly",
      3000,
      "Just like how precise you are...",
      3000,
      "You are absolutely perfect <3",
    ]);
  };

  const handleHowBeautifulYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your beauty is out of this world",
      3000,
      "You are beautiful from the inside and outside",
      3000,
      "Same as your eyes, your personality shines and glistens <3",
      3000,
    ]);
  };

  const handleHowGoodOfATeacherYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You are an absolutely amazing teacher",
      3000,
      "In life and in maths!",
      3000,
      "So many lessions I can learn from you",
      3000,
      "Everyone can only learn from you <3",
    ]);
  };

  const handleHowIntelligentYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your intelligence is something I deeply admire",
      3000,
      "The way you think, analyze, and understand things is absolutely amazing",
      3000,
      "Its one of the many reasons I look up to you and love you so much <3",
    ]);
  };

  const handleHowWellSpokenYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You always know just what to say",
      3000,
      "Your words are always put so well together",
      3000,
      "You always express yourself so beautifully and thoughtfully <3",
    ]);
  };

  const handleHowYouMakeOrdinaryMomentsSpecial = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You turn even the most mundane days into something incredibly special",
      3000,
      "Whether its a walk or a going to the grocery store, you make it fun",
      3000,
      "Being with you makes everything feel magical <3",
    ]);
  };

  const handleHowYouMakeMeSmile = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You always know how to make me smile",
      3000,
      "Even when I dont feel like smiling at all",
      3000,
      "Your joy and warmth are the sole reason I am so happy every single day",
    ]);
  };

  const handleHowAdventurousYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "You are always so incredibly adventurous",
      3000,
      "You're always open to trying something new",
      3000,
      "With you, every day feels like a beautiful journey <3",
    ]);
  };

  const handleHowSupportiveYouAre = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Your support means everything to me",
      3000,
      "You stand by me through every high and low, through ups and downs",
      3000,
      "Knowing that, I feel secure, happy and heard <3",
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          Your attention to detail
        </button>
        <button onClick={handleHowHelpfulYouAre} style={buttonStyle}>
          How helpful you are
        </button>
        <button onClick={handleHowFunnyYouAre} style={buttonStyle}>
          How funny you are
        </button>
        <button onClick={handleHowCleanYouAre} style={buttonStyle}>
          How clean you are
        </button>
        <button onClick={handleHowWellYouDress} style={buttonStyle}>
          How well you dress
        </button>
        <button onClick={handleHowFocusedYouAre} style={buttonStyle}>
          How focused you are
        </button>
        <button onClick={handleHowMuchAttentionYouPayToMe} style={buttonStyle}>
          How much attention you pay to me
        </button>
        <button onClick={handleHowLovingYouAre} style={buttonStyle}>
          How loving you are
        </button>
        <button onClick={handleHowRelaxingYouAre} style={buttonStyle}>
          How relaxing you are
        </button>
        <button onClick={handleHowRespectfulYouAre} style={buttonStyle}>
          How respectful you are
        </button>
        <button onClick={handleHowConsiderateYouAre} style={buttonStyle}>
          How considerate you are
        </button>
        <button onClick={handleHowPreciseYouAre} style={buttonStyle}>
          How precise you are
        </button>
        <button onClick={handleHowBeautifulYouAre} style={buttonStyle}>
          How beautiful you are
        </button>
        <button onClick={handleHowGoodOfATeacherYouAre} style={buttonStyle}>
          How good of a teacher you are
        </button>
        <button onClick={handleHowIntelligentYouAre} style={buttonStyle}>
          How intelligent you are
        </button>
        <button onClick={handleHowWellSpokenYouAre} style={buttonStyle}>
          How well spoken you are
        </button>
        <button
          onClick={handleHowYouMakeOrdinaryMomentsSpecial}
          style={buttonStyle}
        >
          How you make ordinary moments special
        </button>
        <button onClick={handleHowYouMakeMeSmile} style={buttonStyle}>
          How you make me smile
        </button>
        <button onClick={handleHowAdventurousYouAre} style={buttonStyle}>
          How adventurous you are
        </button>
        <button onClick={handleHowSupportiveYouAre} style={buttonStyle}>
          How supportive you are
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
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
              style={styles.giftBox}
            >
              🎁
            </motion.div>
          )}

          {giftOpened && !showMessage && (
            <motion.div
              className="gift-box"
              animate={{ scale: [1, 0], rotate: [0, 180], opacity: 0 }}
              transition={{ duration: 2 }}
              style={styles.giftBox}
            >
              🎁
            </motion.div>
          )}

          {showMessage && (
            <>
              <div className="days-counter">
                How many days has Majda made the world a better place:{" "}
                {daysTogether}
              </div>
              {!animationSequence && renderButtons()}
              {!animationSequence && !showButtons && (
                <TypeAnimation
                  sequence={[
                    "Happy birthday my love!",
                    3000,
                    "My wife is now 20 years young",
                    3000,
                    "Here are 20 things I love about you <3",
                    3000,
                    () => setShowButtons(true),
                  ]}
                  wrapper="span"
                  speed={50}
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
                    speed={50}
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
            “Happy birthday! You deserve the best. I wish you years filled with
            love, care and happiness”
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
    backgroundColor: "#ff4081",
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
  color: "#d80d4a",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
