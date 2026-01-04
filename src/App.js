import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import sound from "./beep.wav";

const beep = new Audio(sound);

const dialog1 = [
  {
    char: "Miki",
    text: "My love!! How was your flight? I missed you so so much and I am glad you are finally here!!",
  },
  {
    char: "Majo",
    text: "I missed you tooooo, I am so happy to finally be with youuu",
  },
  {
    char: "Miki",
    text: "Come on, come to the car, I put winter tires on the Jetta :3",
  },
  {
    char: "Majo",
    text: "Ohhh, did you? I thought you were gonna come with your dads fiat?",
  },
];

const dialog2 = [
  {
    char: "Majo",
    text: "The car is so warm, I thought it would be colder!",
  },
  {
    char: "Miki",
    text: "Yeeees, I sat in the passenger seat so its warm for you!",
  },
  {
    char: "Majo",
    text: "Why is the car not starting tho? Maybe something is wrong?",
  },
  {
    char: "Miki",
    text: "No no, dont worry, thats how it should be like",
  },
  {
    char: "Majo",
    text: "Are you sure? You have tried 3 times already-",
  },
  {
    char: "Miki",
    text: "Hahaha, there you go, as smooth as butter",
  },
];

function Bouquet() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -20 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      style={{
        fontSize: "6rem",
        marginTop: "20px",
        cursor: "pointer",
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      🚗
    </motion.div>
  );
}

function App() {
  const [lineIndex, setLineIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [started, setStarted] = useState(false);
  const [showBouquet, setShowBouquet] = useState(false);
  const [secondDialogStarted, setSecondDialogStarted] = useState(false);
  const [lineIndex2, setLineIndex2] = useState(0);
  const [showText2, setShowText2] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);
  const [showFinalEmoji, setShowFinalEmoji] = useState(false);

  // Calculate days together
  useEffect(() => {
    const startDate = new Date(2024, 10, 24); // November is month 10 (0-indexed)
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  // Unlock audio after first click
  useEffect(() => {
    const unlockAudio = () => {
      beep
        .play()
        .then(() => beep.pause())
        .catch(() => {});
      setAudioUnlocked(true);
      document.removeEventListener("click", unlockAudio);
    };
    document.addEventListener("click", unlockAudio);
    return () => document.removeEventListener("click", unlockAudio);
  }, []);

  // First dialog animation
  useEffect(() => {
    if (started && lineIndex < dialog1.length) {
      setShowText(false);
      const timer = setTimeout(() => setShowText(true), 200);
      return () => clearTimeout(timer);
    } else if (started && lineIndex >= dialog1.length) {
      setShowBouquet(true);
    }
  }, [lineIndex, started]);

  // Second dialog animation
  useEffect(() => {
    if (secondDialogStarted && lineIndex2 < dialog2.length) {
      setShowText2(false);
      const timer = setTimeout(() => setShowText2(true), 200);
      return () => clearTimeout(timer);
    } else if (secondDialogStarted && lineIndex2 >= dialog2.length - 1) {
      // Show final emoji after a short delay
      const timer = setTimeout(() => setShowFinalEmoji(true), 500);
      return () => clearTimeout(timer);
    }
  }, [lineIndex2, secondDialogStarted]);

  const startDialog = () => setStarted(true);

  const nextLine = () => {
    if (audioUnlocked) {
      beep.currentTime = 0;
      beep.play().catch(() => {});
    }
    if (lineIndex < dialog1.length) {
      setLineIndex(lineIndex + 1);
    }
  };

  const nextLine2 = () => {
    if (audioUnlocked) {
      beep.currentTime = 0;
      beep.play().catch(() => {});
    }
    if (lineIndex2 < dialog2.length - 1) {
      setLineIndex2(lineIndex2 + 1);
    } else {
      // mark end of second dialogue
      setLineIndex2(dialog2.length);
    }
  };

  const handleBouquetClick = () => {
    setShowBouquet(false);
    setSecondDialogStarted(true);
  };

  return (
    <div className="App">
      {started && !showFinalEmoji && (
        <div className="days-together">
          Days we havent been married yet: {daysTogether}
        </div>
      )}

      <div className="scene">
        {!started && (
          <button className="start-button" onClick={startDialog}>
            Start
          </button>
        )}

        {/* First dialogue */}
        {started && lineIndex < dialog1.length && !showFinalEmoji && (
          <>
            <motion.div
              className="character hero"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              👦🏻
            </motion.div>
            <motion.div
              className="character partner"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            >
              👩🏻
            </motion.div>
            <motion.div
              className="dialog-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: showText ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={nextLine}
            >
              <strong>{dialog1[lineIndex].char}:</strong>{" "}
              {dialog1[lineIndex].text}
              <div style={{ fontSize: "0.7rem", marginTop: "5px" }}>
                (click to continue)
              </div>
            </motion.div>
          </>
        )}

        {/* Bouquet */}
        {showBouquet && !secondDialogStarted && !showFinalEmoji && (
          <div onClick={handleBouquetClick}>
            <Bouquet />
            <div
              style={{
                fontSize: "0.7rem",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              Get in the Jetta
            </div>
          </div>
        )}

        {/* Second dialogue */}
        {secondDialogStarted && !showFinalEmoji && (
          <>
            <motion.div
              className="character hero"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              👦🏻
            </motion.div>
            <motion.div
              className="character partner"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            >
              👩🏻
            </motion.div>
            <motion.div
              className="dialog-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: showText2 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={nextLine2}
            >
              <strong>{dialog2[lineIndex2]?.char}</strong>:{" "}
              {dialog2[lineIndex2]?.text}
              <div style={{ fontSize: "0.7rem", marginTop: "5px" }}>
                (click to continue)
              </div>
            </motion.div>
          </>
        )}

        {/* Final emoji */}
        {showFinalEmoji && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            style={{ fontSize: "6rem", textAlign: "center", margin: "auto" }}
          >
            phew...
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
