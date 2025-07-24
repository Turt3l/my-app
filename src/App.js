import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function FloatingHearts() {
  const hearts = Array.from({ length: 25 });

  return (
    <div className="floating-background">
      {hearts.map((_, i) => {
        const size = Math.random() * 20 + 10;
        return (
          <motion.div
            key={i}
            className="heart"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
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

  useEffect(() => {
    const startDate = new Date(2024, 10, 24);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysTogether(days);
  }, []);

  const handleBackToOptions = () => {
    setShowButtons(true);
    setAnimationSequence(null);
    setStage(0);
  };

  const handleMakeDayMessage = () => {
    setShowButtons(false);
    setStage(2);
    setAnimationSequence([
      "These walks meant a lot more to me than you think",
      3000,
      "Its the most fun I have ever had in my life",
      3000,
      "The countless topics we discuss, the funny stories we tell each other",
      3000,
      "Combined with your beautiful soothing voice...",
      3000,
      "Us going to the gas station, getting our favourite drinks",
      3000,
      "And in the end switching them, because we like each others more",
      3000,
      "I still go back to those memories every day",
      3000,
      "Because every moment with you feels right, it feels special",
      3000,
      "And I wish it to never end",
      3000,
      "May our lives walk together hand in hand",
      3000,
      "And may those hands never let go",
      3000,
      "Lets take a walk that lasts for eternity...",
      3000,
    ]);
  };

  const handleBrightenMessage = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "These walks to the store, either urgent or planned",
      3000,
      "Make me feel so close to you",
      3000,
      "Helping you pick food, carry those grocieries...",
      3000,
      "And annoying that automatic product scanner guy :D",
      3000,
      "Every time you looked at me for my opinion",
      3000,
      "I couldnt help but wonder as to what did I do to deserve you",
      3000,
      "After buying groceries I couldnt help but smile every time we debated who will carry the bags",
      3000,
      "Every time we jumped the fence, I remember extremely clearly",
      3000,
      "It makes me feel like a kid again, like I have a friend which I so desperately needed and didnt have",
      3000,
      "Going to the bus station, making jokes, laughing",
      3000,
      "Eventually realising that we missed the bus",
      3000,
      "We sit down and look up at the sky, to see the stars",
      3000,
      "Silently I wished that we may shine like two stars together, forever",
      3000,
      "I love you so much Majda, and just so you know",
      3000,
      "I will always carry the bags, because they are light",
      3000,
    ]);
  };

  const handleErrandsTogether = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "Every day we woke up with something to do",
      3000,
      "Some documents that need be handed in",
      3000,
      "Something that needs to get done",
      3000,
      "Doing these things with you made me see you how you are every day",
      3000,
      "It was beautiful, just like every other day",
      3000,
      "I loved following you, doing theese things with you",
      3000,
      "Cursing everyone and everything with you",
      3000,
      "Those didnt feel like chores, it felt like fun",
      3000,
      "And during these moments, I realize that with you even work feels like fun",
      3000,
      "Even during these stressful errands, you still show your love towards me",
      3000,
      "The way you touch me, the kisses you give",
      3000,
      "They last for the entire day, there wasnt a moment when I didnt feel loved",
      3000,
      "May your fire never go out, be yourself, because you are beautiful",
      3000,
      "I love my Majda, I dont want any other version other than you, pure you and only you",
      3000,
    ]);
  };

  const handleBrunchesTogether = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "Seeing you dress up",
      3000,
      "In your beautiful yellow dress",
      3000,
      "Wearing your white heels, making your hair",
      3000,
      "Makes my mind go on pause, makes me become clumsy, because I cannot take my eyes off from you",
      3000,
      "Seeing your beautiful hair swing in the air as you look at me and say that its time to go to the bus",
      3000,
      "Makes me fall in love with you all over again",
      3000,
      "Absolutely nothing will ever make me think otherwise...",
      3000,
      "Having the privilige to pull back the chair for you",
      3000,
      "See you sit down, and look at me longingly for me to sit down next to you",
      3000,
      "Makes me wonder what did I do to make such a beautiful woman be so obsessed over me",
      3000,
      "When we share our food, make each other taste what we picked",
      3000,
      "Shows to me that on every adventure I will be right next to you",
      3000,
      "That whatever happens to us, we will be together, we will both experience it together",
      3000,
      "I know its just sharing food, but all of theese things mean a lot more to me than you think",
      3000,
      "Everything about you is utterly beautiful my love",
      3000,
      "And I know that this beauty will last forever",
      3000,
      "Because you are what makes it all so beautiful",
      3000,
    ]);
  };

  const handleDinnerTogether = () => {
    setShowButtons(false);
    setStage(3);
    setAnimationSequence([
      "Making dinner together with you",
      3000,
      "Makes me feel like our engagement day all over again",
      3000,
      "Not knowing how the evening will unfold, to where the meal will lead us after",
      3000,
      "And this mystery is what makes it all so intriguing",
      3000,
      "Us working together in this chaotic environment, so many things happening at the same time",
      3000,
      "And us still finding the moment to kiss each other, touch each other",
      3000,
      "Makes me realize that through every little moment, there is always love",
      3000,
      "Love so unconditonal, so pure",
      3000,
      "That poems are written about",
      3000,
      "In the end we get to sit down together",
      3000,
      "And taste the meal we made together",
      3000,
      "Deep down I have a sense of relief, that after the long day, we still have the energy to make the last meal of the day",
      3000,
      "And the only thing that I can think to myself is -",
      3000,
      "That the love for us knows no boundries, we will always have energy to show it to each other",
      3000,
      "And thats what makes it all so beautiful - the love for each other",
      3000,
      "The patience to help each other, to make something beautiful together",
      3000,
      "Shows just how everything we do together is absolutely beautiful",
      3000,
      "And is only enjoyable and cherishable when done together",
    ]);
  };

  const renderButtons = () =>
    showButtons ? (
      <>
        <button onClick={handleMakeDayMessage} style={buttonStyle}>
          Going on late night walks
        </button>
        <button onClick={handleBrightenMessage} style={buttonStyle}>
          Going to the store
        </button>
        <button onClick={handleErrandsTogether} style={buttonStyle}>
          Doing errands together
        </button>
        <button onClick={handleBrunchesTogether} style={buttonStyle}>
          Going on brunches together
        </button>
        <button onClick={handleDinnerTogether} style={buttonStyle}>
          Making dinner together
        </button>
      </>
    ) : null;

  return (
    <div className="App">
      <FloatingHearts />
      <div className="content-wrapper">
        <header className="App-header">
          <div className="days-counter">
            Days we haven't been married yet: {daysTogether}
          </div>
          {!animationSequence && renderButtons()}
          {!animationSequence && !showButtons && (
            <TypeAnimation
              sequence={[
                "You being in my arms is the biggest gift I have ever received",
                3000,
                "To have the person I love the most right next to me, hugging me tightly and not letting me go",
                3000,
                "Knowing that you will be next to me no matter what, supporting me, cheering me on",
                3000,
                "It makes me feel at ease, feel like nothing in this life can go wrong",
                3000,
                "It brings me such peace like never before, knowing that I can trust you and love you fully",
                3000,
                "That every single day I get to call you my wife, my partner and my everything",
                3000,
                "Seeing your big brown beautiful eyes staring at me so longingly",
                3000,
                "Makes me wonder that what there is more to life",
                3000,
                "Other than the warmth you give, the unconditional love, patience and respect you give me",
                3000,
                "Living with you was, is and will always be a dream of mine, because with you time flies",
                3000,
                "With you it feels like I am with just the right person, that nothing can go wrong",
                3000,
                "What is your favourite thing about us living together?",
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
        </header>
        <div className="quote">
          “You fill my life with laughter, and somehow you make it better...
          Ease my troubles, that's what you do.”
        </div>
      </div>
    </div>
  );
}

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
