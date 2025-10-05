import React, { useState, useEffect, useRef } from "react";
import "./HeartGame.css";

const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const BASKET_WIDTH = 80;
const HEART_SIZE = 30;

const HEARTS = ["❤️"];
const SPECIAL_HEART = "💎";

export default function HeartGame() {
  const basketXRef = useRef(GAME_WIDTH / 2 - BASKET_WIDTH / 2);
  const [hearts, setHearts] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  // Move basket without touching React state
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")
        basketXRef.current = Math.max(0, basketXRef.current - 20);
      if (e.key === "ArrowRight")
        basketXRef.current = Math.min(
          GAME_WIDTH - BASKET_WIDTH,
          basketXRef.current + 20
        );

      const basket = document.getElementById("basket");
      if (basket)
        basket.style.transform = `translateX(${basketXRef.current}px)`;
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Spawn hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const special = Math.random() < 0.1;
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * (GAME_WIDTH - HEART_SIZE),
          y: 0,
          emoji: special
            ? SPECIAL_HEART
            : HEARTS[Math.floor(Math.random() * HEARTS.length)],
          points: special ? 5 : 1,
        },
      ]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Move hearts and detect collisions
  useEffect(() => {
    const loop = setInterval(() => {
      setHearts((prev) => {
        const newHearts = [];

        prev.forEach((h) => {
          const newY = h.y + 5;
          const basketTop = GAME_HEIGHT - 30;
          const basketBottom = GAME_HEIGHT;
          const basketLeft = basketXRef.current;
          const basketRight = basketXRef.current + BASKET_WIDTH;

          // caught
          if (
            newY + HEART_SIZE >= basketTop &&
            newY <= basketBottom &&
            h.x + HEART_SIZE >= basketLeft &&
            h.x <= basketRight
          ) {
            setScore((s) => s + h.points);
            return; // remove heart
          }

          // missed (only decrement lives once)
          if (newY > GAME_HEIGHT && !h.missed) {
            setLives((l) => l - 1);
            h.missed = true;
            return; // remove heart
          }

          newHearts.push({ ...h, y: newY });
        });

        return newHearts;
      });
    }, 50);

    return () => clearInterval(loop);
  }, []);

  // Game over
  useEffect(() => {
    if (lives <= 0) {
      alert(`Game Over! Your score: ${score}`);
      setScore(0);
      setLives(3);
      setHearts([]);
      basketXRef.current = GAME_WIDTH / 2 - BASKET_WIDTH / 2;
      const basket = document.getElementById("basket");
      if (basket)
        basket.style.transform = `translateX(${basketXRef.current}px)`;
    }
  }, [lives, score]);

  return (
    <div className="game-container">
      <div className="hud">
        <div>❤️ Lives: {lives}</div>
        <div>⭐ Score: {score}</div>
      </div>

      {hearts.map((h) => (
        <div key={h.id} className="heart" style={{ left: h.x, top: h.y }}>
          {h.emoji}
        </div>
      ))}

      <div id="basket" className="basket" />
    </div>
  );
}
