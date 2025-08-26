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
        const colors = ["pink"];
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
              y: 200,
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
      "A lavender symbolizes purity, devotion, calmness",
      3000,
      "The purity, devotion and calmness that we have with each other",
      3000,
      "Our love is so pure, pure like nothing else",
      3000,
      "We put no filter on it, our love comes in its purest form",
      3000,
      "We love each other trueheartingly, nothing but love",
      3000,
      "We are so devoted to each other, all day and every day we spend together",
      3000,
      "And that is beautiful, how we never get bored of each other",
      3000,
      "How we can spend time together, no matter the distance, no matter the conditions",
      3000,
      "How we find calmness in each other, how our each others presence makes each others day so much better, and more peaceful",
      3000,
      "Our relationship is simply beautiful, the bond that we have with each other we couldnt have with anyone else",
      3000,
      "I love us, I love our relationship",
      3000,
      "I love what we have become and for the future that we will have together <3",
    ]);
  };

  const handleOrchid = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "A orchid symbolizes love, beauty and rarity",
      3000,
      "Just like a orchid, our love is rare and one of a kind, never seen before",
      3000,
      "Something so unshakable and trusting, a love so rare only a few people get to experience",
      3000,
      "The orchid blooms just like our relationship, it blooms with love and beauty",
      3000,
      "Our love is unique, delicate yet powerful, rare and will last forever",
      3000,
      "Just like a orchid, it continues to blossom and grow stronger every single day",
      3000,
      "And I will always keep this relationship close to my heart, because my heart blossoms the same as this relationship <3",
    ]);
  };

  const handleRedTulip = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "A red tulip symbolizes true and perfect love",
      3000,
      "Our love is true, based up on honesty and sincerity",
      3000,
      "It is perfect in its own way, not because it is flawless, but because it is ours and its beautiful",
      3000,
      "Every moment with you reminds me that I have found my perfect love",
      3000,
      "A love that is in its most purest and truest form",
      3000,
      "A love that grows stronger each day, just like a tulip blooming and growing in the spring",
      3000,
      "Our bond is not just love, it is devotion, it is forever",
      3000,
      "Red tulip is like us, a perfect love that cannot be replaced",
      3000,
      "You are my true love, the one I was always meant to find and I am incredibly happy I did",
      3000,
      "And I will hold on to this love for eternity, through every season of life, for my whole life",
      3000,
      "I love you, my perfect tulip, my perfect love",
      3000,
    ]);
  };

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
              🩷
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
              🩷
            </motion.div>
          )}

          {showMessage && (
            <>
              <div className="days-counter">
                Days we havent yet been married: {daysTogether}
              </div>
              {!animationSequence && !showButtons && (
                <TypeAnimation
                  sequence={[
                    "From the first waking hours, this day without you already feels like a burden",
                    3000,
                    "It already feels difficult, without seeing your beautiful eyes first thing in the morning, I have no motivation to do anything",
                    3000,
                    "Its like a bad nightmare",
                    3000,
                    "This truly makes me look back at everything, it gives me time for thought, for self reflection",
                    3000,
                    "I could have done so many things better, but I chose not to",
                    3000,
                    "These things I will never forgive myself",
                    3000,
                    "Nor do I deserve forgivness",
                    3000,
                    "Maybe I didnt appreciate it enough in moments when we were always together",
                    3000,
                    "But now, thats all I can think about",
                    3000,
                    "You give me such warmth, such care like nowhere else",
                    3000,
                    "And I appreciate all of it so so much",
                    3000,
                    "I really really miss you",
                    3000,
                    "I know that this distance is necessary, but even one day without you is too much",
                    3000,
                    "Theese days will be tough without your I love you, without your good mornings",
                    3000,
                    "But I know that everything will be alright, the thought of us being in each other arms is the only thing that keeps me going",
                    3000,
                    "Thats the thing that makes me forgive so easily",
                    3000,
                    "Because every feeling you gave to me, every thing you did for me, truly came from your heart",
                    3000,
                    "You put so much passion into each and every thing you did for me",
                    3000,
                    "I cannot wait for our next night walk together",
                    3000,
                    "I cannot wait to hold your hand and look into your eyes",
                    3000,
                    "And tell you that I love you",
                    3000,
                    "Theese days will be heavy, theese days will be tough",
                    3000,
                    "But the only thing which is giving me hope of making it through is knowing that all of it will be better",
                    3000,
                    "I will use these days to truly work on myself, to truly talk to myself and fight the part of me which I absolutely dislike",
                    3000,
                    "I know I will come out stronger, matured, better for you",
                    3000,
                    "I wont let it happen again, I will always hold a grudge against myself",
                    3000,
                    "I will change for the better, for the better of our future",
                    3000,
                    "Because I love you",
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
            “Thinking of you keeps me awake. Dreaming of you keeps me asleep.
            Being with you keeps me alive.”
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
