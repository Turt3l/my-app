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
        const colors = ["red"];
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
      "Today is the first day of my trip",
      3000,
      "And I miss you a lot",
      3000,
      "I can only imagine us going on trips, on long beautiful trips",
      3000,
      "Where we go far, see many beautiful things and enjoy each others presence",
      3000,
      "Where we make these stops in the gas station",
      3000,
      "And we get each other things we want, drinks, snacks",
      3000,
      "But in the end, we like each others snack more, so we switch",
      3000,
      "We kiss, I hold my hand on your thigh while I drive",
      3000,
      "We look at each other, we laugh",
      3000,
      "You turn on the music, we listen to it and sing to it together",
      3000,
      "Life will be complete with you next to me",
      3000,
      "And you are my meaning to life, you are the reason to live",
      3000,
      "Knowing that you are on this planet makes it so much easier",
      3000,
      "Knowing that you are all mine, that we will go on adventures together",
      3000,
      "Makes every day pass away more easily",
      3000,
      "Because I know that every day is closer to use finally living together",
      3000,
      "I miss you my love",
      3000,
      "More than anything <3",
    ]);
  };

  const handleILoveEverythingAboutYou = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Today I have arrived to Germany, I am in Wolfsburg",
      3000,
      "The land of volkswagen sausages (check https://en.wikipedia.org/wiki/Volkswagen_currywurst for more info)",
      3000,
      "I would want to travel all around the world with you",
      3000,
      "Having the joy of reaching our destination, being able to get out",
      3000,
      "And breathe the fresh air",
      3000,
      "Look in each others eyes, and see them filled with happiness",
      3000,
      "Reaching the destination was no more exciting than getting there",
      3000,
      "Because every moment with you is exciting and beautiful",
      3000,
      "No matter how boring it may seem",
      3000,
      "I am always interested in everything you do, I find peace with you",
      3000,
      "I could look at you for days on end and I would be intrigued",
      3000,
      "Because that mind of yours is such a mystery",
      3000,
      "Whats going on in there?",
      3000,
      "Did I forgot to get her a snack, or is she just tired?",
      3000,
      "Turns out she is just on her last straw, not even putting matches in her eyes could make her stay woken up",
      3000,
      "So you sleep in the car, while I drive around the city, trying to find a parking lot",
      3000,
      "I park the car, give you my hoodie as a blanket and watch you fall asleep",
      3000,
      "And I fall asleep next to you, while looking at you and smiling",
      3000,
      "I am incredibly happy to have you, happy like never before",
      3000,
    ]);
  };

  const handleDayThree = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Today I will be exploring around the city",
      3000,
      "Going on a tour of the factory",
      3000,
      "Visiting the famous Volkswagen car tower",
      3000,
      "And just walking around the city",
      3000,
      "When we go somewhere",
      3000,
      "We will explore everything, the old town, museums",
      3000,
      "We will do many fun things together",
      3000,
      "Get ice cream, explore the city and do fun activities together",
      3000,
      "Everything with you is fun",
      3000,
      "Just sitting next to you doing nothing feels like I am doing something",
      3000,
      "Because it feels fun, it feels right and never does it feel boring to be with you",
      3000,
      "You are absolutely amazing and I love you so much",
      3000,
      "I cannot wait to play cards with you in the most random spots",
      3000,
      "To stop alongside a highway to pull out chairs and eat sandwhiches together",
      3000,
      "To me pushing the car to the gas station while you sit inside and steer",
      3000,
      "All of those moments would be the best moments of my life",
      3000,
      "Only because you are in them <3",
    ]);
  };

  const handleDayFour = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Today we will be traveling to another city",
      3000,
      "During these days I have been starting to miss you a lot",
      3000,
      "I would give anything to be with you right now, to be next to you",
      3000,
      "To feel your warmth and touch",
      3000,
      "I miss going to the gas station together",
      3000,
      "I miss eating ice cream together",
      3000,
      "I miss going for late night walks",
      3000,
      "Oh god I miss all these things so much",
      3000,
      "It just makes me want to cry",
      3000,
      "Why did it have to be over so quickly",
      3000,
      "The only thing thats holding me together is knowing that one day we will be together again",
      3000,
      "In each others arms, in comfort",
      3000,
      "Looking at each other",
      3000,
      "With such trust, care",
      3000,
      "That nothing in this world can break us up",
      3000,
      "We are indestructable",
      3000,
      "We will make it through everything",
      3000,
      "I will always be by your side",
      3000,
      "Forever.",
    ]);
  };

  const handleDayFive = () => {
    setShowButtons(false);
    setStage(1);
    setAnimationSequence([
      "Today I am coming back home",
      3000,
      "I am coming back home to my most beautiful, most prettiest wife ever",
      3000,
      "During this whole trip there was never a time when I didnt think about you",
      3000,
      "There was never a moment when I didnt imagine us going on a trip together",
      3000,
      "Spending time together, looking at each other",
      3000,
      "Its beautiful, it really is",
      3000,
      "The bond that we have I will never find in anyone else",
      3000,
      "The understanding, the fiestiness",
      3000,
      "You are unique, you are the best, you are perfect",
      3000,
      "You are my wife",
      3000,
      "And I want to spend my whole life with you, no matter how much time it takes",
      3000,
      "Today I am coming home to you, finally",
      3000,
      "This weekend is ours, lets spend it together",
      3000,
      "Give me a call when I come home, lets play some minecraft?",
      3000,
      "Lets spend some time together, time that we need so desperately <3",
      3000,
      "I missed you",
      3000,
      "I really did <3",
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleYourAttentionToDetail} style={buttonStyle}>
          Day 1
        </button>
        <button onClick={handleILoveEverythingAboutYou} style={buttonStyle}>
          Day 2
        </button>
        <button onClick={handleDayThree} style={buttonStyle}>
          Day 3
        </button>
        <button onClick={handleDayFour} style={buttonStyle}>
          Day 4
        </button>
        <button onClick={handleDayFive} style={buttonStyle}>
          Day 5
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
                    "I will miss you so much these days",
                    3000,
                    "And I want you to look at each one of these every day",
                    3000,
                    "You are the most important thing I have",
                    3000,
                    "I cannot wait to go on our first roadtrip <3",
                    3000,
                    "Together <3",
                    3000,
                    "I love you so much wifey",
                    3000,
                    "And I already miss you, so so much",
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
            “I would rather spend one lifetime with you, than face all the ages
            of this world alone.”
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
  color: "pink",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;

// ADDD MUSIC :DDDD MAJDA REQUEST
