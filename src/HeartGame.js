import React, { useEffect, useRef, useState } from "react";

const HeartGame = () => {
  const canvasRef = useRef();
  const [gameState, setGameState] = useState("ready"); // ready, playing, won
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef(null);
  const jumpSoundRef = useRef();
  const collectSoundRef = useRef();
  const winSoundRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Game assets
    const player = {
      x: 50,
      y: 300,
      width: 30,
      height: 40,
      color: "#ff4d6d",
      dx: 0,
      dy: 0,
      speed: 5,
      jumping: false,
    };

    const gravity = 0.5;
    const friction = 0.8;
    const ground = 350;

    const keys = {};

    // Platforms array
    const platforms = [
      { x: 150, y: 300, width: 100, height: 20 },
      { x: 350, y: 250, width: 100, height: 20 },
      { x: 550, y: 200, width: 100, height: 20 },
      { x: 200, y: 200, width: 80, height: 20 },
    ];

    // Hearts array with different types
    const hearts = [
      { x: 180, y: 280, type: "normal", collected: false },
      { x: 380, y: 230, type: "normal", collected: false },
      { x: 580, y: 180, type: "normal", collected: false },
      { x: 230, y: 180, type: "special", collected: false },
      { x: 650, y: 150, type: "special", collected: false },
    ];

    // Draw player with a simple character design
    function drawPlayer() {
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.width, player.height);
      
      // Add eyes
      ctx.fillStyle = "white";
      ctx.fillRect(player.x + 7, player.y + 10, 5, 5);
      ctx.fillRect(player.x + 18, player.y + 10, 5, 5);
      
      // Add smile
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.arc(player.x + 15, player.y + 20, 7, 0.2, Math.PI - 0.2);
      ctx.stroke();
    }

    // Draw platforms
    function drawPlatforms() {
      ctx.fillStyle = "#a4de02";
      platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        
        // Platform top
        ctx.fillStyle = "#76ba1b";
        ctx.fillRect(platform.x, platform.y, platform.width, 5);
        ctx.fillStyle = "#a4de02";
      });
    }

    // Draw hearts with different colors based on type
    function drawHearts() {
      hearts.forEach((h) => {
        if (!h.collected) {
          ctx.beginPath();
          ctx.fillStyle = h.type === "special" ? "#ff9d00" : "#ff4d6d";
          ctx.arc(h.x, h.y, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
          
          // Add shine effect
          ctx.beginPath();
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.arc(h.x - 3, h.y - 3, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.closePath();
        }
      });
    }

    // Draw background elements
    function drawBackground() {
      // Sky
      const gradient = ctx.createLinearGradient(0, 0, 0, ground);
      gradient.addColorStop(0, "#cce7ff");
      gradient.addColorStop(1, "#e4f2ff");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, ground);
      
      // Ground
      ctx.fillStyle = "#ffaec9";
      ctx.fillRect(0, ground, canvas.width, canvas.height - ground);
      
      // Grass details
      ctx.fillStyle = "#76ba1b";
      for (let i = 0; i < canvas.width; i += 15) {
        ctx.fillRect(i, ground, 5, -Math.random() * 10 + 5);
      }
      
      // Clouds
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      ctx.arc(100, 70, 25, 0, Math.PI * 2);
      ctx.arc(130, 60, 30, 0, Math.PI * 2);
      ctx.arc(160, 70, 25, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(600, 90, 20, 0, Math.PI * 2);
      ctx.arc(630, 80, 25, 0, Math.PI * 2);
      ctx.arc(660, 90, 20, 0, Math.PI * 2);
      ctx.fill();
    }

    // Check platform collisions
    function checkPlatformCollision() {
      let onPlatform = false;
      
      platforms.forEach(platform => {
        if (
          player.x + player.width > platform.x &&
          player.x < platform.x + platform.width &&
          player.y + player.height > platform.y &&
          player.y + player.height < platform.y + platform.height / 2 &&
          player.dy > 0
        ) {
          player.y = platform.y - player.height;
          player.dy = 0;
          player.jumping = false;
          onPlatform = true;
        }
      });
      
      return onPlatform;
    }

    // Update game state
    function update() {
      if (gameState !== "playing") return;
      
      // Horizontal movement
      if (keys["ArrowRight"] || keys["d"]) {
        player.dx = player.speed;
      } else if (keys["ArrowLeft"] || keys["a"]) {
        player.dx = -player.speed;
      } else {
        player.dx *= friction;
      }

      // Jumping
      if ((keys["ArrowUp"] || keys["w"] || keys[" "]) && !player.jumping) {
        player.dy = -12;
        player.jumping = true;
        if (jumpSoundRef.current) {
          jumpSoundRef.current.currentTime = 0;
          jumpSoundRef.current.play();
        }
      }

      // Apply gravity
      player.dy += gravity;

      // Update position
      player.x += player.dx;
      player.y += player.dy;

      // Check if on platform
      const onPlatform = checkPlatformCollision();
      
      // Ground collision
      if (player.y + player.height > ground && !onPlatform) {
        player.y = ground - player.height;
        player.dy = 0;
        player.jumping = false;
      }

      // Screen boundaries
      if (player.x < 0) player.x = 0;
      if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

      // Heart collection
      hearts.forEach((h) => {
        if (
          !h.collected &&
          player.x < h.x + 10 &&
          player.x + player.width > h.x - 10 &&
          player.y < h.y + 10 &&
          player.y + player.height > h.y - 10
        ) {
          h.collected = true;
          const points = h.type === "special" ? 3 : 1;
          setScore(prev => prev + points);
          
          if (collectSoundRef.current) {
            collectSoundRef.current.currentTime = 0;
            collectSoundRef.current.play();
          }
        }
      });

      // Win condition
      if (hearts.every((h) => h.collected)) {
        setGameState("won");
        if (winSoundRef.current) {
          winSoundRef.current.play();
        }
        clearInterval(timerRef.current);
      }
    }

    // Draw everything
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawBackground();
      drawPlatforms();
      drawPlayer();
      drawHearts();
      
      // Draw score and time
      ctx.fillStyle = "#333";
      ctx.font = "16px Arial";
      ctx.fillText(`Hearts: ${score}`, 20, 30);
      ctx.fillText(`Time: ${timeLeft}s`, 20, 50);
    }

    // Game loop
    function loop() {
      update();
      draw();
      requestAnimationFrame(loop);
    }

    // Handle keyboard events
    function handleKeyDown(e) {
      // Prevent spacebar from scrolling the page
      if (e.key === " " && gameState === "playing") {
        e.preventDefault();
      }
      
      keys[e.key] = true;
      
      // Start game on any key if in ready state
      if (gameState === "ready" && !e.repeat) {
        startGame();
      }
    }

    function handleKeyUp(e) {
      keys[e.key] = false;
    }

    // Start the game
    function startGame() {
      setGameState("playing");
      setScore(0);
      setTimeLeft(60);
      
      // Reset player
      player.x = 50;
      player.y = 300;
      player.dx = 0;
      player.dy = 0;
      player.jumping = false;
      
      // Reset hearts
      hearts.forEach(h => h.collected = false);
      
      // Start timer
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setGameState("ready");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    // Initialize game
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    loop();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      clearInterval(timerRef.current);
    };
  }, [gameState]);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#ff4d6d" }}>Collect all the hearts 💕</h2>
      
      <div style={{ position: "relative", display: "inline-block" }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          style={{ border: "3px solid #ff4d6d", borderRadius: "10px", background: "#f8e0e6" }}
        />
        
        {gameState === "ready" && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "7px"
          }}>
            <h2>Heart Collector</h2>
            <p>Use arrow keys or WASD to move</p>
            <p>Press SPACE or UP to jump</p>
            <p>Collect all hearts before time runs out!</p>
            <button 
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                backgroundColor: "#ff4d6d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px"
              }}
            >
              Start Game
            </button>
          </div>
        )}
        
        {gameState === "won" && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "7px"
          }}>
            <h2>You Win! 💖</h2>
            <p>You collected all hearts with {timeLeft} seconds left!</p>
            <p>Final Score: {score}</p>
            <button 
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                backgroundColor: "#ff4d6d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px"
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      
      <div style={{ marginTop: "15px" }}>
        <p>Normal hearts: 1 point | Special hearts: 3 points</p>
      </div>
      
      {/* Sound effects */}
      <audio ref={jumpSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-player-jumping-in-a-video-game-2043.mp3" preload="auto" />
      <audio ref={collectSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3" preload="auto" />
      <audio ref={winSoundRef} src="https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3" preload="auto" />
    </div>
  );
};

export default HeartGame;